const origin = {
    name: 'Vasya',
    lastName: 'Ivanov',
    age: 25,
    city: 'Kiev',
    hobby: {
        first: 'golf',
        second: 'dance',
        third: 'cars',
    }
};

const target = {};

function copy(target, origin) {
    for (let key in origin) {
        target[key] = origin[key]
    }
    return target
};

copy(target, origin)
console.log(origin, copy(target, origin));



// target.name = 'Ivan';

function compareObject(firstOb, secondOb) {
    for (let key in firstOb) {
        if (firstOb[key] === secondOb[key]) {
            return console.log(true)
        } else return console.log(false)
    }
}

compareObject(origin, target)