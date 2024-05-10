import {App} from "../../App.js"
export default function ButtonReturn() {
    let $ButtonReturn = document.createElement('div')
    $ButtonReturn.classList.add('container-button')
    $ButtonReturn.innerHTML = `
        
            <button class="button-return">
                <img src='../../public/arrow.svg' alt="volver">
            </button>
        
        `    
      
    document.getElementById('app').appendChild($ButtonReturn)
    $ButtonReturn.addEventListener('click', e => {
        const $app = document.querySelector('#app')
        $app.innerHTML = ""
        App()
    })
    
}