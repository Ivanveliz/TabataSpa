export default function SetUpsRounds() {
    let $containerSetUps = document.createElement('div')
    $containerSetUps.classList.add('container-set-ups')
    $containerSetUps.classList.add('set-ups')
    
    $containerSetUps.innerHTML = `

    
        <span class="span primero">for</span>
            <input type="number">
        <span class="span segundo">Rounds</span>
    
   
    `
    document.querySelector('#app').appendChild($containerSetUps)
    }
