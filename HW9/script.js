//deep clone

const origin = {
    name: 'Vasya',
    lastName: 'Ivanov',
    age: 25,
    city: 'Kiev',
    hobby: {
        first: 'golf',
        second: 'dance',
        third: 'cars',
    },
    array: [
        1, 2, 3, [4, 5, 6]
    ]
};

const array = [
    1, 2, 3, [4, 5, 6], {
        name: 'Vasya',
        lastName: 'Ivanov',
        age: 25,
    }
]

function copy(origin) {
    let target = Array.isArray(origin) ? [] : {};
    for (let key in origin) {
        if (typeof origin[key] === 'object' && origin[key] !== null) {
            target[key] = copy(origin[key])
        } else target[key] = origin[key];
    }
    return target
};

console.log(origin, copy(origin));
console.log(array, copy(array));



//summa

let sum = 0;

function summa(a) {
    return sum += a;
}

console.log(summa(3));
console.log(summa(5));
console.log(summa(20));