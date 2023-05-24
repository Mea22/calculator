
let expression = '';
let resultElement = document.getElementById('screen');
let onScreen = ""

//this function takes number from button and puts it on screen
function appendNumber(number) {
    expression += number;
    onScreen = expression;
    resultElement.value = onScreen;
    console.log(onScreen)
    console.log(expression)
}
//this function takes operator from button and puts it on screen
function performOperation(operator) {
    if (expression !== '') {
        console.log(expression)
        expression += operator;
        onScreen = operator;
        resultElement.value = onScreen;
        onScreen = ""
  }
}
//this function makes calculation
function calculate() {
  if (expression !== '') {
    try {
      const result = eval(expression);
      resultElement.value = result.toFixed(5);
      expression = result;
    } catch (error) {
      resultElement.value = 'Error';
    }
  }
}
//this function resets calculator
function clearCalculator() {
    expression = "";
    onScreen = "";
    resultElement.value = "";

}
//this function makes del button
function deleteLastCharacter() {
    if(typeof expression === "string"){
        expression = expression.slice(0, -1);
        onScreen = onScreen.slice(0, -1);
        resultElement.value = onScreen;
    }
}
