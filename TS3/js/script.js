let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value !== "") {
        display.value += operator;
    }
}

function appendDecimal() {
    if (!display.value.includes(".")) {
        display.value += ".";
    }
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
