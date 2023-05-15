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

}

function buttonClick(e) {
    let input = e.currentTarget.dataset.value;
    console.log(input);
    if (input === "clear") {
        clear();
    } else if (input === "=") {
        evaluate();
    } else if (NUMS.includes(input)) {
        if (state === "lhs") {
            lhs += input;
            console.log("LHS=" + lhs);
        } else {
            rhs += input;
            console.log("RHS=" + rhs);
        }
    }
}

const buttons = document.querySelectorAll(".calculator-button");

for (const button of buttons) {
    button.addEventListener("click", buttonClick);
}