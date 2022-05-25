import './contact.css';
import Location from './location.jpg';
import Logo from '../logo-sunrise.svg';

export default function showContact() {
  const content = document.querySelector('.content');
  const main = document.createElement('main');
  const footer = document.querySelector('.footer');
  main.className = 'main-contact';
  content.insertBefore(main, footer);

  const h2 = document.createElement('h2');
  h2.textContent = 'Contact';
  h2.className = 'contact-h2';
  main.appendChild(h2);

  const contactInfo = [
    {
      title: 'Address:',
      info: 'Riviera Dionisio Il Grande, 194, 96100 Siracusa SR, Italia',
    },
    {
      title: 'Tel:',
      info: '+39 06 173 14002',
    },
    {
      title: 'Open Hours:',
      info: 'Mon-Fri 12:30-22:45',
    },
  ]

  const contactDiv = document.createElement('div');
  contactDiv.className = 'contact-div';
  main.appendChild(contactDiv);
  
  const h3 = document.createElement('h3');
  h3.className = 'contact-h3';
  h3.textContent = 'Visit us at Aurora';
  contactDiv.appendChild(h3);

  const contactLogo = document.createElement('img');
  contactLogo.src = Logo;
  contactDiv.appendChild(contactLogo);

  contactInfo.forEach(pair => {
    const p = document.createElement('p');
    p.textContent = pair.info;
    p.className = 'contact-p';
    contactDiv.appendChild(p);
  })

  // const contactImg = document.createElement('img');
  // contactImg.src = Location; 
  // contactImg.alt = 'streets of Siracusa';
  // contactImg.className = 'contact-img';
  // main.appendChild(contactImg);
}  