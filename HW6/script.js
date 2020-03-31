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
// target.age = 56;
// target.country = 'Ukraine';

function compareObject(firstOb, secondOb) {
    let result;
    if (Object.keys(firstOb).length === Object.keys(secondOb).length) {
        for (let key in firstOb) {
            if (firstOb[key] === secondOb[key]) {
                result = true;
            } else { return false };
        }
    } else { return false };
    return result
}

console.log(compareObject(origin, target))