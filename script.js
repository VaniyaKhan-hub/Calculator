let current = '';
let operator = '';
let previous = '';

function getvalue(val) {
    current += val;
    updateDisplay();
}

function setOperator(op) {
    if (current === '') return;
    if (previous !== '') {

        result();
    }
    operator = op;
    previous = current;
    current = '';
}

function result() {
    let result = 0;
    let a = parseFloat(previous);
    let b = parseFloat(current);

    if (isNaN(a) || isNaN(b)) return;

    if (operator === '+') result = a + b;
    else if (operator === '-') { result = a - b }
    else if (operator === '*') { result = a * b }
    else if (operator === '/') {
        if (b === 0) {
            current = 'Error';
            updateDisplay();
            reset();
            return;
        }
        result = a / b;
    }

    current = result.toString();
    operator = '';
    previous = '';
    updateDisplay();
}

function clearResult() {
    current = '';
    operator = '';
    previous = '';
    updateDisplay();
}

function deleteLast() {
    current = current.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = current;
}

function reset() {
    operator = '';
    previous = '';
}