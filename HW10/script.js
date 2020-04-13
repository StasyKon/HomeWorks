function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function(dist) {
    return this.maxDistance > dist
};

Unit.prototype.isReadyToFight = function() {
    return this.health >= this.maxHealth / 2
};

Unit.prototype.restore = function() {
    if (this.health < this.maxHealth) this.health = this.maxHealth;
};

Unit.prototype.clone = function() {;
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
};

let unit1 = new Unit('killer', 15, 20, 8);
// let unit2 = unit1.clone()
// let unit3 = unit2.clone()

console.log(unit1.clone(), unit1.clone())

// console.log(unit1, unit1.isReadyToMove(4),
//         unit1.isReadyToFight(), unit1.restore())


function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits)
}

Army.prototype.isReadyToMove = function(dist) {
    return this.units.every(unit => unit.isReadyToMove(dist))
}

Army.prototype.isReadyToFight = function() {
    return this.units.every(unit => unit.isReadyToFight())
}

Army.prototype.restore = function() {
    this.units.every(unit => unit.restore())
}

Army.prototype.getReadyToMoveUnits = function(dist) {
    return this.units.filter(unit => unit.isReadyToMove(dist))
}

Army.prototype.combineUnits = function(defaultUnits) {
    defaultUnits.forEach(unit => this.units.push(unit))
}

Army.prototype.cloneUnit = function(index) {
    const unit = this.units[index];
    if (unit)
        return unit.clone();
};


let myArmy = new Army([unit1, unit1.clone()])
console.log(myArmy)

myArmy.combineUnits([unit1, unit1.clone()])
console.log(myArmy.isReadyToMove(10))
console.log(myArmy.isReadyToFight())
console.log(myArmy.getReadyToMoveUnits(6))