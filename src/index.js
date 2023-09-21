import { loadHome } from "./page";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import './style.css';

(function () {
    document.body.classList.add('general');
    document.body.style.height = '100vh';
    document.body.style.width = '100vw';

    const header = document.createElement('div');
    header.classList.add('general');
    header.classList.add('header');

    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('id', 'home');
    homeBtn.classList.add('button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', (e) => {
        const oldContent = document.getElementById('content');
        oldContent.remove();
        loadHome();
        e.target.classList.add('selectedbtn');
        document.getElementById('menu').classList.remove('selectedbtn');
        document.getElementById('contact').classList.remove('selectedbtn');
    });
    header.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menu');
    menuBtn.classList.add('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', (e) => {
        const oldContent = document.getElementById('content');
        oldContent.remove();
        loadMenu();
        e.target.classList.add('selectedbtn');
        document.getElementById('home').classList.remove('selectedbtn');
        document.getElementById('contact').classList.remove('selectedbtn');
    });
    header.appendChild(menuBtn);
    
    const contactBtn = document.createElement('button');
    contactBtn.setAttribute('id', 'contact');
    contactBtn.classList.add('button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', (e) => {
        const oldContent = document.getElementById('content');
        oldContent.remove();
        loadContact();
        e.target.classList.add('selectedbtn');
        document.getElementById('home').classList.remove('selectedbtn');
        document.getElementById('menu').classList.remove('selectedbtn');
    });
    header.appendChild(contactBtn);
    
    document.body.appendChild(header);

    loadHome();
    document.getElementById('home').classList.add('selectedbtn');
})();