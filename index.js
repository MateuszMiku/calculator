const subtract = function(x, y) {
	return x - y;
};

const sum = function(x, y) {
  return x + y;
};

const divide = function(x, y) {
    return x / y;
};

const multiply = function(x, y) {
  return x * y;
};


let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, operator, secondNumber) {
  if (operator == "+") {
     return sum(firstNumber, secondNumber)
  } else if (operator == "-") {
     return subtract(firstNumber, secondNumber)
  } else if (operator == "/") {
     return divide(firstNumber, secondNumber)
  } else if (operator == "*") {
     return multiply(firstNumber, secondNumber)
  }
}

let numbers = Array.from(document.getElementsByClassName('number'));
let display = document.querySelector('.display');


numbers.forEach(num => num.addEventListener('click', function() {
    display.innerHTML += this.innerHTML;
    let displayValue = parseInt(display.innerHTML);
    console.log(displayValue)
}))


