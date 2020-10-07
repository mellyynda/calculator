//simple calculator solution, not used
let sum = function (a, b) {
    return a + b;
}

let subtract = function (a, b) {
    return a - b;
}

let multiply = function (a, b) {
    return a * b;
}

let divide = function (a, b) {
    return a / b;
}

let myCalculator = function (myStr, a, b) {
    if (myStr != "add" || myStr != "subtract" || myStr != "multiply" || myStr != "divide") {
        console.log("You must enter one of the following values for the first parameter: \"add\", \"subtract\", \"multiply\" or \"divide\". ");
    }
    switch (myStr) {
        case "add":
            return sum(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }
}




//more complex calculator solution trying to use

//small operator functions with no parametre limit
let sumAll = function () {
    let result = 0;
    for (i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result
}

let subtractAll = function (a) {
    let result = a;
    for (i = 1; i < arguments.length; i++) {
        result -= arguments[i];
    }
    return result;
}

let multiplyAll = function () {
    let result = 1;
    for (i = 0; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
}

let divideAll = function (a) {
    let result = a;
    for (i = 1; i < arguments.length; i++) {
        result /= arguments[i];
    }
    return result;
}

//calculator function with no limit of parameters
let myCalculatorAll = function (operator, a) {
    let arr = [];
    // console.log(arr);
    for (i = 1; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    // console.log(arr);

    switch (operator) {
        case "add":
            return sumAll(...arr);
        case "subtract":
            return subtractAll(...arr);
        case "multiply":
            return multiplyAll(...arr);
        case "divide":
            return divideAll(...arr);
    }
}
//initialize arguments string and argument numbers
let input = [];
let num = "";

// grab screen, grab number buttons and decide onclick action
// let zero = document.querySelector('body > div > button:nth-child(14)');
// let one = document.querySelector('body > div > button:nth-child(10)');
// let two = document.querySelector('body > div > button:nth-child(11)');
// let three = document.querySelector('body > div > button:nth-child(12)');
// let four = document.querySelector('body > div > button:nth-child(6)');
// let five = document.querySelector('body > div > button:nth-child(7)');
// let six = document.querySelector('body > div > button:nth-child(8)');
// let seven = document.querySelector('body > div > button:nth-child(2)');
// let eight = document.querySelector('body > div > button:nth-child(3)');
// let nine = document.querySelector('body > div > button:nth-child(4)');

let screen = document.querySelector('body > div > div');


let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {

    number.addEventListener('click', function () {
        if (num < 921458621) {
            num += number.value;

            let n = Number(number.value);

            screen.innerHTML += n;
        } else alert('Your number is too high, please refresh the page and select a lower number');
    });

});

console.log(num);

let operators = document.querySelectorAll('.operator');
operators.forEach(operator => {

    operator.addEventListener('click', function () {
        console.log("clicked operator")
        console.log(typeof input[0] == 'string');

        if (typeof input[0] !== 'string') {
            input.push(operator.value);
            console.log(input);
        }
        if (input[0] !== operator.value) {
            alert('Press equal to use a new operator');
        } else {
            input.push(Number(num));
            num = "";
            console.log(input);
            screen.innerHTML += operator.innerHTML;
        }

    });

});

let equal = document.querySelector('.equal');

equal.onclick = function () {
    input.push(Number(num));

    console.log(input);
    screen.innerHTML = myCalculatorAll(...input);
    num = myCalculatorAll(...input);
    input = [];
}

let clear = document.querySelector('body > div > button.clear')

clear.onclick = function () {
    input = [];
    num = "";
    screen.innerHTML = "";
}