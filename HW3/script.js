let name = prompt("Ваше имя");
let age = +prompt("Сколько Вам лет?");
let agree = confirm("Алкоголь употребляем?");
if (age >= 40 && agree === true) {
    console.log(`Не злоупотребляйте, ${name}!`);
} else if (age < 18 && agree === true) {
    console.log(`Ты что, ${name}?! Маме расскажу!`);
} else if (agree === false) {
    console.log(`Так держать, ${name}!`);
} else if (!isNaN(age)) {
    console.log(`${name}, только водку с пивом не мешай...`);
} else {
    console.log(`${name}, давай еще раз.`);
}