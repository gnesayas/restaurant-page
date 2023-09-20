function loadMenu() {
    const oldContent = document.getElementById('content');
    if (oldContent) {
        oldContent.remove();
    }
    console.log('Loaded Menu');
}

export { loadMenu };