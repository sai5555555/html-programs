let currentInput = '';
let operation = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperation(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentInput !== '') {
        calculate();
    }
    operation = op;
    currentInput = '';
}

function calculate() {
    if (firstOperand === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    let result;

    switch (operation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                result = 'Error';
            } else {
                result = firstOperand / secondOperand;
            }
            break;
    }

    document.getElementById('display').value = result;
    firstOperand = result;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operation = '';
    document.getElementById('display').value = '';
}
