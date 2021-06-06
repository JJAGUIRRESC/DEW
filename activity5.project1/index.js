/* Adds a button to create new calculators */

let btnCreateCalculator = document.createElement("button");
btnCreateCalculator.innerText = "Crear calculadora";
btnCreateCalculator.id = "btn-create-calculator";

btnCreateCalculator.addEventListener("click", function () {
    let options = {height:400, width:300, posX:600, posY:200};
    
    let calculator = new Calculator(options);
    calculator.setTitle("Calculadora");
});

document.body.appendChild(btnCreateCalculator);