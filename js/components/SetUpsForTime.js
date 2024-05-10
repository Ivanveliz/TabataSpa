export default function setUpsForTime(){
    let $containerSetUps = document.createElement('div')
    $containerSetUps.classList.add('container-set-ups')
    $containerSetUps.innerHTML = `
    <span class="span">For</span>
    <input type="number">
    <span class="span">minutes</span>
    `
    document.querySelector('#app').appendChild($containerSetUps)
}