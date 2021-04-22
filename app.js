'use strict';

/*created a constructor function as a template 
for the animals, it takes in the 
paramaters of animalName, animalClass and animalID*/
function Create(animalName, animalClass, animalId) {
  this.name = animalName;
  this.class = animalClass;
  this.id = animalId;
}
/*This is the render function, it targets the the
elements Id, then creates a div element. Afterwards
it sets the class to the class paramater, then it sets
the text content to the name paramater then appendChild
to the let div*/
Create.prototype.render = function () {
  let target = document.getElementById(this.id)
  let div = document.createElement('div');
  div.className = this.class;
  div.textContent = this.name;
  target.appendChild(div);
};
/*this targets the 'makeCat' id then adds a click 
event listener, when clicked, it calls the createCat 
function. createCat sends a template to the constuctor
function, it sends it's name captialized, the class
you want to assign, and the id you want to target when
using the render function. dogButton, horseButton, and
sheepButton all do the same thing, just with different
names.*/
let catButton = document.getElementById('makeCat');
catButton.addEventListener('click', createCat);
function createCat() {
  let cat = new Create('Cat', 'catObject', 'cat');
  cat.render();
}
let dogButton = document.getElementById('makeDog');
dogButton.addEventListener('click', createDog);
function createDog() {
  let dog = new Create('Dog', 'dogObject', 'dog');
  dog.render();
}
let sheepButton = document.getElementById('makeSheep');
sheepButton.addEventListener('click', createSheep);
function createSheep() {
  let sheep = new Create('Sheep', 'sheepObject', 'sheep');
  sheep.render();
}
let horseButton = document.getElementById('makeHorse');
horseButton.addEventListener('click', createHorse);
function createHorse() {
  let horse = new Create('Horse', 'horseObject', 'horse');
  horse.render();
}

