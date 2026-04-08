<script>
  import { onMount } from "svelte";
  import {
    f7ready,
    App,
    Panel,
    View,
    Page,
    List,
    Link,
    Navbar,
    ListItem,
  } from "framework7-svelte";
  import pageName from "../assets/navbar.svelte";
  import { f7params } from "../js/f7params";

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
  <Panel cover backdrop class="sidePanel">
    <Navbar>
      <Link
        class="ml-4 sideButton {window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'color-black'
          : ''}"
        iconIos="f7:menu"
        iconMd="material:menu"
        panelClose
      />
    </Navbar>
    <List strong inset dividersIos>
      {#if pageName !== "Activity"}
        <ListItem href="/activity" panelClose>Activity</ListItem>
      {/if}
      {#if pageName !== "Projects"}
        <ListItem href="/projects" panelClose>Projects</ListItem>
      {/if}
      {#if pageName !== "Contact"}
        <ListItem href="/contact" panelClose>Contact</ListItem>
      {/if}
      {#if pageName !== "Portfolio"}
        <ListItem href="/" panelClose>Portfolio</ListItem>
      {/if}
    </List>
  </Panel>
  <!-- Main View -->
  <View main class="safe-areas" />
</App>
