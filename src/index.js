import FoodPic from './pexels-sydney-troxell-718742.jpg';
import { loadPage } from "./page";
import './style.css';

(function () {
    document.body.classList.add('general');

    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const headline = document.createElement('h1');
    headline.textContent = "Gabriel's Bare Bone's Restaurant!";

    const myImage = new Image();
    myImage.src = FoodPic;

    const description = document.createElement('p');
    description.textContent = 'Best restaurant in the world, as rated by all critics!';

    loadPage(content, headline, myImage, description);
    document.body.appendChild(content);

    const header = document.getElementById('header');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('button');
    homeBtn.textContent = 'Home';
    header.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('button');
    menuBtn.textContent = 'Menu';
    header.appendChild(menuBtn);
    
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('button');
    contactBtn.textContent = 'Contact';
    header.appendChild(contactBtn);
})();