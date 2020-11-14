const countCategories = document.querySelector('ul#categories');
console.log(`В списке ${countCategories.children.length} категории`);


const categories = document.querySelectorAll('li.item');
categories.forEach((category) => {

    const title = category.querySelector('h2');
    const count = category.querySelector('ul');
    console.log(`Категория: ${title.textContent}\nКоличество элементов: ${count.children.length}`)
});
