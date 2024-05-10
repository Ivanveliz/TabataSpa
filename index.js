import {App} from './App.js'

document.addEventListener('DOMContentLoaded', App)

window.addEventListener('popstate', () => {
    const path = window.location.pathname;
    handleRoute(path);
});