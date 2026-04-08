<script>
  import { onMount } from "svelte";
  import { Page, Block, f7, Popup, Link } from "framework7-svelte";
  import CustomNavbar from "../assets/navbar.svelte";
  import GalleryElement from "../assets/galleryElement.svelte";
  import { activityData } from "../data/activityData";
  import Progress from "../assets/progress.svelte";

  import store from "../js/store";
  const isMobile = store.getters.isMobile.value;

  let visibleSections = $state(new Set());
  let sections = $state([]);
  let progress = $state({ start: 0, end: 0 });
  let popupOpened = $state(false);
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
    popupOpened = false;
    currentCertificate = null;
    f7.popup.close(".popupPost", true);
  }

  function handleCertificateOpen(event) {
    currentCertificate = event.detail;
    popupOpened = true;
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

<Page name="activity" class="text-left">
  <div class="relative">
    <!-- Navbar -->
    <Block
      class="flex flex-col md:grid md:grid-cols-2 overflow-hidden mt-0 mb-24 navbar-placeholder"
    >
      <CustomNavbar pageName="Activity" />
    </Block>

    <!-- Timeline Bar -->
    {#if !isMobile}
      <div
        class="sticky top-0 z-50 py-4 bg-white/80 backdrop-blur-sm dark:bg-black/80"
      >
        <div class="mx-10 md:mx-24 px-4">
          <div class="relative">
            <Progress value={progress} />

            <!-- Timeline dots -->
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
                  <!-- Tooltip -->
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
                      class="text-sm bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap"
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

    <!-- Content Sections -->
    <div class="mx-10 md:mx-24 mt-14 px-4 py-8 space-y-24">
      {#each activityData as activity}
        <div
          class="scroll-mt-32"
          use:bindSections
          data-date={activity.date}
          data-id={activity.id}
        >
          <GalleryElement
            mediaItems={activity.media}
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
  <Popup
    class="popupPost"
    opened={popupOpened}
    onPopupClosed={() => (popupOpened = false)}
  >
    <Page class="m-0 p-0">
      <navbar
        title={currentCertificate.title}
        class="bg-white dark:bg-black grid float-end h-16"
      >
        <Link popupClose onClick={() => closePopup()} class="text-xl m-4"
          >Close</Link
        >
      </navbar>
      <div class="h-[calc(100vh-4rem)]">
        <iframe
          src={currentCertificate.file}
          title={currentCertificate.title}
          class="w-full h-full"
        ></iframe>
      </div>
    </Page>
  </Popup>
{/if}

<style>
  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    :global(html) {
      scroll-behavior: auto;
    }
  }
</style>
