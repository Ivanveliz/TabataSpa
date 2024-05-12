
import { forTime } from "../pages/ForTime.js"
import clock from "../pages/Clock.js"
import amrap from "../pages/Amrap.js"
import { App } from "../../App.js";
import tabata from "../pages/Tabata.js"
import emom from "../pages/Emom.js"

export default function handleRoute(path) {
  const $app = document.querySelector('#app')
  $app.innerHTML = ""

  switch (path) {
    case '/':
        App();
        break;
    case '/clock':
        clock();
        break;
    case '/fortime':
        forTime();
        break;
    case '/amrap':
        amrap();
        break;
    case '/emom':
        emom();
        break;
    case '/tabata':
        tabata();
        break;
    default:
        App();
        break;
}
  
  

}