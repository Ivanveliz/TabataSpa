export default function SetTimeWork() {
    let $containerSetUps = document.createElement('div')
    $containerSetUps.classList.add('container-set-ups')
    $containerSetUps.classList.add('set-ups')
    $containerSetUps.innerHTML = `

        <span class="span">WORK:</span>
            <input type="number">
        <span class="span">SECONDS</span>   
    `
    document.querySelector('#app').appendChild($containerSetUps)
}