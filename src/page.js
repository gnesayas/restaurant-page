import './style.css';

function loadPage(content, headline, image, description) {
    content.classList.add('general');

    const header = document.createElement('div');
    header.classList.add('general');
    header.classList.add('header');
    header.setAttribute('id', 'header');
    content.appendChild(header);

    headline.classList.add('general');
    content.appendChild(headline);

    image.style.width = '300px';
    image.style.height = 'auto';
    content.appendChild(image);

    description.classList.add('general');
    content.appendChild(description);
}

export { loadPage };