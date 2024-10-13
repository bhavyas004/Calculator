let input = document.getElementById('inputBox');
let result = document.getElementById('resultBox');
let buttons = document.querySelectorAll('button');
let string = "";
let res = "";
let arr = Array.from(buttons);
let operators = ['+', '-', '*', '/', '%'];
let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let isResult = false;

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let clickedValue = e.target.innerHTML;

        if (string.length === 0) {
            if (clickedValue === '-') { 
                string += clickedValue;
            } else if (operators.includes(clickedValue) || ['AC', 'DEL', '='].includes(clickedValue)) {
                string = ''; 
            } else if (clickedValue === '.') {
                string = '0.';
            } else {
                string += clickedValue;
            }
            input.value = string;
        }
        else if (isResult && operators.includes(clickedValue)) {
            res += clickedValue;
            string = res;
            input.value = res;
            isResult = false;
        }
        else if (isResult && nums.includes(clickedValue)) {
            string = clickedValue;
            input.value = string;
            result.value = " ";
            isResult = false;
        }
        else if (isResult && clickedValue === '.') {
            string = '0.';
            input.value = string;
            isResult = false;
        }
        else if (isResult && clickedValue === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
            result.value = '';
            isResult = false;
        }
        else if (isResult && clickedValue === 'AC') {
            string = '';
            input.value = string;
            result.value = string;
            isResult = false;
        }
        else if (['+', '-', '*', '/', '%'].includes(clickedValue)) {
            handleOperator(clickedValue);
        }
        else if (clickedValue === '.') {
            let lastChar = string.slice(-1);
            let parts = string.split(/[\+\-\*\/]/);
            let lastNumber = parts[parts.length - 1];
            if (!lastNumber.includes('.') && !operators.includes(lastChar)) {
                string += clickedValue;
            } else if (operators.includes(lastChar)) {
                string += '0' + clickedValue;
            }
            input.value = string;
        }
        else if (clickedValue === '=') {
            res = evaluateExpression(string);
            result.value = res;
            isResult = true;
        }
        else if (clickedValue === 'AC') {
            string = "";
            res = "";
            input.value = string;
            result.value = string;
        }
        else if (clickedValue === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            if (isResult) {
                string = clickedValue;
                isResult = false;
                input.value = string;
            } else {
                string += clickedValue;
                input.value = string;
            }
        }
    });
});

function handleOperator(operator) {
    let lastChar = string.slice(-1);

    // Allow '-' after operators * / % for negative numbers
    if ((operator === '-' && ['*', '/', '%'].includes(lastChar))) {
        string += operator;
        input.value = string;
        return;
    }
    if (operators.includes(lastChar)) {
        let secondLastChar = string.slice(-2, -1);
        if (operators.includes(secondLastChar)) {
            string = string.slice(0, -2); 
        } else {
            string = string.slice(0, -1);
        }
    }
    
    string += operator;
    input.value = string;
}
function evaluateExpression(expression) {
    try {
        let result = eval(expression);
        return parseFloat(result.toFixed(13));
    } catch (error) {
        return 'Error'; 
    }
}
