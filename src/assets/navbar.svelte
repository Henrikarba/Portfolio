<script>
  import { Link } from "framework7-svelte";
  export let pageName;
  export let fallbackLevel;
  let textColor = "";

  if (pageName === "Portfolio" && fallbackLevel < 2) {
    textColor = "text-white";
  } else {
    textColor = "text-black";
  }

  // Home keeps its original fixed margin; content pages use responsive
  // margins that stay aligned with the page content at every breakpoint.
  const isHome = pageName === "Portfolio";
  const titleMargin = isHome ? "md:ml-24" : "md:ml-8 lg:ml-24";
  const linksMargin = isHome ? "md:mr-24" : "md:mr-8 lg:mr-24";

  const links = [
    { name: "Activity", href: "/activity/" },
    { name: "Projects", href: "/projects/" },
    { name: "Contact", href: "/contact/" },
  ];
</script>

<div
  class="relative z-20 flex justify-center items-center pt-5 col-span-2 dark:text-white {textColor}"
>
  <div class=" grid grid-cols-3 md:grid-cols-2 w-screen">
    <div class="flex items-center md:hidden">
      <Link
        class="ml-4"
        iconIos="f7:menu"
        iconMd="material:menu"
        panelOpen="left"
      />
    </div>
    <div class="hidden md:block"></div>
    <div
      class="flex items-center py-2 md:col-start-1 justify-center md:justify-normal"
    >
      <h1 class="text-4xl {titleMargin} md:text-left tracking-tight">{pageName}</h1>
    </div>
    <div
      class="items-center gap-8 text-sm uppercase tracking-[0.2em] hidden md:flex justify-end {linksMargin}"
    >
      {#each links as link}
        {#if link.name !== pageName}
          <a href={link.href} class="nav-link">{link.name}</a>
        {:else}
          <a href="/" class="nav-link">Portfolio</a>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  .nav-link {
    position: relative;
    padding-bottom: 0.25rem;
    opacity: 0.75;
    transition: opacity 0.25s ease;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .nav-link:hover {
    opacity: 1;
  }

  .nav-link:hover::after {
    transform: scaleX(1);
  }

  @media (prefers-reduced-motion: reduce) {
    .nav-link,
    .nav-link::after {
      transition: none;
    }
  }
</style>
