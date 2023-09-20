function loadContact() {
    const oldContent = document.getElementById('content');
    if (oldContent) {
        oldContent.remove();
    }
    console.log('Loaded Contact');
}

export { loadContact };