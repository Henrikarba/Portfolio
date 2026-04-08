<script>
  import { Page, Block, Button, Link } from "framework7-svelte";
  import CustomNavbar from "../assets/navbar.svelte";
</script>

<Page name="contact" class="text-left">
  <!-- Portfolio Intro -->
  <Block class="flex flex-col md:grid md:grid-cols-2 overflow-hidden my-0">
    <!-- Navbar -->
    <CustomNavbar pageName="Contact" />
  </Block>

  <!-- Contact Form -->
  <Block class="grid grid-cols-1 md:grid-cols-2 p-10 md:p-20 my-0 text-lg">
    <div class="md:ml-4">
      <p class="ml-4 md:mr-20">I'd love to hear from you!</p>
      <div class="relative md:mr-20"></div>
    </div>

    <!-- Contact Information -->
    <div class="md:ml-0 ml-4">
      <Link href="mailto:henrikarba@gmail.com" class="no-underline" external>
        <Button fill type="submit" class="bg-zinc-600 text-white"
          >Contact Me</Button
        >
      </Link>
      <p class="mt-10">You can also find me on</p>
      <Link
        class="mt-5"
        external
        href="https://www.linkedin.com/in/henrikarba/"
      >
        <i class="fab fa-lg fa-linkedin content-center w-8"></i>
        <p><strong>LinkedIn</strong></p>
      </Link>
      <br />
      <Link class="mt-3" external href="https://github.com/Henrikarba">
        <i class="fab fa-lg fa-github content-center w-8"></i>
        <p><strong>GitHub</strong></p>
      </Link>
    </div>
  </Block>
</Page>

<style>
  @media (min-width: 768px) {
    :global(.dialog-title) {
      font-size: 2rem; /* Change this to the size you want */
    }
    :global(.dialog-text) {
      font-size: 1.125rem /* 18px */;
      line-height: 1.75rem /* 28px */;
    }
  }
</style>
