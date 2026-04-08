// Import Framework7
import Framework7 from './framework7-custom.js';

// Import Framework7-Svelte Plugin
import Framework7Svelte, { f7 } from 'framework7-svelte';

// Import Framework7 Styles
import '../css/framework7-custom.less';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';

// Import App Component
import App from '../components/app.svelte';

// Make f7 instance globally available
window.f7 = f7;

// Init F7 Svelte Plugin
Framework7.use(Framework7Svelte)

// Mount Svelte App
import { mount } from 'svelte';
const app = mount(App, { target: document.getElementById("app") });