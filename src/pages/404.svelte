<script>
  import { Page, Block } from "framework7-svelte";
</script>

<Page>
  <Block class="my-0">
    <div
      class="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <p
        class="text-[7rem] md:text-[11rem] leading-none tracking-tighter text-zinc-900 dark:text-zinc-100"
      >
        404
      </p>
      <p class="eyebrow mt-4 mb-8">Page not found</p>
      <p class="text-zinc-700 dark:text-zinc-400 max-w-sm mb-10 leading-relaxed">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <a
        href="/"
        class="quiet-link text-sm uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100"
      >
        <i class="fas fa-arrow-left text-xs"></i>
        <span>Back to home</span>
      </a>
    </div>
  </Block>
</Page>
