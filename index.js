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

let myCalculatorAll = function (operator, a) {
    let arr = [];
    console.log(arr);
    for (i = 1; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    console.log(arr);

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