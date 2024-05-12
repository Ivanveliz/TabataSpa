import { App } from './App.js'
import handleRoute from './js/router/router.js';


document.addEventListener('DOMContentLoaded', App)

window.addEventListener('popstate', () => {
    const path = window.location.pathname;
    handleRoute(path);
});