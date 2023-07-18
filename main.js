function add(a, b) {
	return +a + +b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
  return a*b;
};

function divide(a,b) {
    return a/b;
};

let arg1;
let operator; //options are add, subtract, multiply, divide. NOT strings.
let arg2;
let countOperatorClicks = 0;
let subTotal;
let operatorPrior;

function operate (arg1, operator, arg2){
    return operator(arg1, arg2);
}


const display = document.querySelector("#display");
let displayValue = "";

const clearButton = document.querySelector("#clear")
clearButton.addEventListener('click',() => {
  displayValue = '';
  display.textContent = displayValue;
  arg1 = '';
  arg2 = '';
  operator = '';
  console.log(`arg1 is: ${arg1}`);
  console.log(`arg2 is: ${arg2}`);
  console.log(`operator is: ${operator}`); 
})

const buttons = document.querySelectorAll(".number");
buttons.forEach((button)=>{
  button.addEventListener('click',() => {
    displayValue += button.textContent;
    display.textContent = displayValue;
  })
})

const buttonsOperators = document.querySelectorAll(".operator");
buttonsOperators.forEach((opButton)=>{
  opButton.addEventListener('click',() => {
    countOperatorClicks++;
    console.log(`countOperatorClicks is: ${countOperatorClicks}`);  
    operator = opButton.id;
    console.log(`operator is: ${operator}`);   
    
    if (countOperatorClicks === 1) {
      arg1 = displayValue;
      console.log(`arg1 is: ${arg1}`);
      
    }
    else if (countOperatorClicks > 1) {
      arg2 = displayValue;
      console.log(`arg2 is: ${arg2}`);
      let functionObj = window[operatorPrior]; //turns operator (a string) into an object that can be passed as a function name
      subTotal = operate (arg1, functionObj, arg2);
      display.textContent = subTotal;
      arg1 = subTotal;
      console.log(`subTotal arg1 is: ${arg1}`);
      arg2 = '';
      console.log(`null arg2 is: ${arg2}`);
    }

    displayValue = '';
    operatorPrior = operator;
  
  })
})


const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener('click', () => {
  arg2 = displayValue;
  console.log(`arg2 is: ${arg2}`);
  let functionObj = window[operator]; //turns operator (a string) into an object that can be passed as a function name
  displayValue = operate (arg1, functionObj, arg2);
  display.textContent = displayValue;
  displayValue = '';
  arg1 = '';
  arg2 = '';
  operator = '';
  countOperatorClicks = 0;
})


