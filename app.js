var display = document.getElementById("display");

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function addToDisplay(input){
    if (!(isOperator(input) && isOperator(display.value.charAt(display.value.length - 1)))) {
        display.value += input;
    }
}

function clearDisplay(){
    display.value = "";

}

function calculate(){
    display.value = eval(display.value);
}