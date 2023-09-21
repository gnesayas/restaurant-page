import FoodPic from './pexels-sydney-troxell-718742.jpg';
import './style.css';

function loadHome() {
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
    headline.textContent = "Gabriel's Unbelievable Restaurant!";
    container.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = 'Best restaurant in the world, as rated by all critics!';
    container.appendChild(description);

    const hours = document.createElement('div');
    hours.classList.add('flexcolumn');
    const hoursHeading = document.createElement('h1');
    hoursHeading.textContent = 'Hours';
    const sunday = document.createElement('p');
    sunday.textContent = 'Sunday: Closed';
    const monday = document.createElement('p');
    monday.textContent = 'Monday: 6am - 10pm';
    const tuesday = document.createElement('p');
    tuesday.textContent = 'Tuesday: 6am - 10pm';
    const wednesday = document.createElement('p');
    wednesday.textContent = 'Wednesday: 6am - 10pm';
    const thursday = document.createElement('p');
    thursday.textContent = 'Thursday: 6am - 10pm';
    const friday = document.createElement('p');
    friday.textContent = 'Friday: 6am - 10pm';
    const saturday = document.createElement('p');
    saturday.textContent = 'Saturday: 6am - 10pm';
    hours.appendChild(hoursHeading);
    hours.appendChild(sunday);
    hours.appendChild(monday);
    hours.appendChild(tuesday);
    hours.appendChild(wednesday);
    hours.appendChild(thursday);
    hours.appendChild(friday);
    hours.appendChild(saturday);
    container.appendChild(hours);

    const location = document.createElement('div');
    location.classList.add('flexcolumn');
    const locationHeading = document.createElement('h1');
    locationHeading.textContent = 'Location';
    const address = document.createElement('p');
    address.textContent = '12345 Unbelievable Street, Unbelievable City, Nebraska';
    location.appendChild(locationHeading);
    location.appendChild(address);
    container.appendChild(location);

    content.appendChild(container);
    document.body.appendChild(content);

    document.querySelectorAll('#content div, #content h1, #content p').forEach((element) => {
        element.classList.add('general');
    });
}

export { loadHome };