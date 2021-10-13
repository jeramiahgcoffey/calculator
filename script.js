/********** OPERATOR FUNCTIONS **********/
const add = function (num1, num2) {
    return roundToSix(num1 + num2);
};

const subtract = function (num1, num2) {
    return roundToSix(num1 - num2);
};

const multiply = function (num1, num2) {
    return roundToSix(num1 * num2);
};

const divide = function (dividend, divisor) {
    return roundToSix(dividend / divisor);
};

function roundToSix(num) {
    // Implementing MDN's advice for rounding
    return +(Math.round(num + "e+6") + "e-6");
}

const evaluate = function (num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "ERROR";
    }
};
/*****************************************/

const toExpo = function (num) {
    return Number.parseFloat(num).toExponential(4);
};

const updateDisplay = function (value) {
    const display = document.getElementById("display");
    if (value.length > 10) {
        display.textContent = toExpo(value);
    } else {
        display.textContent = value;
    }
};

/********** GLOBAL VARIABLES **********/
let inputFinished = false;
let displayValue = "0";
let storedValue = "0";
let operator = null;

/********** EVENT HANDLERS **********/
const handleNumberInput = function (e) {
    const inputValue = e.target.value;
    if (inputFinished) {
        storedValue = displayValue;
        displayValue = "0";
        inputFinished = false;
    }
    if (inputValue == ".") {
        if (displayValue.includes(".")) {
            return;
        } else {
            displayValue += inputValue;
        }
    } else {
        if (displayValue == "0") {
            displayValue = inputValue;
        } else {
            displayValue += inputValue;
        }
    }
    updateDisplay(displayValue);
};

const handleOperatorInput = function (e) {
    if (operator) {
        handleEquate();
    }
    operator = e.target.value;
    inputFinished = true;
};

const handleEquate = function () {
    if (operator) {
        displayValue = evaluate(storedValue, displayValue, operator);
        updateDisplay(displayValue);
        operator = null;
        inputFinished = true;
    }
};

const handleAllClear = function () {
    displayValue = "0";
    storedValue = "0";
    inputFinished = false;
    operator = null;
    updateDisplay(displayValue);
};

const handleClear = function () {
    displayValue = "0";
    updateDisplay(displayValue);
};

const handleNegate = function () {
    if (displayValue != "0") {
        if (!displayValue.includes("-")) {
            displayValue = "-" + displayValue;
        } else {
            displayValue = displayValue.split("-").join("");
        }
    }
    updateDisplay(displayValue);
};
/*****************************************/

/********** ADD EVENT LISTENERS **********/
const numberButtons = Array.from(document.querySelectorAll(".number button"));
const operatorButtons = Array.from(
    document.querySelectorAll(".operator button")
);
const equateButton = document.querySelector("#equate button");
const allClearButton = document.querySelector("#clear-all button");
const clearButton = document.querySelector("#clear button");
const negateButton = document.querySelector("#negate button");

for (button in numberButtons) {
    numberButtons[button].addEventListener("click", handleNumberInput);
}

for (button in operatorButtons) {
    operatorButtons[button].addEventListener("click", handleOperatorInput);
}

equateButton.addEventListener("click", handleEquate);
allClearButton.addEventListener("click", handleAllClear);
clearButton.addEventListener("click", handleClear);
negateButton.addEventListener("click", handleNegate);
/****************************************/
