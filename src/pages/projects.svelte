<script>
  import { onMount } from "svelte";
  import { Page, Block, Link } from "framework7-svelte";
  import { f7 } from "framework7-svelte";
  import CustomNavbar from "../assets/navbar.svelte";
  import { projectsData } from "../data/projectsData";

  import store from "../js/store";
  const isMobile = store.getters.isMobile.value;

  let projectVisibility = $state(projectsData.map(() => false));

  onMount(() => {
    const setupAnimations = () => {
      const projectElements = document.querySelectorAll(".project-section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
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
          threshold: 0.1,
          rootMargin: "-50px 0px -50px 0px",
        }
      );

      projectElements.forEach((el) => {
        observer.observe(el);
      });
    };

    setTimeout(setupAnimations, 300);
  });
</script>

<Page name="projects" class="text-left text-lg">
  <div class="relative">
    <Block
      class="flex flex-col md:grid md:grid-cols-2 overflow-hidden mt-0 mb-24 navbar-placeholder"
    >
      <CustomNavbar pageName="Projects" />
    </Block>

    <div class="px-4 md:px-20 py-8 mt-14 space-y-24 md:space-y-32">
      {#each projectsData as project, index}
        <div
          class="project-section relative overflow-hidden"
          data-index={index}
        >
          <div
            class="flex flex-col {index % 2 === 0
              ? 'md:flex-row'
              : 'md:flex-row-reverse'} gap-8 items-start
                  transition-all duration-1000 ease-out
                  {projectVisibility[index] ? 'opacity-100' : 'opacity-0'} 
                  {projectVisibility[index] ? 'translate-y-0' : 'translate-y-8'}
                  {index % 2 === 0
              ? projectVisibility[index]
                ? 'translate-x-0'
                : '-translate-x-32'
              : ''}
                  {index % 2 !== 0
              ? projectVisibility[index]
                ? 'translate-x-0'
                : 'translate-x-32'
              : ''}"
          >
            <div
              class="w-full md:w-2/5 lg:w-1/3 transition-all duration-500 delay-100 {projectVisibility[
                index
              ]
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'}"
            >
              <div
                class="shadow-md hover:shadow-lg transition-all duration-500 rounded-lg overflow-hidden transform h-full"
              >
                <img src={project.media.src} alt={project.media.alt} />
              </div>
            </div>

            <div
              class="w-full md:w-3/5 lg:w-2/3 transition-all duration-500 delay-200 {projectVisibility[
                index
              ]
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-98'}"
            >
              <h2 class="text-2xl font-bold mb-4">{project.title}</h2>

              <div class="flex flex-wrap gap-2 mb-4">
                {#each project.technologies as tech, techIndex}
                  <span
                    class="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 px-3 py-1 rounded-full text-sm hover:transform hover:scale-105
                          transition-all duration-500 {projectVisibility[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'}"
                    style="transition-delay: {300 + techIndex * 50}ms"
                  >
                    {tech}
                  </span>
                {/each}
              </div>

              <p
                class="whitespace-pre-wrap mb-6 transition-all duration-500 delay-300 {projectVisibility[
                  index
                ]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'}"
              >
                {project.text}
              </p>

              <div
                class="flex flex-wrap gap-3 transition-all duration-500 delay-400 {projectVisibility[
                  index
                ]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'}"
              >
                {#if project.links?.github}
                  <Link
                    external
                    href={project.links.github}
                    class="flex items-center bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-3 py-2 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md mb-2"
                  >
                    <i class="fab fa-github mr-2"></i>
                    <span>GitHub</span>
                  </Link>
                {/if}

                {#if project.links?.demo}
                  <Link
                    external
                    href={project.links.demo}
                    class="flex items-center bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-3 py-2 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md mb-2"
                  >
                    <i class="fas fa-laptop-code mr-2"></i>
                    <span>Demo</span>
                  </Link>
                {/if}

                {#if project.links?.website}
                  <Link
                    external
                    href={project.links.website}
                    class="flex items-center bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-3 py-2 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md mb-2"
                  >
                    <i class="fas fa-globe mr-2"></i>
                    <span>Website</span>
                  </Link>
                {/if}

                {#if project.links?.documentation}
                  <Link
                    external
                    href={project.links.documentation}
                    class="flex items-center bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-3 py-2 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md mb-2"
                  >
                    <i class="fas fa-book mr-2"></i>
                    <span>Docs</span>
                  </Link>
                {/if}

                {#if project.links?.blogPost}
                  <Link
                    external
                    href={project.links.blogPost}
                    class="flex items-center bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-3 py-2 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md mb-2"
                  >
                    <i class="fas fa-newspaper mr-2"></i>
                    <span>Blog Post</span>
                  </Link>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</Page>
