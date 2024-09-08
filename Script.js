let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
let operators = ['+','-','*','/','%'];
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '+'){
            let str = string.slice(-1);
            if(operators.includes(str)){
                string = string.slice(0,-1);
            } 
            string += e.target.innerHTML;
            input.value = string;
        }
        else if(e.target.innerHTML == '-'){
            let str = string.slice(-1);
            if(str=='+'||str=='-'){
                string = string.slice(0,-1);
            }
            string += e.target.innerHTML;
            input.value = string;
        }
        else if(e.target.innerHTML == '*'){
            let str = string.slice(-1);
            if(operators.includes(str) && str != '*'){
                string = string.slice(0,-1);
            } 
            string += e.target.innerHTML;
            input.value = string;
        }
        else if(e.target.innerHTML == '/'){
            let str = string.slice(-1);
            if(operators.includes(str)){
                string = string.slice(0,-1);
            } 
            string += e.target.innerHTML;
            input.value = string;
        }
        else if(e.target.innerHTML == '%'){
            let str = string.slice(-1);
            if(operators.includes(str)){
                string = string.slice(0,-1);
            } 
            string += e.target.innerHTML;
            input.value = string;
        }
       else if(e.target.innerHTML == '='){
        string = eval(string);
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
