import './slide.css';

export default function showCarousel() {
  const main = document.querySelector('main');

  const testimonialsContainer = document.createElement('div');
  testimonialsContainer.className = 'testimonials-container';
  main.appendChild(testimonialsContainer);

  const testimonialsTitle = document.createElement('h3');
  testimonialsTitle.textContent = 'Testimonials';
  testimonialsContainer.appendChild(testimonialsTitle);

  const testimonialsContent = document.createElement('div');
  testimonialsContent.className = 'testimonials-content';
  testimonialsContainer.appendChild(testimonialsContent);

  const prevBtn = document.createElement('button');
  prevBtn.type = 'button';
  prevBtn.id = 'prev';
  prevBtn.innerHTML = '&#8249';

  const slideRow = document.createElement('div');
  slideRow.className = 'slide-row';

  let testimonialsArr = [
    {
      class: 'first',
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, at unde eaque saepe consectetur earum aspernatur."
    },
    {
      class: 'second',
      text: "Quas, at unde eaque saepe consectetur earum aspernatur. Eos est, omnis pariatur odio quas eum maxime. Officiis beatae ipsam quaerat ullam et modi veniam, suscipit harum in quia numquam velit expedita voluptates!"
    },
    {
      class: 'third',
      text: "Officiis beatae ipsam quaerat ullam et modi veniam, suscipit harum in quia numquam velit expedita voluptates!"
    },
    {
      class: 'fourth',
      text: "Quas, at unde eaque saepe consectetur earum aspernatur. Eos est, omnis pariatur odio quas eum maxime. Officiis beatae ipsam quaerat ullam et modi veniam, suscipit harum in quia numquam velit expedita voluptates!"
    },
  ]
  
  const nextBtn = document.createElement('button');
  nextBtn.type = 'button';
  nextBtn.id = 'next';
  nextBtn.innerHTML = '&#8250';
  
  const testimonialButtons = document.createElement('div');
  testimonialButtons.className = 'testimonials-buttons';

  testimonialsContent.appendChild(slideRow);
  testimonialsArr.forEach(testimonial => {
    const testimonialDiv = document.createElement('div');
    testimonialDiv.classList.add('slide-col');
    testimonialDiv.classList.add(`${testimonial.class}`);
    testimonialDiv.textContent = testimonial.text;
    slideRow.appendChild(testimonialDiv);
  })
  testimonialsContent.appendChild(testimonialButtons);
  testimonialButtons.appendChild(prevBtn);
  testimonialButtons.appendChild(nextBtn);

let translate = 0;
let translateAmount = 100;

const slideCols = document.querySelectorAll('.slide-col');

function slide(direction) {
  if (direction === 'prev' && translate == 0) return
  if (direction === 'next' && translate == -300) return
  direction === 'next' ? translate -= translateAmount : translate += translateAmount;
  slideCols.forEach(column => {
    column.style.transform = `translateX(${translate}%)`;
  });
};

prevBtn.addEventListener('click', () => {
  slide('prev');
});
nextBtn.addEventListener('click', () => {
  slide('next');
});
}
