let sumAll = function () {
    let result = 0;
    for (i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result
}

let sum = function (a, b) {
    return a + b;
}

let subtractAll = function (a) {
    let result = a;
    for (i = 1; i < arguments.length; i++) {
        result -= arguments[i];
    }
    return result;
}

let subtract = function (a, b) {
    return a - b;
}

let multiplyAll = function () {
    let result = 1;
    for (i = 0; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
}

let multiply = function (a, b) {
    return a * b;
}

let divideAll = function (a) {
    let result = a;
    for (i = 1; i < arguments.length; i++) {
        result /= arguments[i];
    }
    return result;
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