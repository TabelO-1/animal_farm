'use strict';


const form = document.getElementsByTagName('FORM')[0];

form.addEventListener('submit', makeNewArticle ); 

function makeNewArticle(event) {
event.preventDefault();
const title = event.target.title.value;
const journal = event.target.content.value;

const article = document.createElement('article');
const h2 = document.createElement('h2');
const p = document.createElement('p');

h2.textContent = title;
p.textContent = journal;

article.appendChild(h2);
article.appendChild(p);

const main = document.getElementById('main');
main.appendChild(article);

}