<script>
  import { onMount } from "svelte";
  import { Page, Block, Link } from "framework7-svelte";
  import CustomNavbar from "../assets/navbar.svelte";

  import store from "../js/store";
  const isIOS = store.getters.isIOS.value;

  import imageMeSrc from "../../static/Portfolio/ImageMe.webp";
  import bgImageSrc from "../../static/Portfolio/winter.webp";

  let bgVideoSrc = "";
  let fallbackLevel = 0;

  let bgVideoModule;

  let showShort = false;

  onMount(async () => {
    if (isIOS) {
      bgVideoModule = await import("../../static/Portfolio/winter.mp4");
    } else {
      bgVideoModule = await import("../../static/Portfolio/winter.webm");
    }
    bgVideoSrc = bgVideoModule.default;

    const video = document.createElement("video");
    video.src = bgVideoModule.default;
    video.onerror = async () => {
      fallbackLevel++;
    };
    video.oncanplay = () => {
      fallbackLevel = 0;
    };
    const image = new Image();
    image.src = bgImageSrc;
    image.onerror = () => {
      fallbackLevel++;
    };
  });
</script>

<Page name="portfolio" class="text-left">
  <!-- Portfolio Intro -->
  <Block class="flex flex-col md:grid md:grid-cols-2 overflow-hidden my-0">
    <CustomNavbar pageName="Portfolio" {fallbackLevel} />
    {#if fallbackLevel === 0}
      <video
        src={bgVideoSrc}
        autoplay
        muted
        loop
        playsinline
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
      ></video>
    {:else if fallbackLevel === 1}
      <img
        src={bgImageSrc}
        alt="Could not load image"
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      />
    {/if}

    <div class="absolute top-0 left-0 w-full h-full z-10 overlay"></div>

    <div class="z-20 flex justify-center items-center p-10 mb-10 col-start-1">
      <img
        src={imageMeSrc}
        alt="Could not load image"
        class="rounded-full border-4 border-white w-40 md:w-1/2 object-cover"
        aria-hidden="true"
      />
    </div>

    <div class="z-20 flex flex-col justify-end mb-20">
      <div class={fallbackLevel >= 2 ? "" : "text-white"}>
        <h2 class="text-4xl md:text-7xl tracking-tight">
          Henri<br />Karba
        </h2>
        <p
          class="mt-4 text-sm md:text-base uppercase tracking-[0.25em] opacity-80"
        >
          Full-Stack Developer · Cybersecurity
        </p>
      </div>
    </div>
  </Block>

  <!-- Portfolio About Me -->
  <Block class="grid grid-cols-1 md:grid-cols-2 p-4 md:p-20 my-0">
    <div class="md:ml-10 mb-5 md:mb-0">
      <p class="eyebrow mb-3">About</p>
      <h3 class="text-2xl md:text-3xl tracking-tight">About Me</h3>
    </div>
    <div class="text-lg">
      <button
        type="button"
        on:click={() => (showShort = !showShort)}
        aria-expanded={showShort}
        class="group mb-8 inline-flex items-center gap-2 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
      >
        <i
          class="fas {showShort
            ? 'fa-book-open'
            : 'fa-bolt'} text-xs opacity-70"
        ></i>
        {showShort
          ? "On second thought, give me the full story"
          : "Don't like reading much? Click for the short version"}
      </button>

      {#if showShort}
        <p class="mb-5">
          I'm Henri, a
          <strong>full-stack developer</strong> and
          <strong>cybersecurity</strong> nerd from Estonia. I trained at
          <strong
            ><Link external href="https://kood.tech/et/">Kood/Jõhvi</Link
            ></strong
          >, took <strong>2nd</strong> at
          <strong
            ><Link external href="https://hackzurich.com/">HackZurich</Link
            ></strong
          >, won my challenge at
          <strong
            ><Link external href="https://www.hackcodex.eu/">HackCodeX</Link
            ></strong
          >, reached the
          <strong
            ><Link external href="https://ctftech.com/"
              >Cyber Battle of Estonia</Link
            ></strong
          >
          finals, and grabbed <strong>first place</strong> at Estonia's
          first-ever quantum hackathon
          <strong
            ><Link external href="https://kvant.ee/qest-hack-2025/"
              >QEst Hack</Link
            ></strong
          >. I also served <strong>11 months</strong> in the
          <strong
            ><Link external href="https://mil.ee/">Estonian Defence Forces</Link
            ></strong
          >, dealing with communication systems. Today I'm part of
          <strong
            ><Link external href="https://www.lapikud.ee/">Lapikud</Link
            ></strong
          >, a well-known IT community in Estonia. And endlessly curious about
          how everything works, I'm usually either chasing down the logic behind
          some problem or carving down a ski slope.
        </p>
      {:else}
        <p class="mb-5">
          I'm Henri, a passionate <strong>Full-Stack Developer</strong>
          with a love for problem-solving and a growing expertise in
          <strong>cybersecurity</strong>. I began my formal journey at
          <strong
            ><Link external href="https://kood.tech/et/">Kood/Jõhvi,</Link
            ></strong
          >
          where I learned
          <strong><Link external href="https://go.dev/">Golang</Link></strong>
          and
          <strong
            ><Link external href="https://www.javascript.com/">JavaScript</Link
            ></strong
          >
          (and worked extensively with
          <strong
            ><Link external href="https://svelte.dev/">Svelte</Link></strong
          >). Afterward, I dove into
          <strong><Link external href="https://nestjs.com">NestJS</Link></strong
          >
          and
          <strong
            ><Link external href="https://framework7.io/svelte/"
              >Framework7-Svelte,</Link
            ></strong
          >
          applying these technologies to real-world projects, including building
          a website alongside a friend. Today I'm also part of
          <strong
            ><Link external href="https://www.lapikud.ee/">Lapikud</Link
            ></strong
          >, a well-known IT community in Estonia.
        </p>
        <p class="mb-5">
          In addition to full-stack development, I've taught myself <strong
            ><Link external href="https://www.python.org/">Python</Link></strong
          >
          as part of my cybersecurity studies. I even had the opportunity to participate
          in high-profile competitions like the
          <strong
            ><Link external href="https://ctftech.com/"
              >Cyber Battle of Estonia,</Link
            ></strong
          > where I made it to the finals. Cybersecurity fascinates me, and I'm always
          exploring new ways to bridge coding with security practices.
        </p>
        <p class="mb-5">
          Outside of coding, I'm an avid problem-solver, constantly seeking new
          challenges. Hackathons have been a significant part of my journey. My
          team and I took <strong
            >second place at <Link external href="https://hackzurich.com/"
              >HackZurich,</Link
            ></strong
          >
          one of the largest hackathons in Europe, and we
          <strong
            >won the Emergn company challenge at <Link
              external
              href="https://www.hackcodex.eu/">HackCodeX.</Link
            ></strong
          > These events have shaped my ability to work under pressure, collaborate
          with talented peers, and find innovative solutions to difficult problems.
        </p>
        <p class="mb-5">
          Lately, I've been drawn into <strong>quantum computing</strong>. It's
          a field I'm convinced will reshape what's possible in tech. I put that
          curiosity to the test at
          <strong
            ><Link external href="https://kvant.ee/qest-hack-2025/"
              >QEst Hack,</Link
            ></strong
          >
          Estonia's first hackathon dedicated to quantum computing, where my team
          took
          <strong>first place</strong>. It's a space I'm excited to keep growing
          into as the technology matures.
        </p>
        <p class="mb-5">
          When I'm not coding or sharpening my cybersecurity skills, I enjoy
          playing video games or hitting the slopes for some mountain skiing.
          More than any hobby, though, I'm fascinated by how the world works,
          and I carry that curiosity everywhere I go. I want to understand the
          logic behind everything. I'll turn a problem over in my head and
          reason through possible solutions, even ones that turn out completely
          wrong, because that's how I learn: I spot the pattern that doesn't
          hold, adjust, and try again. It's exactly how quantum computing
          finally clicked for me. At first it broke my brain, how can something
          be both 0 and 1, then “collapse” to a specific value the moment you
          measure it, and what does measuring even mean? Instead of just asking
          questions, I started picturing concrete scenarios and asking whether
          they would actually work. Reasoning through those cases is what made
          it make sense and cemented the understanding. That same drive is what
          pushes me to keep improving and become the best developer I can be.
        </p>
        <p>
          And to all the military fans like me: I also completed my <strong
            >11-month military service</strong
          >
          in the
          <strong
            ><Link external href="https://mil.ee/">Estonian Defence Forces</Link
            ></strong
          >, where I specialized as
          <strong>IT support</strong> for the
          <strong>Artillery Company</strong>. There, I learned how to set up and
          manage the company's communication and networking systems,
          specifically focusing on wartime communication. It was a unique
          challenge that further fueled my interest in combining technology with
          real-world problem-solving.
        </p>
      {/if}
    </div>
  </Block>
</Page>

<style>
  @media (prefers-color-scheme: dark) {
    .overlay {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
</style>
