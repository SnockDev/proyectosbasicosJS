let counter = document.getElementById('counter')
let decrease = document.getElementById('decrease')
let reset = document.getElementById('reset')
let increase = document.getElementById('increase')

let number = parseInt(counter.innerHTML)

decrease.addEventListener('click', disminuir)
reset.addEventListener('click', reiniciar)
increase.addEventListener('click', aumentar)

function disminuir() {
    let number = parseInt(counter.innerText)
    number=number-1
    if (number<0) counter.style.color='crimson'
    if(number==0) counter.style.color='white'
    counter.innerText=number
    console.log(number);
}
function aumentar() {
    let number = parseInt(counter.innerText)
    number+=1
    if(number>0) counter.style.color='limegreen'
    counter.innerText=number
    console.log(number);
}
function reiniciar() {
    let number = parseInt(counter.innerText)
    counter.style.color='white'
    counter.innerText=0
}
