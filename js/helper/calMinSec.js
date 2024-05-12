export function calcTotalMinSec(seconds) {
    const minutes = Math.floor(seconds / 60)
    const secondsLeft = seconds % 60
    return { minutes, secondsLeft }
  }