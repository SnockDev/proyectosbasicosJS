let fondo = document.getElementById('container')
let span = document.getElementsByClassName('color')[0]
let boton = document.getElementById('button')

boton.addEventListener('click', color)

const colores = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

function color() {
    let colors = []
    for (let i = 0; i < 6; i++) {
        let coloRandom = Math.floor(Math.random() * colores.length)
        colors.push(colores[coloRandom])
    }
    fondo.style.backgroundColor = '#' + colors.join('')
    span.style.color = '#' + colors.join('')
    console.log(colors);
}