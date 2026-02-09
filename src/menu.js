const content = document.querySelector('#content');
import img1 from './images/Margherita Pizza.png';
import img2 from './images/caesar Salad.png';
import img3 from './images/Grilled Chicken.png';
import img4 from './images/Pepperoni Pizza.png';
import img5 from './images/Pasta Carbonara.png';

function loadMenu() {
  content.innerHTML = '';

  const menuHeading = document.createElement('h1');
  menuHeading.className = 'menu-heading';
  menuHeading.textContent = 'Menu';
  content.appendChild(menuHeading);

  const menuItems = [
    {
      name: 'Margherita Pizza',
      price: '$12',
      description: 'Simple, stacked, bold.',
      image: img1,
    },
    {
      name: 'caesar Salad',
      price: '$14',
      description: 'Crunch, sauce, heft.',
      image: img2,
    },
    {
      name: 'Grilled Chicken',
      price: '$16',
      description: 'Crisp outside, soft inside.',
      image: img3,
    },
    {
      name: 'Pepperoni Pizza',
      price: '$14',
      description: 'Tall, juicy, loaded.',
      image: img4,
    },
    {
      name: 'Pasta Carbonara',
      price: '$13',
      description: 'Simple, stacked, bold.',
      image: img5,
    },
  ];

  menuItems.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';

    const menuInfo = document.createElement('div');
    menuInfo.className = 'menu-info';

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = item.name;

    const priceHeading = document.createElement('h3');
    priceHeading.textContent = `price: '${item.price}`;

    const description = document.createElement('p');
    description.textContent = item.description;

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;

    menuInfo.appendChild(nameHeading);
    menuInfo.appendChild(priceHeading);
    menuInfo.appendChild(description);

    menuItem.appendChild(menuInfo);
    menuItem.appendChild(img);

    content.appendChild(menuItem);
  });
}

export default loadMenu;
