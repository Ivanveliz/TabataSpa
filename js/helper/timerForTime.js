import DisplayGeneral from "../components/DisplayGeneral.js"
import EndWorkOut from "../components/EndWorkOut.js"

export default function timerForTime(totalSec) {
    let counter = 0
    const timer = setInterval(() => {

        if (counter < totalSec) {
            counter++
            DisplayGeneral(counter)
        } else {
            clearInterval(timer)
            EndWorkOut()
        }
    }, 1000)
}