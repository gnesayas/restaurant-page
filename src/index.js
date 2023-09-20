import { loadPage } from "./page";
import FoodPic from './pexels-sydney-troxell-718742.jpg';

(function () {
    const content = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = "Gabriel's Bare Bone's Restaurant!";

    const myImage = new Image();
    myImage.src = FoodPic;

    const description = document.createElement('p');
    description.textContent = 'Best restaurant in the world, as rated by all critics!';

    loadPage(content, headline, myImage, description);
})();