const num1 = 5;
const num2 = 10;

// Function to calculate the sum
function addValues() {
    console.log(`the sum is: ${num1 + num2}`)
}

// Function to calculate the difference

function subtractValues() {
    console.log(`the difference is: ${num1 - num2}`)
}

// Function to calculate the product

function multiplyValues() {
    console.log(`the product is: ${num1 * num2}`)
}

// Function to calculate the quotient

function divideValues() {
    if (num2 !== 0) {
        console.log(`the quotient is: ${num1 / num2}`)
    } else {
        console.log("Cannot divide by zero")
    }
}

// Function to calculate the remainder

function remainderValues() {
    if (num2 !== 0) {
        console.log(`the remainder is: ${num1 % num2}`)
    } else {
        console.log("Cannot calculate remainder of zero")
    }
}
addValues()

subtractValues()

multiplyValues()

divideValues()

remainderValues()