function toggleDarkMode() {
    const body = document.body;
    const button = document.querySelector('button');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Bright Mode';
    } else {
        button.textContent = 'Dark Mode';
    }
}