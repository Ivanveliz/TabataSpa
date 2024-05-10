export default function footer() {
    let $footer = document.createElement('footer')
    $footer.innerHTML = `<p>App creada por IvánVeliz</p>`
    $footer.classList.add('footer')
    return $footer
}