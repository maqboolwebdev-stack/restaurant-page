import margherita from './images/MargheritaPizza.png';
import caesar from './images/CaesarSalad.png';
import grilled from './images/GrilledChicken.png';
import pepperoni from './images/PepperoniPizza.png';
import pasta from './images/PastaCarbonara.png';

const content = document.querySelector('#content');

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
      image: margherita,
    },
    {
      name: 'Caesar Salad',
      price: '$14',
      description: 'Crunch, sauce, heft.',
      image: caesar,
    },
    {
      name: 'Grilled Chicken',
      price: '$16',
      description: 'Crisp outside, soft inside.',
      image: grilled,
    },
    {
      name: 'Pepperoni Pizza',
      price: '$14',
      description: 'Tall, juicy, loaded.',
      image: pepperoni,
    },
    {
      name: 'Pasta Carbonara',
      price: '$13',
      description: 'Simple, stacked, bold.',
      image: pasta,
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
    priceHeading.textContent = `Price: ${item.price}`;

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
