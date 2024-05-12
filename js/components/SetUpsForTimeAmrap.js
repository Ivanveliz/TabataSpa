import {calculeTotalSeconds} from '../helper/calculeTotalSeconds.js'

export default function setUpsForTimeAmrap(callback){
    let $containerSetUps = document.createElement('div')
    $containerSetUps.classList.add('container-set-ups')
    $containerSetUps.innerHTML = `
    <span class="span">For</span>
    <input type="number" id="number">
    <span class="span">minutes</span>
    `
    document.querySelector('#app').appendChild($containerSetUps)
    let totalSec
    let number = document.querySelector('#number')
    number.addEventListener('input', function () {
      totalSec = calculeTotalSeconds(number.value)
      callback(totalSec)
    })
  
  
}