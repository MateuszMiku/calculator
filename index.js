document.addEventListener('DOMContentLoaded', function () {
  let firstNumber;
  let secondNumber;
  let operator;
  const display = document.querySelector('.display');
  const numbers = Array.from(document.getElementsByClassName('number'));
  const addition = document.getElementById('add');
  const subtraction = document.getElementById('subtract');
  const division = document.getElementById('divide');
  const multiplication = document.getElementById('multiply');
  const clearButton = document.getElementById('clear');
  const deleteButton = document.getElementById('delete');
  const equalsButton = document.querySelector('.equals');
  const commaButton = document.getElementById('comma');

  function operate(x, operator, y) {
    switch (operator) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '/':
        return y !== 0 ? x / y : 'ej kurwa';
      default:
        return 'Error';
    }
  }

  numbers.forEach(num => num.addEventListener('click', function () {
    display.innerHTML += this.innerHTML;
  }));

  function handleOperatorClick(selectedOperator) {
    if (operator == null) {
      firstNumber = parseFloat(display.innerHTML);
      operator = selectedOperator;
      display.innerHTML += selectedOperator;
    }
  }

  addition.addEventListener('click', function () {
    handleOperatorClick('+');
  });

  subtraction.addEventListener('click', function () {
    handleOperatorClick('-');
  });

  multiplication.addEventListener('click', function () {
    handleOperatorClick('*');
  });

  division.addEventListener('click', function () {
    handleOperatorClick('/');
  });

  clearButton.addEventListener('click', function () {
    display.innerHTML = '';
    firstNumber = null;
    operator = null;
    secondNumber = null;
  });

  deleteButton.addEventListener('click', function () {
    if (display.innerHTML.length > 1 && display.innerHTML !== '0') {
      display.innerHTML = display.innerHTML.slice(0, -1);
    } else {
      display.innerHTML = '';
    }
  });

  equalsButton.addEventListener('click', function () {
    if (operator !== null) {
      const operatorIndex = display.innerHTML.indexOf(operator);
      secondNumber = parseFloat(display.innerHTML.slice(operatorIndex + 1));
      const result = operate(firstNumber, operator, secondNumber);
      display.innerHTML = result;
      firstNumber = result;
      operator = null;
      secondNumber = null;
    }
  });

  commaButton.addEventListener('click', function () {
    if (!display.innerHTML.includes('.')) {
      display.innerHTML += '.';
    } else if (display.innerHTML.includes('.') && operator != null) {
      display.innerHTML += '.';
    }
  });

  document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (!isNaN(key) || key == '.') {
      display.innerHTML += key;
    } else if (key == 'Enter') {
      equalsButton.click();
    } else if (key == 'Backspace') {
      deleteButton.click();
    } else if (key == 'Escape') {
      clearButton.click();
    } else if (['+', '-', '*', '/'].includes(key)) {
      handleOperatorClick(key);
    }
  });
});
