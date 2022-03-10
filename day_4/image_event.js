const photo = document.getElementById('photo');
const figure = document.querySelector('figure');

const scaleDown = document.querySelector('button#scale-down');
const scaleUp = document.querySelector('button#scale-up');
const moveRight = document.querySelector('button#move-right');
const none = document.querySelector('button#none');
const block = document.querySelector('button#block');

scaleDown.addEventListener('click', function () {
    photo.style.transform = 'scale(0.8)';
});

scaleUp.addEventListener('click', () => {
    photo.style.transform = 'scale(1.2)';
});

moveRight.addEventListener('click', () => {
   figure.style.transform = "translateX(100px)";
});

none.addEventListener('click', ()=>{
    photo.style.display = 'none';
});

block.addEventListener('click', ()=>{
    photo.style.display = 'block';
});
