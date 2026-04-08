<!-- GalleryElement.svelte -->
<script>
  import { onMount } from "svelte";
  import { Link } from "framework7-svelte";
  import { createEventDispatcher } from "svelte";

  export let mediaItems = [];
  export let textItems = {};
  export let certificates = undefined;

  const dispatch = createEventDispatcher();
  let enlargedImage = null;

  function openCertificate(cert) {
    dispatch("openCertificate", cert);
  }

  function openImage(item, index) {
    enlargedImage = {
      src: item.src,
      alt: item.alt || `Gallery image ${index + 1}`,
    };
    document.body.style.overflow = "hidden";
  }

  function closeImage() {
    enlargedImage = null;
    document.body.style.overflow = "";
  }

  function handleKeydown(event) {
    if (event.key === "Escape" && enlargedImage) {
      closeImage();
    }
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

    return () => {
      document.body.style.overflow = "";
    };
  });
</script>

<svelte:window on:keydown={handleKeydown} />

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
          <button
            class="gallery-image-button w-full h-full"
            on:click={() => openImage(item, index)}
            aria-label={`Open image ${index + 1} in popup`}
            type="button"
          >
            <img
              src={item.src}
              alt={item.alt || `Gallery image ${index + 1}`}
              class="gallery-image w-full h-full object-cover rounded-lg"
            />
          </button>
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

{#if enlargedImage}
  <div
    class="image-lightbox"
    role="dialog"
    aria-modal="true"
    aria-label="Enlarged gallery image"
    tabindex="-1"
  >
    <button
      type="button"
      class="lightbox-backdrop"
      aria-label="Close image popup"
      on:click={closeImage}
    ></button>
    <div class="lightbox-content">
    <img
      src={enlargedImage.src}
      alt={enlargedImage.alt}
      class="lightbox-image"
    />
    </div>
  </div>
{/if}

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

  .gallery-image-button {
    background: transparent;
    border: 0;
    padding: 0;
    cursor: zoom-in;
  }

  .image-lightbox {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .lightbox-backdrop {
    position: absolute;
    inset: 0;
    border: 0;
    background: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }

  .lightbox-content {
    position: relative;
    z-index: 1;
  }

  .lightbox-image {
    max-width: min(1200px, 95vw);
    max-height: 90vh;
    width: auto;
    height: auto;
    border-radius: 0.75rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
  }
</style>
