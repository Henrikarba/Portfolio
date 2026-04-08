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

    <div class="z-20 flex flex-col justify-end mb-20 ml-5 md:ml-0 md:pb-0">
      <div class={fallbackLevel >= 2 ? "" : "text-white"}>
        <h2 class="text-4xl md:text-7xl">
          Henri <br /> Karba
        </h2>
      </div>
    </div>
  </Block>

  <!-- Portfolio About Me -->
  <Block class="grid grid-cols-1 md:grid-cols-2 p-10 md:p-20 my-0">
    <h3 class="text-2xl md:text-3xl md:ml-10 mb-5 md:mb-0">About Me</h3>
    <div class="text-lg">
      <p class="mb-5">
        Hi, I'm Henri, a passionate <strong>Full-Stack Developer</strong>
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
        <strong><Link external href="https://svelte.dev/">Svelte</Link></strong
        >). Afterward, I dove into
        <strong><Link external href="https://nestjs.com">NestJS</Link></strong>
        and
        <strong
          ><Link external href="https://framework7.io/svelte/"
            >Framework7-Svelte,</Link
          ></strong
        > applying these technologies to real-world projects, including building
        a website alongside a friend.
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
        When I’m not coding or sharpening my cybersecurity skills, I enjoy
        playing video games, riding my bike, or hitting the slopes for some
        mountain skiing. I’ve been coding since I was young, and while I can’t
        pinpoint exactly what drew me in, I’ve been hooked ever since. My goal
        is to keep improving and become the best developer I can be.
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
        manage the company's communication and networking systems, specifically
        focusing on wartime communication. It was a unique challenge that
        further fueled my interest in combining technology with real-world
        problem-solving.
      </p>
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
