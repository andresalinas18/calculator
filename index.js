// Create variables
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let waitingForSecondOperand = false;

// call variablesfrom the HTML
const display = document.querySelector('.display');
const buttons = document.querySelectorAll(".pad button");

// logic of each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
   const value = button.textContent;
   
  
   if (value === "c") {
   display.textContent = "";
   firstOperand = null;
   secondOperand = null;
   currentOperator = null;
   waitingForSecondOperand = false;
  }

  else if (value === "="){
    if (firstOperand !== null && currentOperator && !waitingForSecondOperand){
      secondOperand = parseFloat(display.textContent);
      const result = operate(currentOperator, firstOperand, secondOperand);
      display.textContent = result;
      currentOperator = null;
      waitingForSecondOperand = true;
  };
  }

  else if (["+", "-", "*", "/"].includes(value)) {
    
    if (firstOperand === null) {
      firstOperand = parseFloat(display.textContent);
      currentOperator = value;
      waitingForSecondOperand = true;
  
    
    } else if (!waitingForSecondOperand) {
      secondOperand = parseFloat(display.textContent);
      const result = operate(currentOperator, firstOperand, secondOperand);
      display.textContent = result;
  
      firstOperand = result;
      currentOperator = value;
      waitingForSecondOperand = true;
    } else {
      
      currentOperator = value;
    }
  }
  

     else {
      if(waitingForSecondOperand) {
        display.textContent = value;
        waitingForSecondOperand = false;
        
      } else {
        display.textContent +=value;
      };      
    }
  });
});

// create operand functions

function operate(operator, a, b){
  if (operator === "+"){return add(a,b) };
  if (operator === "-"){return substract(a,b) };
  if (operator === "/"){return divide(a,b) };
  if (operator === "*"){return multiply(a,b) }

};

function add(a,b){
  const c = a + b ;
  return c;
};

function substract(a,b){
  const c = a - b;
  return c;
};

function divide(a,b){
  const c = a / b;
  if (b === 0){ 
    return "Divisions by zero is undefined" 
  } else {
    return c;
  };
};

function multiply(a,b){
  const c = a * b;
  return c;
};  