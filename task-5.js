const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('keydown', e => {
    span.textContent = e.target.value;

    if(e.target.value === '') {
        span.textContent = 'незнакомец';
    }
});