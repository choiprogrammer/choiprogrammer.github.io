let activeBoxes = [];

function showBox(day) {
    const newBox = document.getElementById(day);

    if (!activeBoxes.includes(day)) {
        activeBoxes.push(day);
    }

    const boxColor = getColor(day);

    newBox.style.backgroundColor = boxColor;
    newBox.style.borderColor = boxColor;

    lowerBox(newBox, boxColor);

    if (activeBoxes.length > 1) {
        const oldBox = document.getElementById(activeBoxes[0]);
        oldBox.style.animation = 'ascendBox 1s forwards';

        oldBox.style.backgroundColor = "transparent"; // Starts hollow
        oldBox.style.borderColor = getColor(activeBoxes[0]);

        setTimeout(() => {
            oldBox.style.backgroundColor = getColor(activeBoxes[0]);
        }, 1000);

        activeBoxes.shift();
    }
}

function lowerBox(box, color) {
    box.style.animation = 'none'; 
    void box.offsetWidth; 
    box.style.animation = 'lowerBox 1s forwards';

    box.style.borderColor = color;
    box.style.backgroundColor = color;

    setTimeout(() => {
        box.style.backgroundColor = "transparent";
    }, 1000);
}

function getColor(day) {
    switch(day) {
        case 'Monday': return 'red';
        case 'Tuesday': return 'orange';
        case 'Wednesday': return 'yellow';
        case 'Thursday': return 'green';
        case 'Friday': return 'blue';
        case 'Saturday': return 'indigo';
        case 'Sunday': return 'violet';
        default: return 'transparent';
    }
}
