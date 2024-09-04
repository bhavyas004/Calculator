let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
       if(e.target.innerHTML == '='){
        function validateAndSanitizeInput(input) {
            if (input.includes('//')) {
                return "Error in expression";
            }
            input = input.replace(/[^0-9+\-*/.()%]/g, '');
            input = input.replace(/\b0+(\d)/g, '$1');
        
            return input;
        }
        
        function calculate(expression) {
            let sanitizedExpression = validateAndSanitizeInput(expression);
            
            try {
                let result = eval(sanitizedExpression);
                return result;
            } catch (e) {
                return "Error in expression";
            }
        }
        string = calculate(string);
        input.value = string;
       } 
       else if(e.target.innerHTML == "AC"){
        string = "";
        input.value = string;
       }
       else if(e.target.innerHTML == "DEL"){
        string = string.substring(0,string.length - 1);
        input.value = string;
       }
       else{
        string += e.target.innerHTML;
        input.value = string;
       }
    })
})