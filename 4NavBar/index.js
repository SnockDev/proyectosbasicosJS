const button = document.getElementById('myButton');
const ul=document.getElementById('options')

button.addEventListener('click', function() {
  button.classList.toggle('button-active');
  if(button.classList=='button-active'){
    ul.style.display='block';
    ul.style.position=''
  }
  else{
    ul.style.display='none';
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 700) {
    ul.style.display = 'flex';
    button.classList.remove('button-active')
  } else {
    ul.style.display = 'none';
  }
});

window.addEventListener('load', function() {
  if (window.innerWidth > 700) {
    ul.style.display = 'flex';
    button.classList.remove('button-active')
  } else {
    ul.style.display = 'none';
  }
});