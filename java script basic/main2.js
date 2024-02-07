
let num1 = 20; 
let num2 = 10;  
let result; 
  

let operation = '*'; 
switch (operation) { 
    case "+": 
        result = (num1+ num2); 
        break; 
    case "-": 
        result =(num1- num2); 
        break; 
    case "*": 
        result = (num1* num2); 
        break; 
    case "/": 
        result = (num1 /num2); 
        break; 
    case "%":
        result = (num1 % num2);
        break;
    default: 
        result = "Invalid operation"; 
} 
console.log(" "+ result);