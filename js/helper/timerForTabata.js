import DisplayTabataWork from "../components/DisplayTabataWork.js"
import EndWorkOut from "../components/EndWorkOut.js"
import playSound from "./playSound.js";

export default function timerForTabata(rounds, work, rest, totalSec) {
    const sound = playSound();
    function startRounds(rounds, work, rest) {
        return new Promise((resolve) => {
            let currentRound = 1  
            let counterGral = totalSec 
            function startNextRounds() {
                  
                if (currentRound <= rounds) {
                    let counterWork = work + 1
                                  

                    let timerWork = setInterval(() => {
                        counterWork--
                        counterGral--
                        DisplayTabataWork(currentRound, counterWork, rest, counterGral)
                        if (counterWork === 3) {
                            sound.play()
                        }
                        if (counterWork === 0) {
                            clearInterval(timerWork)
                            let counterRest = rest
                            let timerRest = setInterval(() => {
                                counterRest--
                                counterGral--
                                DisplayTabataWork(currentRound, 0 , counterRest, counterGral)
                                if (counterRest === 3) {
                                    sound.play()
                                }
                                if (counterRest === 0) {
                                    clearInterval(timerRest)
                                    currentRound++
                                    startNextRounds()
                                }
                            },1000)                     
                    }
                    }, 1000)                     
                } else {
                    resolve() //Resuelve la promesa cuando todas las rondas han terminado
                }
            }
            startNextRounds() // Inicia la primera ronda
        })
    }
    startRounds(rounds, work, rest).then(() => {
        EndWorkOut()
      })
}