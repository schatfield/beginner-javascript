/* eslint-disable */

// practice getting properties from an element and usng methods
// setting elements on the element
// using methods on elements like "insertAdjacentText"

// before you can work with elenments on a page you need to go get them or select them- querySelector used to select elements
// querySelector takes the css selector as an argument

// function that finds p tag on dom
// function init() {
    // gives you the first matching element that matches what you're looking for
//     const p = document.querySelector('p');
// console.log(p);
// }

// this tells JS to wait to run the init function until the dom content has loaded so that the JS isn't run before the dom is loaded. this is if you don't want to put your script tag before the clsing body tag for some reason
// document.addEventListener('DOMContentLoaded', init)



const divs = document.querySelectorAll('div');
console.log(divs)

const imgs = document.querySelectorAll('.item img');
console.log(imgs)


const item2 = document.querySelector('.item2');
console.log(item2)

const item2Image = item2.querySelector('img');
console.log(item2Image)

const heading = document.querySelector('h2');
// set the textContent property on that element
// heading.textContent ='shawna is great!';
console.log(heading.textContent);

console.log(heading.innerText);
console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizza = document.querySelectorAll('.pizza');
console.log(pizza);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// ways to insert text onto the front or back of the contents of an element
// pizzaList.textContent = `${pizzaList.textContent} pizza`;
pizzaList.insertAdjacentText('beforeend', 'pizza');
pizzaList.insertAdjacentText('beforebegin', 'pizza');
pizzaList.insertAdjacentText('afterbegin', 'pizza');


// elements vs nodes - everything is a node but becomes an element if it;s wrapped in a tag of some kind

// Classes

const pic = document.querySelector('.nice');
pic.classList.add('open');
console.log(pic.classList);
pic.classList.remove('open');

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound)



// Attributes
// Attributes are anything that is provided to an HTML element as additional info- things like classes, src, alt, etc.

// Custom Attributes and Data Attributes

// setter
pic.alt = 'Cute Pup';
// getter  
console.log(pic.alt);   
// getter
console.log(pic.naturalWidth);

pic.addEventListener('load', function() {
    // getter
    console.log(pic.naturalWidth);
})

// pic.setAttribute('alt', 'really cute pup');
// console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
    alert(`Welcome ${custom.dataset.name} 
    ${custom.dataset.last}`);
})
