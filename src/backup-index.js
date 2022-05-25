import './styles.css';
import Logo from './logo-sunrise.svg';
import HamburgerMenu from './Hamburger_icon.svg';
import MainBackground from './terrace.jpg';
import PhoneIcon from './phone-icon.svg';

const content = document.querySelector('.content');

//Create topbar html
const topBar = document.createElement('div');
topBar.className = 'top-bar';
content.appendChild(topBar);

const header = document.createElement('header');
header.className = 'header';
topBar.appendChild(header);

const imgLogo = document.createElement('img');
imgLogo.src = Logo;
imgLogo.alt = 'logo';

const h1Logo = document.createElement('h1');
h1Logo.textContent = 'Aurora';

header.appendChild(imgLogo);
header.appendChild(h1Logo);

const nav = document.createElement('nav');
topBar.appendChild(nav);

const menuButton = document.createElement('button');
menuButton.type = 'button';

const menuButtonImg = document.createElement('img');
menuButtonImg.src = HamburgerMenu;
menuButtonImg.alt = 'menu';

menuButton.appendChild(menuButtonImg);
nav.appendChild(menuButton);

const menuList = document.createElement('ul');
menuList.clasName = 'navigation-drawer';

const menuListItems = ['Home', 'About', 'Menu', 'Contact'];

for (let i = 0; i <= menuListItems.length - 1; i++) {
  const li = document.createElement('li');
  const link = document.createElement('a');

  link.textContent = menuListItems[i];
  link.href = `#${menuListItems[i].toLowerCase()}`;
  li.appendChild(link);
  menuList.appendChild(li);
}

nav.appendChild(menuList);

/// Menu button event listener
menuButton.addEventListener('click', () => {
  menuList.classList.toggle('clicked');
})

//Create main html

const main = document.createElement('main');
content.appendChild(main);

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


//Create footer html

const footer = document.createElement('footer');
const callIcon = document.createElement('img');
callIcon.src = PhoneIcon;
callIcon.alt = 'call us';

const footerSpan = document.createElement('span');
footerSpan.textContent = 'Book a table';

footer.appendChild(callIcon);
footer.appendChild(footerSpan);

content.appendChild(footer);




