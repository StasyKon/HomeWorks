let str = 'abc';
let symbol = 'a';

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//includes

function isSymbolPresentInString(str, symbol) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symbol) return true
    }
    return false
}

//indexOf

function getSymbolIndex(str, symbol) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symbol) return i
    }
    return '-1'
}

console.log(isSymbolPresentInString(str, symbol));
console.log(getSymbolIndex(str, symbol));



//forEach

function forEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i)
    }
}

function callback(value, index) {
    console.log("Index: " + index + ", Value: " + value);
}

//map

function map(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]))
    }
    return newArr
}

function cbMap(value) {
    return value * 2
}

//filter

function filter(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let j = cb(arr[i])
        if (!!j) newArr.push(j)
    }
    return newArr
}

function cbFilter(value) {
    if (value > 4)
        return value
}

//some

function some(arr, cb) {
    let i = 0;
    let j;
    while (i < arr.length) {
        j = cb(arr[i]);
        if (!!j) break;
        i++;
    }
    return j
}

function cbSome(value) {
    if (value % 5 === 0)
        return true
    else return false
}

//every

function every(arr, cb) {
    let i = 0;
    let j;
    while (i < arr.length) {
        j = cb(arr[i]);
        if (!j) break;
        i++;
    }
    return j
}

function cbEvery(value) {
    if (value >= 1)
        return true
    else return false
}

forEach(array, callback);
console.log(map(array, cbMap))
console.log(filter(array, cbFilter))
console.log(some(array, cbSome))
console.log(every(array, cbEvery))