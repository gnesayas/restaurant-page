import FoodPic from './pexels-sydney-troxell-718742.jpg';
import './style.css';

function loadContact() {
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
    headline.textContent = "Contact Us";
    container.appendChild(headline);

    const owner = document.createElement('div');
    owner.classList.add('flexcolumn');
    const ownerHeading = document.createElement('h1');
    ownerHeading.textContent = 'Owner';
    const ownerName = document.createElement('p');
    ownerName.textContent = 'Gabriel';
    const ownerEmail = document.createElement('p');
    ownerEmail.textContent = 'Email: totallyrealemail@notfake.com';
    const ownerPhone = document.createElement('p');
    ownerPhone.textContent = 'Phone: 555-555-5554';
    owner.appendChild(ownerHeading);
    owner.appendChild(ownerName);
    owner.appendChild(ownerEmail);
    owner.appendChild(ownerPhone);
    container.appendChild(owner);

    const manager = document.createElement('div');
    manager.classList.add('flexcolumn');
    const managerHeading = document.createElement('h1');
    managerHeading.textContent = 'Manager';
    const managerName = document.createElement('p');
    managerName.textContent = 'Unbelievable Manager';
    const managerEmail = document.createElement('p');
    managerEmail.textContent = 'Email: unbelievablyrealemail@notfake.com';
    const managerPhone = document.createElement('p');
    managerPhone.textContent = 'Phone: 555-555-5555';
    manager.appendChild(managerHeading);
    manager.appendChild(managerName);
    manager.appendChild(managerEmail);
    manager.appendChild(managerPhone);
    container.appendChild(manager);

    const chef = document.createElement('div');
    chef.classList.add('flexcolumn');
    const chefHeading = document.createElement('h1');
    chefHeading.textContent = 'Head Chef';
    const chefName = document.createElement('p');
    chefName.textContent = 'Unbelievable Chef';
    const chefEmail = document.createElement('p');
    chefEmail.textContent = 'Email: incrediblyrealemail@notfake.com';
    const chefPhone = document.createElement('p');
    chefPhone.textContent = 'Phone: 555-555-5556';
    chef.appendChild(chefHeading);
    chef.appendChild(chefName);
    chef.appendChild(chefEmail);
    chef.appendChild(chefPhone);
    container.appendChild(chef);

    content.appendChild(container);
    document.body.appendChild(content);

    document.querySelectorAll('#content div, #content h1, #content p').forEach((element) => {
        element.classList.add('general');
    });
}

export { loadContact };