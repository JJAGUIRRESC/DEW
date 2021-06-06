class Calculator extends Window {
    constructor(options = {}) {
        super(options);
        this.setTitle("Calculadora");
        this.createDisplay();
        this.createBodyButtons();

        this.display.textContent = "0";
        this.firstNumber = "";
        this.secondNumber = "";
        this.resultNumber = "";
        this.fillFirstNumber = false;
        this.selectedOperator = null;
    }

    managePressedKey(event) {

        if (event.target.classList.contains("number")) {
            this.addNumber(event.target.value);
            return;
        }

        if (event.target.classList.contains("operator")) {
            this.addOperator(event.target.value);
            return;
        }

        if (event.target.classList.contains("decimal")) {
            this.addDecimal();
            return;
        }

        if (event.target.classList.contains("clear")) {
            this.clearDisplay();
            return;
        }

        if (event.target.classList.contains("result")) {
            this.calculateOperation();
            return;
        }
    }

    addNumber(number) {

        // If not operator selected, then is the first number to operate
        if (this.selectedOperator === null) {
            this.fillFirstNumber = true;
        } else {
            this.fillFirstNumber = false;
        }

        // Prevent to write consecutive zeros if not other numbers before
        if (this.display.innerHTML === "0" && number === "0") {
            if (this.fillFirstNumber) {
                this.firstNumber = "0";
                this.display.textContent = this.firstNumber;
            } else {
                this.secondNumber = "0";
                this.display.textContent = this.secondNumber;
            }
            return;
        }

        // Prevent to write a zero and then other number
        if (this.display.innerHTML === "0" && number != "0") {
            if (this.fillFirstNumber) {
                this.firstNumber = "";
            } else {
                this.secondNumber = "";
            }
        }

        if (this.fillFirstNumber) {
            this.firstNumber += number;
            this.display.textContent = this.firstNumber;
        } else {
            this.secondNumber += number;
            this.display.textContent = this.secondNumber;
        }

    }

    addDecimal() {

        // Prevent to write more than 1 decimal dot
        if (this.display.innerHTML.includes(".")) {
            return;
        }

        // Prevent to write a dot if not number before
        if (this.fillFirstNumber) {
            if (this.firstNumber === "") {
                return;
            } else {
                this.firstNumber += ".";
                this.display.textContent = this.firstNumber;
            }

        } else {
            if (this.secondNumber === "") {
                return;
            } else {
                this.secondNumber += ".";
                this.display.textContent = this.secondNumber;
            }
        }
    }

    addOperator(operator) {

        // Allow to do consecutive operations by clicking the operator key
        if (this.selectedOperator != null) {
            this.calculateOperation();
        }

        switch (operator) {
            case "+":
                this.selectedOperator = "+";
                break;
            case "-":
                this.selectedOperator = "-";
                break;
            case "*":
                this.selectedOperator = "*";
                break;
            case "/":
                this.selectedOperator = "/";
                break;
        }

        this.display.textContent = "";

    }

    calculateOperation() {
        let firstFloatNumber = parseFloat(this.firstNumber);
        let secondFloatNumber = parseFloat(this.secondNumber);

        switch (this.selectedOperator) {
            case "+":
                this.resultNumber = firstFloatNumber + secondFloatNumber;
                break;
            case "-":
                this.resultNumber = firstFloatNumber - secondFloatNumber;
                break;
            case "*":
                this.resultNumber = firstFloatNumber * secondFloatNumber;
                break;
            case "/":
                this.resultNumber = firstFloatNumber / secondFloatNumber;
                break;
        }

        // Show the final result
        this.display.textContent = this.resultNumber;

        this.firstNumber = this.display.textContent;
        this.secondNumber = "";
        this.selectedOperator = null;
    }

    clearDisplay() {
        this.display.textContent = "0";
        this.firstNumber = "";
        this.secondNumber = "";
        this.resultNumber = "";
        this.fillFirstNumber = false;
        this.selectedOperator = null;
    }

    createDisplay() {
        this.display = document.createElement('div');
        this.display.classList.add("display");
        this.display.id = "display";
        this.mainWindow.appendChild(this.display);
    }

    createBodyButtons() {
        this.bodyButtons = document.createElement('div');
        this.bodyButtons.classList.add("body-numbers");
        this.bodyButtons.id = "body-numbers";

        // Create the buttons in order for the grid
        // Row 1
        let btnDiv = document.createElement("button");
        btnDiv.innerHTML = "/";
        btnDiv.value = "/";
        btnDiv.classList.add("operator");
        btnDiv.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btnDiv);

        let btnMul = document.createElement("button");
        btnMul.innerHTML = "x";
        btnMul.value = "*";
        btnMul.classList.add("operator");
        btnMul.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btnMul);

        let btnSub = document.createElement("button");
        btnSub.innerHTML = "-";
        btnSub.value = "-";
        btnSub.classList.add("operator");
        btnSub.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btnSub);

        let btnSum = document.createElement("button");
        btnSum.innerHTML = "+";
        btnSum.value = "+";
        btnSum.classList.add("operator");
        btnSum.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btnSum);

        // Row 2
        let btn7 = document.createElement("button");
        btn7.innerHTML = "7";
        btn7.value = "7";
        btn7.classList.add("number");
        btn7.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btn7);

        let btn8 = document.createElement("button");
        btn8.innerHTML = "8";
        btn8.value = "8";
        btn8.classList.add("number");
        btn8.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btn8);

        let btn9 = document.createElement("button");
        btn9.innerHTML = "9";
        btn9.value = "9";
        btn9.classList.add("number");
        btn9.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btn9);

        let btnResult = document.createElement("button");
        btnResult.innerHTML = "=";
        btnResult.value = "=";
        btnResult.classList.add("result");
        btnResult.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btnResult);

        // Row 3
        let btn4 = document.createElement("button");
        btn4.innerHTML = "4";
        btn4.value = "4";
        btn4.classList.add("number");
        btn4.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btn4);

        let btn5 = document.createElement("button");
        btn5.innerHTML = "5";
        btn5.value = "5";
        btn5.classList.add("number");
        btn5.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btn5);

        let btn6 = document.createElement("button");
        btn6.innerHTML = "6";
        btn6.value = "6";
        btn6.classList.add("number");
        btn6.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btn6);

        // Row 4
        let btn1 = document.createElement("button");
        btn1.innerHTML = "1";
        btn1.value = "1";
        btn1.classList.add("number");
        btn1.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btn1);

        let btn2 = document.createElement("button");
        btn2.innerHTML = "2";
        btn2.value = "2";
        btn2.classList.add("number");
        btn2.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btn2);

        let btn3 = document.createElement("button");
        btn3.innerHTML = "3";
        btn3.value = "3";
        btn3.classList.add("number");
        btn3.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btn3);

        // Row 5
        let btn0 = document.createElement("button");
        btn0.innerHTML = "0";
        btn0.value = "0";
        btn0.classList.add("number");
        btn0.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btn0);

        let btnDecimal = document.createElement("button");
        btnDecimal.innerHTML = ".";
        btnDecimal.value = ".";
        btnDecimal.classList.add("decimal");
        btnDecimal.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btnDecimal);

        let btnClear = document.createElement("button");
        btnClear.innerHTML = "C";
        btnClear.value = "C";
        btnClear.classList.add("clear");
        btnClear.addEventListener('click', (e) => { this.managePressedKey(e); });
        this.bodyButtons.appendChild(btnClear);

        this.mainWindow.appendChild(this.bodyButtons);
    }

}