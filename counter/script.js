const mainTitle = document.querySelector('#title');

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');
let counter = 0;

btnDecrement.addEventListener('click', ()=>{
    counter--;
    mainTitle.textContent = counter;
});

btnIncrement.addEventListener('click', ()=>{
    counter++;
    mainTitle.textContent = counter;
});

btnReset.addEventListener('click', ()=>{
    counter = 0;
    mainTitle.textContent = counter;
});