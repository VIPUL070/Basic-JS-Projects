let display = document.querySelector('.calc-display');
let button = document.querySelectorAll('.btn')

let firstVal = ''
let operator = ''
let secondVal = ''
let reset = false;

function updateDisplay(val) {
    display.textContent = val;
}

button.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let val = btn.textContent
        if (btn.classList.contains('btn-func')) {
            handleFunc(val)
        } else if (btn.classList.contains('btn-op')) {
            handleOperation(val)
        } else {
            handleNum(val);
        }
    })
});

function handleFunc(func) {
    if (func === 'AC') {
        firstVal = ''
        secondVal = ''
        operator = ''
        updateDisplay('0');
    }else if(func === '+/-'){
        updateDisplay(parseFloat(display.textContent) * -1);
    }
    else {
        updateDisplay(parseFloat(display.textContent) /100 );
    }
}

function handleNum(num) {
    if (display.textContent === '0') {
        updateDisplay(num)
    }
    else if (reset) {
        updateDisplay(num);
        reset = false;
    }
    else {
        updateDisplay(display.textContent + num);
    }
}

function handleOperation(op) {
    if (op === '=') {
        if (firstVal && operator) {
            secondVal = display.textContent
            let result = operation(parseFloat(firstVal), parseFloat(secondVal), operator);
            updateDisplay(result)
            firstVal = ''
            secondVal = ''
            operator = ''
            reset = true;
        }
    }
    else {
        firstVal = display.textContent
        operator = op
        reset = true;
    }
}

function operation(a, b, op) {
    switch (op) {
        case '+': return a + b;
            break;
        case '×': return a * b;
            break;
        case '−': return a - b;
            break;
        case '÷': return b == 0 ? "Error" : (a / b);
            break;
        default: return 0;
    }
}