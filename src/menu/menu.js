import './menu.css';

export default function showMenu() {
  const content = document.querySelector('.content');
  const main = document.createElement('main');
  const footer = document.querySelector('.footer');
  main.className = 'main-menu';
  content.insertBefore(main, footer);

  const h2 = document.createElement('h2');
  h2.textContent = 'Menu';
  h2.className = 'menu-h2';
  main.appendChild(h2);

  const tastingMenu = [
    {
      item: "Carpaccio",
      description: "Red prawn carpaccio with avocado cream and assorted summer vegetables",
    },
    {
      item: "CHICKPEA",
      description: "Chickpea soup with octopus and bread croutons ",
    },
    {
      item: "SPAGHETTI",
      description: "Homemade spaghetti with lobster and bisque ",
    },
    {
      item: "CHEEK",
      description: "Slow-cooked veal cheek in aromatic port sauce, served with “Pappa al pomodoro” and potato cream ",
    }
  ]

  const saladMenu = [
    {
      item: "VEGETABLES",
      description: "Assorted raw and cooked vegetable plate with dill and fennel puree, beetroot and low-fat yoghurt sauces",
    },
    {
      item: "CHICKPEA",
      description: "Chickpea soup with octopus and bread croutons",
    },
    {
      item: "MOZZARELLA",
      description: "Mozzarella di bufala salad with datterini cherry tomatoes, capers, eggplant cream, and Mediterranean sauce",
    },
  ]
  
  const pastaMenu = [
    {
      item: "RISOTTO",
      description: "Pag cheese fondue risotto with lamb and Portobello mushrooms",
    },
    {
      item: "SPAGHETTI",
      description: "Homemade spaghetti with lobster and bisque",
    },
    {
      item: "RAVIOLI",
      description: "Cheese filled ravioli with cherry tomato sauce",
    }
  ]
  
  const fishMenu = [
    {
      item: "EEL AND OYSTER",
      description: "Smoked eel, oyster, and caviar served with asparagus and garlic",
    },
    {
      item: "SCALLOPS",
      description: "Seared scallops with purple potatoes, asparagus, and beetroots",
    },
    {
      item: "BRODETTO",
      description: "Selection of fresh fish fillet, scallop, and red shrimp, served with polenta and fish soup",
    },
    {
      item: "SEA BASS",
      description: "Selection of fresh fish fillet, scallop, and red shrimp, served with polenta and fish soup",
    }
  ]
  
  const meatMenu = [
    {
      item: "TARTARE",
      description: "Beef tartare with spring onion, capers, anchovy sauce, and marinated egg yolk",
    },
    {
      item: "CHEEK",
      description: "Slow-cooked veal cheek in aromatic port sauce, served with “Pappa al pomodoro” and potato cream",
    },
    {
      item: "LAMB",
      description: "Lamb fillet in herb crust with eggplant, potatoes, leek, and green peas",
    },
    {
      item: "BEEF",
      description: "Seared beef fillet with mushroom puree and thyme-scented potatoes",
    }
  ]
  
  const burgerMenu = [
    {
      item: "Macho Burger",
      description: "With guacamole, pepperjack cheese & chipotle mayo",
    },
    {
      item: "Firehouse Burger",
      description: "Pepperjack cheese, jalapeno, onions, & hot sauce",
    },
    {
      item: "Shrimp burger",
      description: "Peeled shrimp, toasted buns, mediterranean garlic sauce, shallots, herbs",
    },
    {
      item: "Lamb Burger",
      description: "Charcoal seared lamb kebab meat with mushrooms, mint and parsley sauce",
    }
  ]

  const menuDishes = [tastingMenu, saladMenu, pastaMenu, fishMenu, meatMenu, burgerMenu];

  const menuCategories = ['Tasting menu', 'Salads and starters', 'Pasta and risotto', 'Fish and seafood', 'Meat', 'Burgers'];

  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu-container';
  main.appendChild(menuContainer);

  for (let i = 0; i < menuCategories.length; i++) {
    const categoryH3 = document.createElement('h3');
    categoryH3.textContent = menuCategories[i].toUpperCase();
    categoryH3.className = 'menu-category';
    categoryH3.style.marginTop = '1rem';
    menuContainer.appendChild(categoryH3);

    menuDishes[i].forEach(dish => {
      const dishName = document.createElement('h4');
      dishName.textContent = dish.item.toUpperCase();
      dishName.style.marginTop = '.5rem';
      menuContainer.appendChild(dishName);
      const dishDescription = document.createElement('p');
      dishDescription.textContent = dish.description.toUpperCase();
      dishDescription.style.marginBlock = '.3rem';
      menuContainer.appendChild(dishDescription);
      const thinLine = document.createElement('hr');
      menuContainer.appendChild(thinLine);
    })
  }
}







