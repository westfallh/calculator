let num1 = '';
let num2 = '';
let currentOperator = null;
let resetDisplay = false;

function appendNumber(number) {
    if (resetDisplay) {
        document.getElementById('display').value = '';
        resetDisplay = false;
    }
    document.getElementById('display').value += number;
}

function setOperator(operator) {
    if (currentOperator !== null) calculate();
    num1 = document.getElementById('display').value;
    currentOperator = operator;
    resetDisplay = true;
}

function clearDisplay(){
    num1 = '';
    num2 = '';
    currentOperator = null;
    resetDisplay = false;
    document.getElementById('display').value = '';
}

function calculate() {
    if (currentOperator === null || resetDisplay) return;
    num2 = document.getElementById('display').value;
    if (currentOperator === '/' && num2 === '0') {
        document.getElementById('display').value = 'Dont try!';
        currentOperator = null;
        return;
    }

    const result = operate(currentOperator, parseFloat(num1), parseFloat(num2));
    document.getElementById('display').value = Math.round(result * 100) / 100;
    currentOperator = null;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return 0;
    }
}
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
