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
    view: {
        loadInitialPage: true,
        browserHistory: true,
        browserHistorySeparator: "",
    },
};