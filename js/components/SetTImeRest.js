export default function SetTimeRest() {
    let $containerSetUps = document.createElement('div')
    $containerSetUps.classList.add('container-set-ups')
    $containerSetUps.classList.add('set-ups')
    $containerSetUps.innerHTML = `

        <span class="span">REST:</span>
            <input type="number">
        <span class="span">SECONDS</span>   
    `
    document.querySelector('#app').appendChild($containerSetUps)
}