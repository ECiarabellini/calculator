function add(a, b) {
	return a + b;
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

let var1;
let operator; //options are add, subtract, multiply, divide. NOT strings.
let var2;

function operate (var1, operator, var2){
    return operator(var1, var2);
}

console.log(operate(1, multiply, 2));