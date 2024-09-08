let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
let operators = ['+', '-', '*', '/', '%'];
let isResult = false;
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(isResult && operators.includes(e.target.innerHTML)){
            string += e.target.innerHTML;
            input.value = string;
            isResult = false;
        }
        else if (isResult && e.target.innerHTML != "DEL" && e.target.innerHTML != "AC") {
            string = e.target.innerHTML; 
            input.value = string;
            isResult = false; 
        }
        else if (string.length == 0) {
            if (operators.includes(e.target.innerHTML) || e.target.innerHTML == 'AC' || e.target.innerHTML == "DEL") {
                string = '';
            }
            else {
                string += e.target.innerHTML;
            }
            input.value = string;
        }
        else if (e.target.innerHTML == '+') {
            let str = string.slice(-1);
            if (operators.includes(str)) {
                string = string.slice(0, -1);
            }
            string += e.target.innerHTML;
            input.value = string;
        }
        else if (e.target.innerHTML == '-') {
            let str = string.slice(-1);
            if (str == '+' || str == '-') {
                string = string.slice(0, -1);
            }
            string += e.target.innerHTML;
            input.value = string;
        }
        else if (e.target.innerHTML == '*') {
            let str = string.slice(-1);
            let str1 = string.slice(-2);
            if ((operators.includes(str) && str != '*') || str1 == '**') {
                string = string.slice(0, -1);
            }

            string += e.target.innerHTML;
            input.value = string;
        }
        else if (e.target.innerHTML == '/') {
            let str = string.slice(-1);
            if (operators.includes(str)) {
                string = string.slice(0, -1);
            }
            string += e.target.innerHTML;
            input.value = string;
        }
        else if (e.target.innerHTML == '%') {
            let str = string.slice(-1);
            if (operators.includes(str)) {
                string = string.slice(0, -1);
            }
            string += e.target.innerHTML;
            input.value = string;
        }
        else if (e.target.innerHTML == '=') {
            function evaluateExpression(expression) {
                expression = expression.replace(/\d+/g, function (match) {
                    return parseInt(match, 10);
                });
                return eval(expression);
            }
            string = evaluateExpression(string);
            input.value = string;
            isResult = true;

        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            if (isResult) {
                string = e.target.innerHTML;
                isResult = false;
                input.value = string;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        }
    })
})
