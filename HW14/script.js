let plus = document.querySelectorAll('.plus');
let minus = document.querySelectorAll('.minus');
let text = document.querySelectorAll('.text');
let squares = document.querySelector('.squares');
let list = document.querySelector('.list');


for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function getPlus() {
        event.stopPropagation()
        text[i].innerText = ++text[i].innerText;
    })
}

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function getMinus() {
        event.stopPropagation()
        text[i].innerText = --text[i].innerText;
    })
}

function getColor(event) {
    let el = event.target.closest('.square');
    if (!el.classList.contains('bg-blue') && !el.classList.contains('bg-green') && !el.classList.contains('bg-yellow')) {
        el.classList.add('bg-blue');
    } else if (el.classList.contains('bg-blue')) {
        el.classList.remove('bg-blue');
        el.classList.add('bg-green');
    } else if (el.classList.contains('bg-green')) {
        el.classList.remove('bg-green');
        el.classList.add('bg-yellow');
    } else if (el.classList.contains('bg-yellow')) {
        el.classList.remove('bg-yellow');
        el.classList.add('bg-blue');
    }
}

function getBGColor(event) {
    let el = document.querySelector('.list .bg-red');
    if (el) { el.classList.remove('bg-red') };
    event.target.classList.add('bg-red')
}

squares.addEventListener('click', getColor)
list.addEventListener('click', getBGColor)