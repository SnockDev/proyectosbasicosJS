let index = 1

let arrpost = [
    {
        id: 0,
        nombre: 'Pedro Pascal',
        profesion: 'UI/UX Designer',
        fotoPerfil: '/img/perfil.png'
    },
    {
        id: 1,
        nombre: 'Juan perez',
        profesion: 'Backend engineer',
        fotoPerfil: '/img/HombreLateral.jpg'
    },
    {
        id: 2,
        nombre: 'Sasha Baez',
        profesion: 'Frontend engineer',
        fotoPerfil: '/img/perfil(1).png'
    },
]
let names = document.getElementById('name')
let profession = document.getElementById('profession')
let img = document.getElementById('img')

let btnleft = document.getElementById('btnleft')
let btnright = document.getElementById('btnright')


btnleft.addEventListener('click', () => {
    if (index > 0) {
        index-=1
    }
    names.innerHTML = arrpost[index].nombre
    profession.innerHTML = arrpost[index].profesion
    img.src = arrpost[index].fotoPerfil
    console.log('done');
    console.log(index);

    console.log(names);
    console.log(profession);
    console.log(img.src);
})
btnright.addEventListener('click', () => {
    if (index < arrpost.length - 1) {
        index += 1;
    }
    names.innerHTML = arrpost[index].nombre
    profession.innerHTML = arrpost[index].profesion
    img.src = arrpost[index].fotoPerfil
    console.log('done');
    console.log(index);

    console.log(names);
    console.log(profession);
    console.log(img.src);
})