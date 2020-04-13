function Fauna() {
    this.animals = [];
};

Fauna.prototype.born = function() {
    this.animals.push(new Raccoon('male', true, true));
    this.animals.push(new Alpaca('male', true, true))
};

function Animal(gender, run, jump) {
    this.gender = gender;
    this.run = run;
    this.jump = jump;
};

function Mammal(gender, run, jump) {
    Animal.call(this, gender, run, jump)
};

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.giveMilk = function() {
    return this.gender === 'female'
};

function Raccoon(gender, run, jump) {
    Mammal.call(this, gender, run, jump)
};

Raccoon.prototype = Object.create(Mammal.prototype);
Raccoon.prototype.constructor = Raccoon;

Raccoon.prototype.steal = function() {
    return console.log('Your cotton candy was stolen!')
};

function Alpaca(gender, run, jump) {
    Mammal.call(this, gender, run, jump)
};

Alpaca.prototype = Object.create(Mammal.prototype);
Alpaca.prototype.constructor = Alpaca;

Alpaca.prototype.giveWool = function() {
    return console.log('Congrats! You gathered wool.')
};


let myFauna = new Fauna();
myFauna.born();
firstRaccoon = new Raccoon('female', true, false);
firstRaccoon.steal();
console.log(firstRaccoon.giveMilk());


firstAlpaca = new Alpaca('male', false, false);
console.log(firstAlpaca.giveMilk());
firstAlpaca.giveWool()

console.log(myFauna.animals);