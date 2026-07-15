<script>
  import { onMount } from "svelte";
  import { Page, Block } from "framework7-svelte";
  import CustomNavbar from "../assets/navbar.svelte";
  import GalleryElement from "../assets/galleryElement.svelte";
  import { activityData } from "../data/activityData";
  import Progress from "../assets/progress.svelte";

  import store from "../js/store";
  const isMobile = store.getters.isMobile.value;

  let visibleSections = $state(new Set());
  let sections = $state([]);
  let progress = $state({ start: 0, end: 0 });
  let currentCertificate = $state(null);
  let hoveredDot = $state(null);
  let isHovered = $state(false);
  let isOverlapping = $state(false);

  function handleMouseEnter(index) {
    hoveredDot = index;
    isHovered = true;
    checkTooltipOverlap();
  }

  function handleMouseLeave() {
    hoveredDot = null;
    isHovered = false;
    checkTooltipOverlap();
  }

  function getTooltipOpacity(index, isHovered, hoveredDot, progress) {
    if (isOverlapping) {
      if (isHovered) {
        if (hoveredDot === index) {
          return "1";
        }
        return "0";
      }
      const isInActiveRange =
        (index / (activityData.length - 1)) * 100 >= progress.start &&
        (index / (activityData.length - 1)) * 100 <= progress.end;
      if (isInActiveRange) {
        return "1";
      }
      return "0";
    }
    return "1";
  }

  function closePopup() {
    currentCertificate = null;
  }

  function handleCertificateOpen(event) {
    currentCertificate = event.detail;
  }

  function handleKeydown(event) {
    if (event.key === "Escape" && currentCertificate) {
      closePopup();
    }
  }

  function calculateProgressRange(visibleSet) {
    if (visibleSet.size === 0) return { start: 0, end: 0 };

    const indices = Array.from(visibleSet)
      .map((id) => activityData.findIndex((item) => item.id === id))
      .filter((idx) => idx !== -1);

    if (indices.length === 0) return { start: 0, end: 0 };

    const minIndex = Math.min(...indices);
    const maxIndex = Math.max(...indices);
    const totalSections = activityData.length;

    return {
      start: (minIndex / (totalSections - 1)) * 100,
      end: (maxIndex / (totalSections - 1)) * 100,
    };
  }

  const bindSections = (node) => {
    sections = [...sections, node];
    return {
      destroy() {
        sections = sections.filter((n) => n !== node);
      },
    };
  };

  const scrollToSection = (id) => {
    const section = sections.find((section) => section.dataset.id === id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      checkTooltipOverlap();
    }
  };

  function checkTooltipOverlap() {
    const tooltips = document.querySelectorAll(".tooltip");
    isOverlapping = false;

    tooltips.forEach((tooltip) => {
      const rect1 = tooltip.getBoundingClientRect();
      tooltips.forEach((otherTooltip) => {
        if (tooltip !== otherTooltip) {
          const rect2 = otherTooltip.getBoundingClientRect();
          if (
            !(
              rect1.right < rect2.left ||
              rect1.left > rect2.right ||
              rect1.bottom < rect2.top ||
              rect1.top > rect2.bottom
            )
          ) {
            isOverlapping = true;
          }
        }
      });
    });
  }

  onMount(async () => {
    window.addEventListener("resize", checkTooltipOverlap);
    checkTooltipOverlap();
    // Intersection Observer for sections
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.dataset.id;
          if (entry.isIntersecting) {
            visibleSections.add(sectionId);
            updateActiveDot(entry.target.dataset.date);
          } else {
            visibleSections.delete(sectionId);
          }
          progress = calculateProgressRange(visibleSections);
          checkTooltipOverlap();
        });
      },
      {
        threshold: 0.33,
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
    return () => {
      window.removeEventListener("resize", checkTooltipOverlap);
    };
  });

  const updateActiveDot = (date) => {
    const dots = document.querySelectorAll(".timeline-dot");
    dots.forEach((dot) => {
      if (dot.dataset.date === date) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  };
</script>

<svelte:window onkeydown={handleKeydown} />

<Page name="activity" class="text-left">
  <div class="relative">
    <Block
      class="flex flex-col md:grid md:grid-cols-2 overflow-hidden mt-0 mb-24 navbar-placeholder"
    >
      <CustomNavbar pageName="Activity" />
    </Block>

    {#if !isMobile}
      <div
        class="sticky top-0 z-50 py-4 bg-white/80 backdrop-blur-sm dark:bg-black/80"
      >
        <div class="px-6 md:px-12 lg:px-28">
          <div class="relative">
            <Progress value={progress} />

            <div class="absolute top-0 w-full flex justify-between -mt-1">
              {#each activityData as activity, index}
                <div class="relative group">
                  <button
                    class="timeline-dot cursor-pointer w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 {(index /
                      (activityData.length - 1)) *
                      100 >=
                      progress.start &&
                    (index / (activityData.length - 1)) * 100 <= progress.end
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-gray-300'}  transition-all duration-300 hover:border-blue-300"
                    data-date={activity.date}
                    onclick={() => scrollToSection(activity.id)}
                    aria-label={activity.title}
                    onmouseenter={() => handleMouseEnter(index)}
                    onmouseleave={handleMouseLeave}
                  >
                  </button>

                  <div
                    class="absolute tooltip top-7
                  {index === 0
                      ? 'left-0'
                      : index === activityData.length - 1
                        ? 'right-0'
                        : 'left-1/2 -translate-x-1/2'}
                  transition-all duration-300 z-50 transform pointer-events-none"
                    style:opacity={getTooltipOpacity(
                      index,
                      isHovered,
                      hoveredDot,
                      progress
                    )}
                    data-index={index}
                  >
                    <span
                      class="text-sm bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 px-2 py-1 rounded whitespace-nowrap"
                    >
                      {activity.title}
                    </span>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/if}

    <div class="px-6 md:px-12 lg:px-28 pt-8 mt-8">
      <div class="mb-14 md:mb-20 border-b border-zinc-200 dark:border-zinc-800 pb-10">
        <p class="eyebrow mb-4">Journey</p>
        <h2 class="text-3xl md:text-5xl tracking-tight leading-tight max-w-2xl">
          Hackathons, competitions, and milestones.
        </h2>
      </div>
    </div>

    <div
      class="px-6 md:px-12 lg:px-28 pb-8 divide-y divide-zinc-200 dark:divide-zinc-800"
    >
      {#each activityData as activity}
        <div
          class="scroll-mt-32 py-12 md:py-16 first:pt-0"
          use:bindSections
          data-date={activity.date}
          data-id={activity.id}
        >
          <GalleryElement
            mediaItems={activity.media}
            date={activity.date}
            textItems={{
              title: activity.title,
              text: activity.text,
              link: activity.link,
            }}
            certificates={activity.certificates}
            on:openCertificate={handleCertificateOpen}
          />
        </div>
      {/each}
    </div>
  </div>
</Page>

{#if currentCertificate}
  <div
    class="certificate-modal"
    role="dialog"
    aria-modal="true"
    aria-label={currentCertificate.title}
    tabindex="-1"
  >
    <button
      type="button"
      class="certificate-backdrop"
      aria-label="Close certificate popup"
      onclick={closePopup}
    ></button>

    <div class="certificate-content bg-white dark:bg-black">
      <div class="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
        <h2 class="text-base md:text-lg font-semibold truncate pr-4">
          {currentCertificate.title}
        </h2>
        <button
          type="button"
          onclick={closePopup}
          class="text-xl"
          aria-label="Close certificate popup"
        >
          Close
        </button>
      </div>
      <div class="h-[calc(90vh-4rem)]">
        <iframe
          src={currentCertificate.file}
          title={currentCertificate.title}
          class="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
{/if}

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    :global(html) {
      scroll-behavior: auto;
    }
  }

  .certificate-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .certificate-backdrop {
    position: absolute;
    inset: 0;
    border: 0;
    background: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }

  .certificate-content {
    position: relative;
    z-index: 1;
    width: min(1200px, 96vw);
    max-height: 90vh;
    border-radius: 0.75rem;
    overflow: hidden;
  }
</style>
