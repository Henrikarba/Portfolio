<script>
  import { onMount } from "svelte";
  import { f7ready, App, Panel, View, Link } from "framework7-svelte";
  import { f7params } from "../js/f7params";

  const navLinks = [
    { name: "Portfolio", href: "/" },
    { name: "Activity", href: "/activity/" },
    { name: "Projects", href: "/projects/" },
    { name: "Contact", href: "/contact/" },
  ];

  onMount(() => {
    f7ready((f7Instance) => {
      // Handle 404 redirect trick for GitHub Pages
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get('redirect');
      if (redirect) {
        // Remove the redirect param and navigate to the actual route
        window.history.replaceState(null, null, redirect);
        f7Instance.views.main.router.navigate(redirect);
      }
    });
  });
</script>

<App {...f7params}>
  <Panel left cover backdrop class="theme-panel">
    <div class="panel-inner">
      <div class="panel-head">
        <span class="panel-brand">Henri Karba</span>
        <Link
          panelClose
          class="panel-close-btn"
          iconIos="f7:xmark"
          iconMd="material:close"
          aria-label="Close menu"
        />
      </div>
      <nav class="panel-nav" aria-label="Main">
        {#each navLinks as link}
          <Link href={link.href} panelClose class="panel-link">
            {link.name}
          </Link>
        {/each}
      </nav>
    </div>
  </Panel>
  <!-- Main View -->
  <View main class="safe-areas" />
</App>
