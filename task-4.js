let counterValue = 0;

function decrement() {
    counterValue -= 1;
    count();
}

function increment () {

    counterValue += 1;
    count();
}

function count() {
    currentValue.textContent = counterValue;
}

const buttonDecrement = document.querySelector('.decrement');
const buttonIncrement =document.querySelector('.increment');
const currentValue = document.querySelector('#value');

buttonDecrement.addEventListener('click', decrement)
buttonIncrement.addEventListener('click', increment)

