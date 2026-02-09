const content = document.querySelector('#content');

function loadAbout() {
  const aboutContainer = document.createElement('div');
  aboutContainer.className = 'about-container';

  const aboutUs = document.createElement('div');
  aboutUs.className = 'about-us';

  const h2 = document.createElement('h2');
  h2.className = 'about-heading';
  h2.textContent = 'About Us';

  const p = document.createElement('p');
  p.className = 'about-text';
  p.textContent = `Welcome to our pizza restaurant — where taste and quality meet in the perfect blend. We use fresh ingredients, hand-tossed dough, and prepare each pizza with passion. Whether it's a classic Margherita or a spicy special, we aim to make every bite memorable. Our commitment to excellence extends beyond our food; we strive to create a warm and inviting atmosphere for our customers. Join us for a delicious meal and experience the true essence of pizza!`;

  aboutUs.appendChild(h2);
  aboutUs.appendChild(p);
  aboutContainer.appendChild(aboutUs);

  const team = document.createElement('div');
  team.className = 'team';

  const h2T = document.createElement('h2');
  h2T.className = 'team-heading';
  h2T.textContent = 'Our Team';

  const pT = document.createElement('p');
  pT.className = 'team-text';
  pT.textContent = `Our team consists of experienced chefs and friendly staff who treat food not just as a job, but as an art. From the kitchen to serving, everyone is focused on quality, hygiene, and customer satisfaction. We believe in creating a welcoming atmosphere where you can enjoy great food and make lasting memories. Our chefs are passionate about crafting delicious pizzas. They use traditional recipes and innovative techniques to ensure every pizza is a masterpiece. `;

  team.appendChild(h2T);
  team.appendChild(pT);
  aboutContainer.appendChild(team);

  content.appendChild(aboutContainer);
}

export default loadAbout;
