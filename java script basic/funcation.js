
//function declaration

/*function calculator(x,y){

var answer = "-";
if (answer == '+') {
    console.log(x + y);
}
else if (answer == '-') {
    console.log(x - y);
}
else if (answer == '/') {
    console.log(x / y);
}
else if (answer == '*') {
    console.log(x * y);
}
else if (answer == '%') {
    console.log(x % y);
}
else {
    console.log("invalid")
}
}
calculator (10 , 20)*/


// funcation in the switch case

/*function calculator(operation, operand1, operand2) {
    switch (operation) {
      case 'add':
        return operand1 + operand2;
      case 'subtract':
        return operand1 - operand2;
      case 'multiply':
        return operand1 * operand2;
      case 'divide':
        return operand1 /operand2;
        case 'module':
          return operand1 % operand2;
    }
  }

var result = calculator('divide',10,2);
console.log(result);*/

// arrow funcation

/*const calculator = (operation, operand1, operand2) =>{
  switch (operation) {
    case 'add':
      return operand1 + operand2;
    case 'subtract':
      return operand1 - operand2;
    case 'multiply':
      return operand1 * operand2;
    case 'divide':
     return operand1 / operand2;
    case 'modul':
      return operand1 % operand2 ;
  }
}

var result = calculator('module',10,2);
console.log(result);*/




 // anonymous funcation
let  calculator =function (operation, operand1, operand2){
   switch (operation) {
    case 'add':
      return operand1 + operand2;
    case 'subtract':
      return operand1 - operand2;
    case 'multiply':
      return operand1 * operand2;
    case 'divide':
     return operand1 / operand2;
    case 'modul':
      return operand1 % operand2 ;
  }
}

var result = calculator('divide',10,2);
console.log(result);





// anonymous function in the loop

/*let calculator = function (operation, operand1, operand2){
  if (operation == '+'){
    console.log (operand1 + operand2);
  }
  else if (operation == '-'){
    console.log(operand1 - operand2);
  }
  else if (operation == '*'){
    console.log (operand1 * operand2);
  }
  else if (operation == '/'){
    console.log (operand1 /operand2);
  }
  else if (operation == '%'){
    console.log (operand1 % operand2);
  }
  else {
    console.log(" enter the value")
  }
}

var result = calculator('%',10,2);
console.log(result);*/


// arrow function in the loop

/*const calculator = (operation, operand1, operand2) =>{
  if (operation == '+'){
    console.log (operand1 + operand2);
  }
  else if (operation == '-'){
    console.log(operand1 - operand2);
  }
  else if (operation == '*'){
    console.log (operand1 * operand2);
  }
  else if (operation == '/'){
    console.log (operand1 /operand2);
  }
  else if (operation == '%'){
    console.log (operand1 % operand2);
  }
  else {
    console.log(" enter the value")
  }
}

var result = calculator('%',10,2);
console.log(result);*/




// function in the loop

function calculator1(operation, operand1, operand2) {
  if (operation == '+'){
    console.log (operand1 + operand2);
  }
  else if (operation == '-'){
    console.log(operand1 - operand2);
  }
  else if (operation == '*'){
    console.log (operand1 * operand2);
  }
  else if (operation == '/'){
    console.log (operand1 /operand2);
  }
  else if (operation == '%'){
    console.log (operand1 % operand2);
  }
  else {
    console.log(" enter the value");
  }
}

calculator1('+',10,2);