let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let resultDisplay = document.getElementById("result");

function add() {
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value);
  let result = num1 + num2;
  resultDisplay.textContent = result;
}

function subtract() {
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value);
  let result = num1 - num2;
  resultDisplay.textContent = result;
}

function multiply() {
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value);
  let result = num1 * num2;
  resultDisplay.textContent = result;
}

function divide() {
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value);
  if (num2 === 0) {
    resultDisplay.textContent = "Cannot divide by zero";
  } else {
    let result = num1 / num2;
    resultDisplay.textContent = result;
  }
}

function clearOutput() {
  resultDisplay.textContent = "00";
  num1Input.value = "";
  num2Input.value = "";
}
