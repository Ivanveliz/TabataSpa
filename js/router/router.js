import { forTime } from "../pages/ForTime.js"
import clock from "../pages/Clock.js"
import amrap from "../pages/Amrap.js"
import { App } from "../../App.js";
import tabata from "../pages/Tabata.js"
import Emom from "../pages/Emom.js";

export default function handleRoute(path) {
    const $app = document.querySelector('#app')
    
    $app.innerHTML = ""

  switch (path) {
      case '/':
        location.hash = "/"
        App();
        break;
      case '/clock':
        location.hash = "/clock"
        clock();
        break;
      case '/fortime':
          location.hash = "/fortime"
          forTime();
         
          
        break;
      case '/amrap':
        location.hash = '/amrap'
        amrap();
        break;
      case '/emom':
        location.hash = '/emom'
        Emom();
        break;
      case '/tabata':
        location.hash = '/tabata'
        tabata();
        break;
            
    default:
        App();
        break;
}
  
}