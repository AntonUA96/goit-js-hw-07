const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const ul = document.querySelector('ul#gallery');

  images.map(e => {

  const li = document.createElement('li');
  const img = document.createElement('img');
  li.appendChild(img);

  img.src = e.url;
  img.alt = e.alt;

  ul.prepend(li);

  img.width = 300;

  ul.style.display = 'flex';
  ul.style.alignItems = 'center';
  ul.style.justifyContent = 'center';
  });




  // const li1 = document.createElement('li');
  // const li2 = document.createElement('li');
  // const li3 = document.createElement('li');

  // const img1 = document.createElement('img');
  // const img2 = document.createElement('img');
  // const img3 = document.createElement('img');

  // li1.appendChild(img1);
  // li2.appendChild(img2);
  // li3.appendChild(img3);

  // img1.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
  // img2.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
  // img3.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

  // img1.alt = 'White and Black Long Fur Cat';
  // img1.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
  // img1.alt = 'Group of Horses Running';

  // img1.width = 300;
  // img2.width = 300;
  // img3.width = 300;

  // ul.style.display = 'flex';
  // ul.style.alignItems = 'center';
  // ul.style.justifyContent = 'center';
  
  // ul.append(li1, li2, li3);