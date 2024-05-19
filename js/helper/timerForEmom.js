import { DisplayEmom } from "../components/DisplayEmom.js"
import EndWorkOut from "../components/EndWorkOut.js"
import playSound from "./playSound.js"


export default function timerForEmom(totalSec, totalRounds) {
    const sound = playSound();
    function startRounds(totalRounds) {
        return new Promise((resolve) => {
            let currentRound = 1 
            
            function startNextRounds() {
                if (currentRound <= totalRounds) {
                    let currentCounter = 60
                    let timer = setInterval(() => {
                        currentCounter--
                        
                        DisplayEmom(currentCounter, currentRound, totalRounds)
                        if (currentCounter === 3) {
                            sound.play()
                        }
                        if (currentCounter === 0) {
                            clearInterval(timer)
                            currentRound++
                            startNextRounds()
                    }
                    }, 1000)                     
                } else {
                    resolve() //Resuelve la promesa cuando todas las rondas han terminado
                }
            }
            startNextRounds() // Inicia la primera ronda
        })
    }
    startRounds(totalRounds).then(() => {
        EndWorkOut()
      })
}
