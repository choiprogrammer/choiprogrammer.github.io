function changeColor() {
    const colors = ['#f0f8ff', '#faebd7', '#7fffd4', '#ffe4c4', '#ffebcd'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
