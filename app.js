'use strict';
//console.log('hello world');

function Create(animalName) {
  this.name = animalName;
}
Create.prototype.render = function () {
  let section = document.getElementById(this.animalName);

  let div = document.createElement("div");

  div.className = this.name;

  div.textContent = this.name;

  section.appendChild(div);

  console.log("this should work");
};

let catButton = document.getElementById("makeCat");

catButton.addEventListener("click", createCat);

function createCat() {
  let cat = new Create("cat");
  cat.render();
}
