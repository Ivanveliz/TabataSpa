
export default function TotalMinutes( minutes, secondsLeft ) {
    let $containerTotalMinutes = document.createElement('div')
    $containerTotalMinutes.classList.add('container-set-ups')
    $containerTotalMinutes.classList.add('total-minutes')

    
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    secondsLeft = secondsLeft < 10 ? `0${secondsLeft}` : `${secondsLeft}`

    const totalMinutesContent = ` <p> TOTAL: ${minutes} :${secondsLeft} Minutes </p>`

    if ($containerTotalMinutes.innerHTML) {
        $containerTotalMinutes.innerHTML = totalMinutesContent
    } else {
        $containerTotalMinutes.innerHTML = totalMinutesContent
        document.querySelector('#app').appendChild($containerTotalMinutes)
    }   
  
    }
    
    
   
