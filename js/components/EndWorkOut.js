import ButtonReturnInit from "./ButtonReturnInit.js"

export default function EndWorkOut() {
    let $app = document.querySelector('#app')
    let $text = document.createElement('p')
    $text.classList.add('work-out-end')
    $text.innerHTML = 'Congratulations! <br>  Work out finished 🚀!'
    $app.innerHTML = ""

    $app.appendChild($text)
    ButtonReturnInit()
}