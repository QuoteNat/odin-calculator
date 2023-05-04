function buttonClick(e) {
    console.log(e.currentTarget.dataset.value);
}

const buttons = document.querySelectorAll(".calculator-button");

for (const button of buttons) {
    button.addEventListener("click", buttonClick);
}