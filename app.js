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
to div*/
Create.prototype.render = function () {
  let target = document.getElementById(this.id)
  let div = document.createElement('div');
  div.className = this.class;
  div.textContent = this.name;
  target.appendChild(div);
};
/*Fix this comment later*/
let catButton = document.getElementById('makeCat');
catButton.addEventListener('click', createAnimal);
let dogButton = document.getElementById('makeDog');
dogButton.addEventListener('click', createAnimal);
let sheepButton = document.getElementById('makeSheep');
sheepButton.addEventListener('click', createAnimal);
let horseButton = document.getElementById('makeHorse');
horseButton.addEventListener('click', createAnimal);

function createAnimal() {
if (catButton.clicked = true) {
  let cat = new Create('Cat', 'catObject', 'cat');
  cat.render();
} 
if (dogButton.clicked = true); {
  let dog = new Create('Dog', 'dogObject', 'dog');
  dog.render();
} 
if (sheepButton.clicked = true); {
  let sheep = new Create('Sheep', 'sheepObject', 'sheep');
  sheep.render();
} 
if (horseButton.clicked = true); {
  let horse = new Create('Horse', 'horseObject', 'horse');
  horse.render();
}
}