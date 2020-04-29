/* eslint-disable */
console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent ='i am a P';
myParagraph.classList.add('SPECIAL');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/600';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// appendChild() addsa node- a node can be either an element or a plain piece of text

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// oh no! I need to add soemthing to the top- like a heading!

// const heading = document.createElement('h2');
// heading.textContent = 'cool things';

// myDiv.insertAdjacentElement('beforebegin', heading);

// making an Unordered List with 5 items in it with the apis we've been using and inject it into the DOM

const list = document.createElement('ul');

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li4.insertAdjacentElement('afterbegin', li4);
// console.log('it works!');

// const myParagraph = document.createElement('p');
// myParagraph.textContent = 'I am a P';
// myParagraph.classList.add('special');
// console.log(myParagraph);

// const myImage = document.createElement('img');
// myImage.src = 'https://picsum.photos/500';
// myImage.alt = 'Nice photo';

// const myDiv = document.createElement('div');
// myDiv.classList.add('wrapper');
// console.log(myDiv);

// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);

// document.body.appendChild(myDiv);

// // oh shoot! we need to add somethint to the top. like a heading!
// const heading = document.createElement('h2');
// heading.textContent = 'Cool Things';

// myDiv.insertAdjacentElement('beforebegin', heading);

// // <ul>
// // <li>One</li>
// // <li>two</li>
// // <li>three</li>
// // <li>four</li>
// // <li>five</li>
// // </ul>

// const list = document.createElement('ul');
// const li = document.createElement('li');
// li.textContent = 'three';
// list.appendChild(li);

// document.body.insertAdjacentElement('afterbegin', list);

// const li5 = document.createElement('li');
// li5.textContent = 'Five';
// list.append(li5);

// const li1 = li5.cloneNode(true);
// li1.textContent = 'one';
// list.insertAdjacentElement('afterbegin', li1);

// const li4 = document.createElement('li');
// li4.textContent = 'four';
// li5.insertAdjacentElement('beforebegin', li4);

// const li2 = document.createElement('li');
// li2.textContent = 'two';
// li1.insertAdjacentElement('afterend', li2);
