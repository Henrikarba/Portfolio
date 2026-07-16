import routes from './routes.js';
import store from './store.js';

export const f7params = {
    name: "Portfolio",
    theme: "auto",
    colors: {
        primary: "#ffffff",
        primaryDark: "#000000",
    },
    darkMode:
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches,
    store: store,
    routes: routes,
    touch: {
        // Disable the Material "touch ripple" effect on tap/click
        touchRipple: false,
    },
    view: {
        loadInitialPage: true,
        browserHistory: true,
        browserHistorySeparator: "",
    },
};