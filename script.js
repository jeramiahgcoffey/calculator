let value1;
let value2;

const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const multiply = function (num1, num2) {
    return num1 * num2;
};

const divide = function (dividend, divisor) {
    return dividend / divisor;
};

const operate = function (num1, num2, operator) {
    switch (operator) {
        case "+":
            add(num1, num2); // Not sure if I need to return, or just call the functions
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            return "ERROR";
    }
};

const updateDisplay = function (value) {
    const display = document.getElementById("display");
    display.textContent = value;
};
