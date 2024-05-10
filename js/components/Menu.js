import handleRoute from "../router/router.js"

export default function Menu() {
    const $menu = document.createElement('nav')
   
    $menu.classList.add('menu')
    $menu.innerHTML = `
        
    <a href="/clock" class="link">Clock</a>
    <a href="/fortime" class="link">For Time</a>
    <a href="/amrap" class="link">Amrap</a>
    <a href="/emom" class="link">Emom</a>
    <a href="/tabata" class="link">Tabata</a>
    `
    let links = $menu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const path = link.getAttribute('href');
            handleRoute(path)

        })
    })
    

    return $menu
}
