export default function ButtonReturnInit() {
    
    let $ButtonReturn = document.createElement('button')
    $ButtonReturn.id = 'button-return'
    $ButtonReturn.textContent = 'RETURN'
    $ButtonReturn.classList.add('button-start')

    document.querySelector('#app').appendChild($ButtonReturn)
    $ButtonReturn.addEventListener('click',() =>{
        location.reload()
    })
}