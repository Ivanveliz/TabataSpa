import { App } from './App.js'
import requestWakeLock from './js/helper/requestWareLock.js';
import handleRoute from './js/router/router.js';



document.addEventListener('DOMContentLoaded', () => {
    App();
    requestWakeLock();
  });
  

window.addEventListener('popstate', () => {
    const path = window.location.pathname;
    handleRoute(path);
});