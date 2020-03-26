function random() {
    let number = Math.floor(Math.random() * 11);
    console.log(number);

    let userNumber = prompt("Попробуй угадай! \n Введи число от 0 до 10");
    if (+userNumber === number) alert("ok");

    while (+userNumber !== number) {
        if (userNumber === null) break;
        userNumber = prompt("lol");
        if (+userNumber === number) alert("ok");
    }
}

// random();

function drawTriangle() {
    let num = prompt("Введите число");
    let point = "";
    let triangle;

    for (let i = 1; i <= num; i++) {
        triangle = point += "*";
        console.log(triangle);
    }
}

// drawTriangle()

function drawTriangleSecond() {
    let num = prompt("Введите число");
    let star = "*";
    let space = "\n";
    let line = "";
    let triangle = "";

    for (let i = 0; i < num; i++) {
        line += star;
        triangle += line + space;
    }
    console.log(triangle);
}

// drawTriangleSecond();