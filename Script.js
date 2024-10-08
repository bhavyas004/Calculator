let input = document.getElementById('inputBox');
let result = document.getElementById('resultBox')
let buttons = document.querySelectorAll('button');
let string = "";
let res = "";
let arr = Array.from(buttons);
let operators = ['+', '-', '*', '/', '%'];
let nums = ['0','1','2','3','4','5','6','7','8','9'];
let isResult = false;
arr.forEach(button => {  
    button.addEventListener('click', (e) => {
        if (string.length == 0) {
            if ((operators.includes(e.target.innerHTML) && e.target.innerHTML!= '-') || e.target.innerHTML == 'AC' || e.target.innerHTML == "DEL"||e.target.innerHTML == '=') {
                string = '';
            }
            else if(e.target.innerHTML == '.'){
                string = '0.'
            }
            else {
                string += e.target.innerHTML;
            }
            input.value = string;
        }
        else if(isResult && operators.includes(e.target.innerHTML)){
            res += e.target.innerHTML;
            string = res;
            input.value = res;
            isResult = false;
        }
        else if (isResult && nums.includes(e.target.innerHTML)) {
            string = e.target.innerHTML; 
            input.value = string;
            result.value = "";
            isResult = false; 
        }
        else if(isResult && e.target.innerHTML == '.'){
            string = '0.'
            input.value = string;
            isResult = false;
        }
        else if(isResult && e.target.innerHTML == 'DEL'){
            string = string.slice(0,-1);
            input.value = string;
            result.value = ''
            isResult = false;
        }
        else if(isResult && e.target.innerHTML == 'AC'){
            string = '';
            input.value = string;
            result.value = string;
            isResult = false;
        }
        else if (e.target.innerHTML == '+') {
            let str = string.slice(-1);
            if (operators.includes(str)&&string.length == 1) {
                let str2 = string.slice(-2,-1);
                if(operators.includes(str2)){
                    string = string.slice(0, -2);
                } else{
                    string = string.slice(0, -1);
                }
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
            if (operators.includes(str)) {
                let str2 = string.slice(-2,-1);
                if (operators.includes(str2)){
                    string = string.slice(0, -2);
                } else{
                    string = string.slice(0, -1);
                }
            }

            string += e.target.innerHTML;
            input.value = string;
        }
        else if (e.target.innerHTML == '/') {
            let str = string.slice(-1);
            if (operators.includes(str)) {
                let str2 = string.slice(-2,-1);
                if(operators.includes(str2)){
                    string = string.slice(0, -2);
                } else{
                    string = string.slice(0, -1);
                }
            }
            string += e.target.innerHTML;
            input.value = string;
        }
        else if (e.target.innerHTML == '%') {
            let str = string.slice(-1);
            if (operators.includes(str)) {
                let str2 = string.slice(-2,-1);
                if(operators.includes(str2)){
                    string = string.slice(0, -2);
                } else{
                    string = string.slice(0, -1);
                }
            }
            string += e.target.innerHTML;
            input.value = string;
        }
        else if (e.target.innerHTML == '.') {
            let str3 = string.slice(-1);
            let parts = string.split(/[\+\-\*\/]/);
            let lastNumber = parts[parts.length - 1];
            if (lastNumber.includes('.')) {
                return;
            }
            else if(operators.includes(str3)){
                string+=0;
            }
            string+=e.target.innerHTML;
            input.value = string;
        }
        else if (e.target.innerHTML == '=') {
            function evaluateExpression(expression) {
                expression = expression.replace(/\d+/g, function (match) {
                    return parseInt(match, 10);
                });
                let exp = eval(expression);
                exp = parseFloat(exp.toFixed(13))
                return exp;
            }
            res = evaluateExpression(string);
            result.value = res;
            isResult = true;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
            result.value = string;
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
