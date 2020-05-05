/* eslint-disable */
// console.log('it working')
// variable storing first element with a class of item that is found on the page
const item = document.querySelector('.item');

// inserts the h1 tag into the class of item 
// backticks let you do multi line html
// setting innerhtml into your element is one way to just dump a string in and have the browser create all the elements for you
// backticks interpolate values very easily
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`
const myHTML = `
<div class="wrapper">
  <h2>Cute pup</h2>
  <img src="${src}" alt="${desc}"/>
</div>
`;



// this below will give you an error because myHTML is not an element it is only a string. 
// myHTML.classList.add('special');
// this consolelog shows that myHTML is a string
// console.log(typeof myHTML);

// // this will come up as undefined because myHTML is just a string and not an element
// // it only becomes an element once it is dumped into the DOM by setting the innerHtml
// console.log(myHTML.classList);

// // dumping myHTML into the DOM by setting the innerHTML. 
// // item is the variable from the beginning that is holding the reference to the 1st element with the class .item
// item.innerHTML = myHTML;

// const itemImage = document.querySelector('.wrapper img');

// itemImage.classList.add('round');

// console.log(itemImage);

// turn my string into an HTML element
const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.append(myFragment)

// myHTML- IS THE RAW STRING
// myFragment - the fragment that turns the raw string into a fragment that can be dumped into the DOM as an HTML element

// IMPORTANT-
// innerHtml can be used as both a getter and a setter. as a getter it can GET the innerHtml that exists as part of something on your page.
// as a setter you are setting something to be a part of that page and updating an element with new html in the DOM
// if you want to create html from a string you can either dump it straight into an element with .innerHtml
//OR  if you do need to add event listeners or change classes add classes change attributes you can turn into DOM nodes before it's dumped in with createContextualFragment and pass it a string.



// const item = document.querySelector('.item');

// const width = 500;
// const src = `https://picsum.photos/${width}`;
// const desc = `Cute Pup <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`;
// const myHTML = `
//   <div class="wrapper">
//     <h2>Cute ${desc}</h2>
//     <img src="${src}" alt="${desc}"/>
//   </div>
// `;

// // turn a string into a DOM element
// const myFragment = document.createRange().createContextualFragment(myHTML);

// document.body.appendChild(myFragment);
