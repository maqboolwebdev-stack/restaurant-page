import hero from './images/homePizza.jpg';

const content = document.querySelector('#content');

function loadHome() {
  //   main div
  const heroDiv = document.createElement('div');
  heroDiv.className = 'hero';

  // text div
  const text = document.createElement('div');
  text.className = 'hero-text';
  const heading = document.createElement('h1');
  heading.className = 'h1';
  heading.textContent = 'Welcome to Our Restaurant';
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Enjoy our delicious food and great atmosphere!';
  // image div
  const imgDiv = document.createElement('div');
  imgDiv.className = 'hero-img';
  const img = document.createElement('img');
  img.className = 'img-style';
  img.src = hero;

  //appending
  text.appendChild(heading);
  text.appendChild(paragraph);
  heroDiv.appendChild(text);
  imgDiv.appendChild(img);
  heroDiv.appendChild(imgDiv);
  content.appendChild(heroDiv);

  // hours section
  const hoursSection = document.createElement('div');
  hoursSection.className = 'hours-section';
  const hoursHeading = document.createElement('h2');
  hoursHeading.textContent = 'Hours of Operation';

  hoursSection.appendChild(hoursHeading);

  const hours = [
    'Sunday: 8am - 8pm',
    'Monday: 6am - 6pm',
    'Tuesday: 6am - 6pm',
    'Wednesday: 6am - 6pm',
    'Thursday: 6am - 10pm',
    'Friday: 6am - 10pm',
    'Saturday: 8am - 10pm',
  ];

  hours.forEach((line) => {
    const hourPara = document.createElement('p');
    hourPara.textContent = line;
    hoursSection.appendChild(hourPara);
  });

  content.appendChild(hoursSection);
}

export default loadHome;
