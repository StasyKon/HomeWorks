function circle() {
    let radius = +prompt("Введите радиус");

    function getArea(radius) {
        let area = Math.PI * radius ** 2;
        return area;
    }

    function getCircumference(radius) {
        let length = Math.PI * radius * 2;
        return length;
    }

    console.log(getArea(radius));
    console.log(getCircumference(radius));
}

function average() {
    let firstNumber = +prompt("Введите первое число");
    let secondNumber = +prompt("Введите второе число");

    function getAverage(firstNumber, secondNumber) {
        let average = (firstNumber + secondNumber) / 2;
        return average;
    }

    console.log(getAverage(firstNumber, secondNumber));
}

function calculate() {
    let x = +prompt("Введите первое число");
    let y = +prompt("Введите второе число");
    let action = prompt("Введите действие");

    function calc(x, y, action) {
        let total;
        switch (action) {
            case "+":
                total = x + y;
                break;
            case "-":
                total = x - y;
                break;
            case "*":
                total = x * y;
                break;
            case "/":
                total = x / y;
                break;
            default:
                alert("Что-то пошло не так");
        }
        return total;
    }

    console.log(calc(x, y, action));
}

// circle();
// average();
// calculate();