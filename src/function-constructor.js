function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");

console.dir(myFather);
console.dir(mySelf);

function Animal(legs, isDomesticated) {
  this.legs = legs;
  this.isDomesticated = "Yes";
}

Animal.prototype.isAnimalDomesticated = function () {
  return this.isDomesticated;
};

function Cat(name, brid) {
  this.name = name;
  this.brid = brid;
}

function Dog(name, brid) {
  this.name = name;
  this.brid = brid;
}
Object.setPrototypeOf(Cat.prototype, Animal.prototype);

let newCat = new Cat("meuw", "Indian");
console.log("newCat", newCat);
console.log(22, newCat.isAnimalDomesticated());
