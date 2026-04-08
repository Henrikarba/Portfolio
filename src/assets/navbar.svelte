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
      <h1 class="text-4xl md:ml-24 md:text-left">{pageName}</h1>
    </div>
    <div class="items-center gap-5 text-xl hidden md:flex">
      {#each links as link}
        {#if link.name !== pageName}
          <a href={link.href}>{link.name}</a>
        {:else}
          <a href="/">Portfolio</a>
        {/if}
      {/each}
    </div>
  </div>
</div>
