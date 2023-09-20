import { loadHome } from "./page";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import './style.css';

(function () {
    document.body.classList.add('general');

    const header = document.createElement('div');
    header.classList.add('general');
    header.classList.add('header');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', () => {
        const oldContent = document.getElementById('content');
        oldContent.remove();
        loadHome();
    });
    header.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => {
        const oldContent = document.getElementById('content');
        oldContent.remove();
        loadMenu();
    });
    header.appendChild(menuBtn);
    
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', () => {
        const oldContent = document.getElementById('content');
        oldContent.remove();
        loadContact();
    });
    header.appendChild(contactBtn);
    
    document.body.appendChild(header);

    loadHome();
})();