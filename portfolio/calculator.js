const screen = document.querySelector("#screen");
let firstNumber;
let secondNumber;
let given = 0;
let answer;
let sum, difference, product, quotient;
let operation;
let temp = 0;

function input(input){
    switch(input){
        case '+':
            operation = '+';
            storeFirstNum();
            addition();
            break;
        case '-':
            operation = '-';
            storeFirstNum();
            subtraction();
            break;
        case '/':
            operation = '/';
            storeFirstNum();
            division();
            break;
        case '*':
            operation = '*';
            storeFirstNum();
            multiplication();
            break;
        case 'enter':
            storeSecondNum();
            showResult(operation);
            break;
        default:
            numberInput(input);
    }
}

function numberInput(input){
    temp = temp * 10 + input
    screen.textContent = temp
}

function storeFirstNum(){
    firstNumber = temp;
    temp = 0;
    screen.textContent = temp
    console.log('First Number: ' + firstNumber);
}

function storeSecondNum(){
    secondNumber = temp;
    console.log('Second Number: ' + secondNumber);
}

function addition(){
    sum = firstNumber + secondNumber;
    return sum;
}
function subtraction(){
    difference = firstNumber - secondNumber;
    return difference;
}
function multiplication(){
    product = firstNumber * secondNumber;
    return product;
}
function division(){
    quotient = firstNumber / secondNumber;
    return quotient;
}

function showResult(operation){
    switch(operation){
        case '+':
            answer = addition();
            screen.textContent = answer;
            break;
        case '-':
            answer = subtraction();
            screen.textContent = answer;
            break;
        case '/':
            answer = division();
            screen.textContent = answer;
            break;
        case '*':
            answer = multiplication();
            screen.textContent = answer;
            break;
        default:
            console.log('Incorrect Input.')
    }
    console.log('Answer: ' + answer);
    temp = answer;
    console.log('New First Number: ' + temp);
}