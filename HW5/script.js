function circle(radius) {
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

function average(firstNumber, secondNumber) {
    function getAverage(firstNumber, secondNumber) {
        let average = (firstNumber + secondNumber) / 2;
        return average;
    }

    console.log(getAverage(firstNumber, secondNumber));
}

function calculate(x, y, action) {
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

circle(5);
average(5, 7);
calculate(5, 2, '-');