function loadMenu() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    content.classList.add('general');
    content.textContent = 'Menu';

    document.body.appendChild(content);
}

export { loadMenu };