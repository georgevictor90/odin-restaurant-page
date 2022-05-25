import './home.css';

export default function showHomepage() {

//Create main html
const footer = document.querySelector('.footer');
const content = document.querySelector('.content');
const main = document.createElement('main');
main.className = 'main-home';
// content.appendChild(main);
content.insertBefore(main, footer);

const hero = document.createElement('div');
hero.className = 'hero';
const heroTitle = document.createElement('h2');
heroTitle.textContent = 'MEDITERRANEAN DELIGHTS AND GOURMET BURGERS';

const springMenuButton = document.createElement('button');
springMenuButton.type = 'button'
const springMenuLink = document.createElement('a');
springMenuLink.textContent = 'Spring-Summer Menu';
springMenuLink.href = '#';

hero.appendChild(heroTitle);
springMenuButton.appendChild(springMenuLink);
hero.appendChild(springMenuButton);

main.appendChild(hero);

const info = document.createElement('div');
info.className = 'info';
const infoArray = ['Riviera Dionisio Il Grande, 194, 96100 Siracusa SR, Italia','+39 06 173 14002', 'Mon-Fri 12:30-22:45', 'Ristorante Aurora Copyright 2022'];

for (let i = 0; i <= infoArray.length - 1; i++) {
  const infoDiv = document.createElement('div');
  infoDiv.className = infoArray[i];
  infoDiv.textContent = infoArray[i].charAt(0).toUpperCase() + infoArray[i].slice(1);
  info.appendChild(infoDiv);
}

main.appendChild(info);
}



