/*eslint-disable*/

// Make a div
 const div = document.createElement('div');

// add a class of wrapper to it

div.classList.add('wrapper');
console.log(div);

// put it into the body
document.body.appendChild(div);


// make an unordered list

const unorderedList = document.createElement('ul');
// console.log(unorderedList);

// add three list items with the words "one, two three" in them

const li1 = document.createElement('li');
li1.textContent = 'one';

const li2 = document.createElement('li');
li2.textContent = 'two';

const li3 = document.createElement('li');
li3.textContent = 'three';

unorderedList.append(li1);
unorderedList.append(li2);
unorderedList.append(li3);

// put that list into the above wrapper
div.append(unorderedList)

// create an image

const image = document.createElement('img');

// set the source to an image
image.src = "https://picsum.photos/200";

// set the width to 250
image.width = 250;
// add a class of cute
image.classList = 'cute';
// add an alt of Cute Puppy
image.alt = 'cute puppy';
// Append that image to the wrapper
div.append(image);

// with HTML string, make a div, with two paragraphs inside of it

const htmlString = `
<div>
<p></p>
<p></p>
</div>
`;

// put this div before the unordered list from above
unorderedList.insertAdjacentHTML('beforebegin', htmlString);

// add a class to the second paragraph called warning

// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
    const html = `
    <div class="playerCard">
     <h2>${name} — ${age}</h2>
     <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. 
     That would be a tall dog!</p>
    </div>`;
    return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
