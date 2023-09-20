import FoodPic from './pexels-sydney-troxell-718742.jpg';
import './style.css';

function loadHome() {
    const oldContent = document.getElementById('content');
    if (oldContent) {
        oldContent.remove();
    }

    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    content.classList.add('general');

    const headline = document.createElement('h1');
    headline.classList.add('general');
    headline.textContent = "Gabriel's Restaurant!";

    const image = new Image();
    image.src = FoodPic;
    image.style.width = '300px';
    image.style.height = 'auto';

    const description = document.createElement('p');
    description.classList.add('general');
    description.textContent = 'Best restaurant in the world, as rated by all critics!';

    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);

    document.body.appendChild(content);
}

export { loadHome };