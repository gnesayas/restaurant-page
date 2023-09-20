function loadContact() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    content.classList.add('general');
    content.textContent = 'Contact';

    document.body.appendChild(content);
}

export { loadContact };