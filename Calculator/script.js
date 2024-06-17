let currentInput = '';
let fullExpression = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (fullExpression !== '') {
        calculateResult(false);
    }
    fullExpression += currentInput + ' ' + operation + ' ';
    currentInput = '';
    updateDisplay();
}

function calculateResult(final = true) {
    if (currentInput === '') return;
    fullExpression += currentInput;
    try {
        currentInput = eval(fullExpression).toString();
    } catch {
        currentInput = 'Error';
    }
    if (final) {
        fullExpression = '';
    }
    shouldResetDisplay = true;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    fullExpression = '';
    shouldResetDisplay = false;
    updateDisplay();
}

function deleteLast() {
    if (currentInput !== '' && !shouldResetDisplay) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = fullExpression + currentInput;
}
