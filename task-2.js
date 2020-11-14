const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ul = document.querySelector('ul');


const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li');

li1.innerText = 'Картошка';
li2.innerText = 'Грибы';
li3.innerText = 'Чеснок';
li4.innerText = 'Помидоры';
li5.innerText = 'Зелень';
li6.innerText = 'Приправы';

ul.append(li1, li2, li3, li4, li5, li6);