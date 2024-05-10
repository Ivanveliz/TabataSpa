import {App} from "../../App.js"
export default function ButtonReturn() {
    let $ButtonReturn = document.createElement('div')
    $ButtonReturn.classList.add('container-button')
    $ButtonReturn.innerHTML = `
                    <button class="button-return">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFAFA"><path d="m1.58 13.42 8 8a2 2 0 0 0 2.83-2.83L7.82 14h13.17c1.1 0 2-.9 2-2s-.9-2-2-2H7.83l4.59-4.59a2 2 0 0 0-1.41-3.42 2 2 0 0 0-1.41.59l-8.02 8a2.01 2.01 0 0 0 0 2.83Z"></path></svg>
            </button>
        
        `    
      
    document.getElementById('app').appendChild($ButtonReturn)
    $ButtonReturn.addEventListener('click', e => {
        const $app = document.querySelector('#app')
        $app.innerHTML = ""
        App()
    })
    
}