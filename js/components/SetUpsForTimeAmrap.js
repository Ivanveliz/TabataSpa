import {calculeTotalSeconds} from '../helper/calculeTotalSeconds.js'

export default function setUpsForTimeAmrap(callback){
    let $containerSetUps = document.createElement('div')
    $containerSetUps.classList.add('container-set-ups')
    $containerSetUps.innerHTML = `
    <span class="span">For</span>
    <input type="number" id="total-minutes">
    <span class="span">minutes</span>
    `
    document.querySelector('#app').appendChild($containerSetUps)
  
  let totalSec
  let minutes = document.querySelector('#total-minutes')
  

  const updateMinutes= () => {
    totalSec = calculeTotalSeconds(minutes.value)
    callback(totalSec)
  }

minutes.addEventListener('input', updateMinutes)
}