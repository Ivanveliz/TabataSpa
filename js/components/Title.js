
export default function Title(titleMethod) {
    const $h1 = document.createElement('h1')
    
    $h1.innerHTML = `<h1 class="title">${titleMethod}</h1>`
 
    return $h1

}