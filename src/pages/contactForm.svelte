<script>
  import { Page, Block, Link } from "framework7-svelte";
  import CustomNavbar from "../assets/navbar.svelte";

  const socials = [
    {
      label: "LinkedIn",
      handle: "in/henrikarba",
      href: "https://www.linkedin.com/in/henrikarba/",
      icon: "fab fa-linkedin-in",
    },
    {
      label: "GitHub",
      handle: "@Henrikarba",
      href: "https://github.com/Henrikarba",
      icon: "fab fa-github",
    },
  ];
</script>

<Page name="contact" class="text-left">
  <Block class="flex flex-col md:grid md:grid-cols-2 overflow-hidden my-0">
    <CustomNavbar pageName="Contact" />
  </Block>

  <div class="px-6 md:px-12 lg:px-28 pt-10 md:pt-20 pb-32">
    <p class="eyebrow mb-4">Get in touch</p>
    <h2 class="text-4xl md:text-6xl tracking-tight leading-[1.05] mb-10 max-w-3xl">
      Let's build<br />something together.
    </h2>

    <p class="text-lg text-zinc-700 dark:text-zinc-400 max-w-xl mb-12 leading-relaxed">
      Whether you have a project in mind, a role to fill, or just want to talk
      shop about code and security — my inbox is always open.
    </p>

    <!-- Primary email CTA -->
    <Link
      href="mailto:henrikarba@gmail.com"
      external
      class="group inline-flex items-baseline gap-3 no-underline"
    >
      <span
        class="text-2xl md:text-4xl tracking-tight text-zinc-900 dark:text-zinc-100 email-line"
      >
        henrikarba@gmail.com
      </span>
      <i
        class="fas fa-arrow-right text-base text-zinc-400 email-arrow"
      ></i>
    </Link>

    <!-- Socials -->
    <div class="mt-20 pt-10 border-t border-zinc-200 dark:border-zinc-800">
      <p class="eyebrow mb-6">Elsewhere</p>
      <div class="flex flex-col sm:flex-row gap-8 sm:gap-16">
        {#each socials as social}
          <Link
            external
            href={social.href}
            class="group flex items-center gap-4 no-underline social-item"
          >
            <span
              class="flex items-center justify-center w-11 h-11 rounded-full ring-1 ring-zinc-300 dark:ring-zinc-700 text-zinc-700 dark:text-zinc-300 social-icon"
            >
              <i class={social.icon}></i>
            </span>
            <span class="flex flex-col leading-tight">
              <span class="text-base text-zinc-900 dark:text-zinc-100"
                >{social.label}</span
              >
              <span class="text-sm text-zinc-600 dark:text-zinc-400">{social.handle}</span>
            </span>
          </Link>
        {/each}
      </div>
    </div>
  </div>
</Page>

<style>
  .email-line {
    position: relative;
    background-image: linear-gradient(currentColor, currentColor);
    background-size: 0% 1px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: background-size 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    padding-bottom: 2px;
  }

  :global(.group:hover) .email-line {
    background-size: 100% 1px;
  }

  .email-arrow {
    transition: transform 0.3s ease;
  }

  :global(.group:hover) .email-arrow {
    transform: translateX(4px);
  }

  .social-icon {
    transition:
      transform 0.3s ease,
      border-color 0.3s ease;
  }

  :global(.social-item:hover) .social-icon {
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    .email-line,
    .email-arrow,
    .social-icon {
      transition: none;
    }
  }
</style>
