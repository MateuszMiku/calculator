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

const addition = document.getElementById('add');
const subtraction = document.getElementById('subtract');
const division = document.getElementById('divide');
const multiplication = document.getElementById('multiply');

//displaying and storing numbers
numbers.forEach(num => num.addEventListener('click', function() {
    display.innerHTML += this.innerHTML;
    let displayValue = parseInt(display.innerHTML);
    console.log(displayValue);

    addition.addEventListener('click', function() {
      firstNumber = displayValue;
      operator = "+";
      if (display.innerHTML.includes("+")){
        return;
      } else {
        display.innerHTML += "+";
      }})
}));






// Clear button
const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', function() {
    display.innerHTML = null;
});

// Delete button
const deleteButton = document.getElementById('delete');

deleteButton.addEventListener('click', function(){

  let displayValue

    if (display.innerHTML.length > 1 && display.innerHTML !== 0) {
        displayValue = parseInt(display.innerHTML.slice(0, -1));
        display.innerHTML = displayValue;
        console.log(displayValue);
    } else {
        displayValue = 0;
        display.innerHTML = null;
        console.log(displayValue);
    }
});

// Equals button
const equalsButton = document.getElementsByClassName('equals');
equalsButton.addEventListener('click', function(firstNumber, operator, secondNumber) {
  let result = operate(firstNumber, operator, secondNumber);
  console.log(result)
}
)



