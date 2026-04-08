<!-- GalleryElement.svelte -->
<script>
  import { onMount } from "svelte";
  import { Link } from "framework7-svelte";

  export let mediaItems = [];
  export let textItems = {};
  export let certificates = undefined;

  function openCertificate(cert) {
    dispatch("openCertificate", cert);
  }

  onMount(() => {
    const images = document.querySelectorAll(".gallery-image");
    images.forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });

    const iframes = document.querySelectorAll(".gallery-video");
    iframes.forEach((iframe) => {
      if (iframe.dataset.videoid) {
        iframe.src = `https://www.youtube.com/embed/${iframe.dataset.videoid}`;
      }
    });
  });
</script>

<div class="mb-8">
  <p class="mb-8 text-lg whitespace-pre-wrap">
    {#if textItems.link}
      <Link external href={textItems.link}>
        <strong class="text-2xl">{textItems.title}</strong>
      </Link>
    {:else}
      <strong class="text-2xl">{textItems.title}</strong>
    {/if}
    <br /><br />{textItems.text}
  </p>

  {#if certificates}
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-8">Certificates</h3>
      <div class="flex flex-row flex-wrap gap-4">
        {#each certificates as cert}
          <button
            on:click={() => openCertificate(cert)}
            class="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer w-fit"
          >
            <i class="fas fa-certificate mr-2"></i>
            {cert.title}
          </button>
        {/each}
      </div>
    </div>
  {/if}

  <div
    class="horizontal-scroll flex overflow-x-auto snap-x snap-mandatory py-4 px-4"
    role="region"
    aria-label="Image gallery"
  >
    {#each mediaItems as item, index}
      <div
        class="gallery-item flex-none w-[300px] h-[200px] mx-2 first:ml-0 last:mr-0 snap-start"
      >
        {#if item.type === "image"}
          <img
            src={item.src}
            alt={item.alt || `Gallery image ${index + 1}`}
            class="gallery-image w-full h-full object-cover rounded-lg"
          />
        {:else if item.type === "video"}
          <iframe
            class="gallery-video w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .horizontal-scroll {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .horizontal-scroll::-webkit-scrollbar {
    display: none;
  }

  .gallery-item {
    transition: transform 0.3s ease;
  }

  .gallery-item:hover {
    transform: scale(1.05);
  }
</style>
