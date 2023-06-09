let lhs = "";
let rhs = "";
let operator = "";
let state = "lhs";
const NUMS = "1234567890".split("");
const OPERATORS = "+-X/".split("");

function clear() {
    lhs = "";
    rhs = "";
    operator = "";
    state = "lhs";
}

// evaluate the entered expression
function evaluate() {
    let left = 0;
    let right = 0;
    // prevent empty values by defaulting to 0
    if (lhs !== "") {
        left = parseFloat(lhs);
    }
    if (rhs !== "") {
        right = parseFloat(rhs);
    }
    
    switch (operator) {
        case "+":
            lhs = left + right;
            break;
        case "-":
            lhs = left - right;
            break;
        case "X":
            lhs = left * right;
            break;
        case "/":
            if (right === 0) {
                lhs = "Reality is now null and avoid, or approaching infinity."
                rhs = "Reality is now null and avoid, or approaching infinity."
                display();
                clear();
                return 0;
            }
            lhs = left / right;
            break;            
    }

    state = "lhs";
    /**
     * Round lhs to 8 decimal points with padding, 
     * then remove padding, and then convert back to string.
     */
    lhs = parseFloat(lhs.toFixed(8)).toString();
}

function display() {
    const displayElement = document.querySelector("#display");
    if (state === "lhs") {
        displayElement.textContent = lhs;
    } else {
        displayElement.textContent = rhs;
    }
}

function buttonClick(e) {
    let input = e.currentTarget.dataset.value;
    if (input === "clear") {
        clear();
    } else if (input === "=") {
        let err = evaluate();
        if (err === 0) {
            return 0;
        }
    } else if (NUMS.includes(input)) {
        if (state === "lhs") {
            lhs += input;
        } else {
            rhs += input;
        }
    } else if (OPERATORS.includes(input)) {
        if (state === "lhs") {
            operator = input;
            rhs = "";
            state = "rhs";
        } else {
            // evaluate if rhs
            if (evaluate() === 0) {
                return 0;
            } else {
                operator = input;
                rhs = "";
            }
            display();
            state = "rhs";
            return 0;
        }
    }

    display();
}

const buttons = document.querySelectorAll(".calculator-button");

for (const button of buttons) {
    button.addEventListener("click", buttonClick);
}