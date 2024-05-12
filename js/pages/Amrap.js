import ButtonReturn from "../components/ButtonReturn.js"
import setUpsForTimeAmrap from "../components/SetUpsForTimeAmrap.js"
import ButtonStart from "../components/buttonStart.js"


export default function amrap() {
    document.getElementById('app').innerHTML = ""
    const $titleAmrap = document.createElement('h2')
    $titleAmrap.innerText = 'Amrap'
    $titleAmrap.classList.add('title')
    document.querySelector('#app').appendChild($titleAmrap)
    ButtonReturn()
    setUpsForTimeAmrap()
    ButtonStart()
   
}