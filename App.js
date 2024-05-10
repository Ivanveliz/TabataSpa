import Title from './js/components/Title.js'
import footer from './js/pages/shared/Footer.js'
import Menu from './js/components/Menu.js'


export function App() {
      
    const $app = document.getElementById('app')
    $app.innerHTML = ""

    $app.appendChild(Title())
    $app.appendChild(Menu())
    $app.append(footer())
    
}

