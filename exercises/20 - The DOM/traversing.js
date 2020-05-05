/*eslint-disable*/

console.log('it works');

const shawna = document.querySelector('.shawna');
console.log(shawna.children);
console.log(shawna.childNodes);
console.log(shawna.firstElementChild);
console.log(shawna.lastElementChild);
console.log(shawna.previousElementSibling);
console.log(shawna.nextElementSibling);
console.log(shawna.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
console.log(p);