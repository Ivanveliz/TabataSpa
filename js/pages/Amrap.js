import ButtonReturn from "../components/ButtonReturn.js"
import ButtonStart from "../components/ButtonStart.js"
import setUpsForTimeAmrap from "../components/SetUpsForTimeAmrap.js"



export default function amrap() {
    ButtonReturn()
    document.getElementById('app').innerHTML = ""
    const $titleAmrap = document.createElement('h2')
    $titleAmrap.innerText = 'Amrap'
    $titleAmrap.classList.add('title')
    document.querySelector('#app').appendChild($titleAmrap)
    ButtonReturn()
    setUpsForTimeAmrap(function (totalSec) {
        const existingButtonStart = document.querySelector('.button-start');
        if (existingButtonStart) {
            existingButtonStart.remove();
        }
        ButtonStart({totalSec});
    });
    }
   
