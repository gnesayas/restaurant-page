import FoodPic from './pexels-sydney-troxell-718742.jpg';
import './style.css';

function loadMenu() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    content.classList.add('general');
    content.classList.add('content');

    content.style.backgroundImage = `url(${FoodPic}`;
    content.style.backgroundSize = 'cover';
    content.style.height = 'calc(100% - 49px)';

    const container = document.createElement('div');
    container.classList.add('container');

    const headline = document.createElement('h1');
    headline.textContent = "Menu";
    container.appendChild(headline);

    const beverageDiv = document.createElement('div');
    beverageDiv.classList.add('flexcolumn');

    const beverages = document.createElement('h2');
    beverages.textContent = 'Beverages';
    const beverageHeading = document.createElement('h3');
    beverageHeading.textContent = 'Unbelievable Beverage';
    const beverageDescription = document.createElement('p');
    beverageDescription.textContent = 'An unbelievably flavorable beverage';
    const beveragePrice = document.createElement('p');
    beveragePrice.textContent = '$154';
    beverageDiv.appendChild(beverages);
    beverageDiv.appendChild(beverageHeading);
    beverageDiv.appendChild(beverageDescription);
    beverageDiv.appendChild(beveragePrice);
    container.appendChild(beverageDiv);

    const sideDiv = document.createElement('div');
    sideDiv.classList.add('flexcolumn');

    const sides = document.createElement('h2');
    sides.textContent = 'Sides';
    const sideHeading = document.createElement('h3');
    sideHeading.textContent = 'Unbelievable Side';
    const sideDescription = document.createElement('p');
    sideDescription.textContent = 'An unbelievably tasty side';
    const sidePrice = document.createElement('p');
    sidePrice.textContent = '$342';
    sideDiv.appendChild(sides);
    sideDiv.appendChild(sideHeading);
    sideDiv.appendChild(sideDescription);
    sideDiv.appendChild(sidePrice);
    container.appendChild(sideDiv);

    const dishDiv = document.createElement('div');
    dishDiv.classList.add('flexcolumn');

    const mainDishes = document.createElement('h2');
    mainDishes.textContent = 'Main Dishes';
    const dishHeading = document.createElement('h3');
    dishHeading.textContent = 'Unbelievable Dish';
    const dishDescription = document.createElement('p');
    dishDescription.textContent = 'An unbelievably juicy dish';
    const dishPrice = document.createElement('p');
    dishPrice.textContent = '$746';
    dishDiv.appendChild(mainDishes);
    dishDiv.appendChild(dishHeading);
    dishDiv.appendChild(dishDescription);
    dishDiv.appendChild(dishPrice);
    container.appendChild(dishDiv);

    content.appendChild(container);
    document.body.appendChild(content);

    document.querySelectorAll('#content div, #content h1, #content h2, #content h3, #content p').forEach((element) => {
        element.classList.add('general');
    });
}

export { loadMenu };