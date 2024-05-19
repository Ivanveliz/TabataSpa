import DisplayGeneral from "../components/DisplayGeneral.js"
import EndWorkOut from "../components/EndWorkOut.js"

export default function timerForAmrap(totalSec) {
    
    const timer = setInterval(() => {
        if ( totalSec > 0 ) {
            totalSec--
            DisplayGeneral(totalSec)
          
        } else {
            clearInterval(timer)
            EndWorkOut()
        }
    },1000)
    
}