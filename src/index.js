import './styles.css';
import Logo from './logo-sunrise.svg';
import HamburgerMenu from './Hamburger_icon.svg';
import MainBackground from './terrace.jpg';
import PhoneIcon from './phone-icon.svg';
import showHomepage from './home/home';
import showAbout from './about/about';
import removeMain from './removeMain';
import showMenu from './menu/menu';
import showContact from './contact/contact';

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
menuList.className = 'navigation-drawer';

const menuListItems = ['Home', 'About', 'Menu', 'Contact'];
const functionsArr = [showHomepage, showAbout];

for (let i = 0; i <= menuListItems.length - 1; i++) {
  const li = document.createElement('li');
  li.className = `li-${i+1}`;
  const link = document.createElement('a');
  link.textContent = menuListItems[i];
  link.href = `#`;
  link.id = `${i+1}`;
  li.appendChild(link);
  menuList.appendChild(li);
}

nav.appendChild(menuList);

/// Menu button event listener
menuButton.addEventListener('click', () => {
  menuList.classList.toggle('clicked');
});

//Create footer html

const footer = document.createElement('footer');
footer.className = 'footer';
const callIcon = document.createElement('img');
callIcon.src = PhoneIcon;
callIcon.alt = 'call us';

const footerSpan = document.createElement('span');
footerSpan.textContent = 'Book a table';

footer.appendChild(callIcon);
footer.appendChild(footerSpan);

content.appendChild(footer);



showHomepage();
const homeBtn = document.getElementById('1');
homeBtn.addEventListener('click', () => {
  removeMain();
  showHomepage();
  menuList.classList.toggle('clicked');
})

const aboutBtn = document.getElementById('2');
aboutBtn.addEventListener('click', () => {
  removeMain();
  showAbout();
  menuList.classList.toggle('clicked');
})

const menuBtn = document.getElementById('3');
menuBtn.addEventListener('click', () => {
  removeMain();
  showMenu();
  menuList.classList.toggle('clicked');
})

const contactBtn = document.getElementById('4');
contactBtn.addEventListener('click', () => {
  removeMain();
  showContact();
  menuList.classList.toggle('clicked');
})
