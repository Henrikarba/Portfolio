<script>
  import { onMount } from "svelte";
  import { Page, Block, Link } from "framework7-svelte";
  import CustomNavbar from "../assets/navbar.svelte";
  import { projectsData } from "../data/projectsData";

  import store from "../js/store";
  const isMobile = store.getters.isMobile.value;

  let projectVisibility = $state(projectsData.map(() => false));

  const linkMeta = {
    github: { icon: "fab fa-github", label: "GitHub" },
    demo: { icon: "fas fa-laptop-code", label: "Demo" },
    website: { icon: "fas fa-external-link-alt", label: "Visit site" },
    documentation: { icon: "fas fa-book", label: "Docs" },
    blogPost: { icon: "fas fa-newspaper", label: "Blog post" },
  };

  function projectLinks(links) {
    if (!links) return [];
    return Object.entries(links)
      .filter(([key, href]) => href && linkMeta[key])
      .map(([key, href]) => ({ href, ...linkMeta[key] }));
  }

  onMount(() => {
    const setupAnimations = () => {
      const projectElements = document.querySelectorAll(".project-section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.index, 10);
              if (!isNaN(index)) {
                projectVisibility[index] = true;
                observer.unobserve(entry.target);
              }
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "-40px 0px -40px 0px",
        }
      );

      projectElements.forEach((el) => observer.observe(el));
    };

    setTimeout(setupAnimations, 200);
  });
</script>

<Page name="projects" class="text-left">
  <div class="relative">
    <Block
      class="flex flex-col md:grid md:grid-cols-2 overflow-hidden mt-0 mb-16 navbar-placeholder"
    >
      <CustomNavbar pageName="Projects" />
    </Block>

    <div class="px-6 md:px-12 lg:px-28">
      <!-- Section intro -->
      <div class="mb-16 md:mb-24 border-b border-zinc-200 dark:border-zinc-800 pb-10">
        <p class="eyebrow mb-4">Selected Work</p>
        <h2 class="text-3xl md:text-5xl tracking-tight leading-tight max-w-2xl">
          Things I've designed, built, and shipped.
        </h2>
      </div>

      <div>
        {#each projectsData as project, index}
          <div
            class="project-section fade-item {projectVisibility[index]
              ? 'is-visible'
              : ''} py-14 md:py-20 {index !== 0
              ? 'border-t border-zinc-200 dark:border-zinc-800'
              : ''}"
            data-index={index}
            style="transition-delay: {Math.min(index, 2) * 60}ms"
          >
            <div class="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              <!-- Index + meta column -->
              <div class="md:col-span-1">
                <span
                  class="text-sm tabular-nums text-zinc-500 dark:text-zinc-600 tracking-widest"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <!-- Media column -->
              <div class="md:col-span-5">
                <div
                  class="overflow-hidden rounded-sm bg-zinc-50 dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 project-media"
                >
                  <img
                    src={project.media.src}
                    alt={project.media.alt}
                    class="w-full h-auto object-cover transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              <!-- Text column -->
              <div class="md:col-span-6">
                <h3 class="text-2xl md:text-3xl tracking-tight mb-4">
                  {project.title}
                </h3>

                <p
                  class="whitespace-pre-wrap text-zinc-700 dark:text-zinc-400 leading-relaxed mb-6"
                >
                  {project.text}
                </p>

                <div class="flex flex-wrap gap-x-4 gap-y-2 mb-7">
                  {#each project.technologies as tech}
                    <span
                      class="text-xs tracking-wide text-zinc-600 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  {/each}
                </div>

                {#if projectLinks(project.links).length}
                  <div class="flex flex-wrap gap-x-6 gap-y-3">
                    {#each projectLinks(project.links) as link}
                      <Link
                        external
                        href={link.href}
                        class="quiet-link text-sm text-zinc-800 dark:text-zinc-200"
                      >
                        <i class="{link.icon} text-xs"></i>
                        <span>{link.label}</span>
                      </Link>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="h-24"></div>
  </div>
</Page>

<style>
  .project-media:hover img {
    transform: scale(1.03);
  }

  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }
</style>
