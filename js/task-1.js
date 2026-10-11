'use strict'
const categoriesList = document.querySelector('#categories');
const items = categoriesList.children;

console.log(`Number of categories: ${items.length}`);

for (const item of items) {
  const categoryTitle = item.firstElementChild.textContent;
  
  const elementsCount = item.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
}