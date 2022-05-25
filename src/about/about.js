import './about.css';
import Farm from './farm.jpg';
import showCarousel from './carousel/slide';


export default function showAbout() {
  const content = document.querySelector('.content');
  const main = document.createElement('main');
  const footer = document.querySelector('.footer');
  main.className = 'main-about';
  content.insertBefore(main, footer);
  const h2 = document.createElement('h2');
  h2.textContent = 'About';
  h2.className = 'about-h2';
  main.appendChild(h2);
  const paragraphs = document.createElement('div');
  paragraphs.className = 'paras';
  const paragraphData = [
    {
      title: 'Aurora',
      text: "We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.",
    },
    {
      title: 'Sustenance',
      text: "In case you're searching for top notch food, Aurora is unquestionably one of the best spots to visit. The adaptable menu flaunts some imaginative food, for example, salt and pepper squid on a delicate bed of fresh herbs.",
    },
    {
      title: 'Wine',
      text: "The honor-winning wine determination merits uncommon notice, both quaffer and specialist are all around provided food for. The determination has clearly been picked in light of the menu, and numerous a wine darling’s heart will be heartened to see the decisions accessible.",
    },
    {
      title: 'Climate',
      text: "The glass divider confronting the sea, unbiased shades, finished dividers, and excellent fine art, just as lavish tablecloths and seats, all contribute toward an extravagant ordeal. The earthenware and cutlery are just delightful.",
    }
  ] 
  paragraphData.forEach(para => {
    const paraDiv = document.createElement('div');
    paraDiv.className = 'para';
    const paraTitle = document.createElement('h3');
    paraTitle.textContent = para.title;
    const paraText = document.createElement('p');
    paraText.textContent = para.text;
    paraDiv.appendChild(paraTitle);
    paraDiv.appendChild(paraText);
    paragraphs.appendChild(paraDiv);
  })
  main.appendChild(paragraphs);
  const imgDiv = document.createElement('div');
  imgDiv.className = 'img-container';
  const farmImg = document.createElement('img');
  farmImg.src = Farm;
  imgDiv.appendChild(farmImg);
  main.appendChild(imgDiv);
  
  showCarousel();
}