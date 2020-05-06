/*eslint-disable*/
console.log('it works');

// select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// set up our canvas for drawing

// if you are making variable form property on an object you can shortform write this below like this:
// this format is called destructuring 
// make a variable called height, make a variable called width from the matching properties on our canvas
// const width = canvas.width;
// const height = canvas.height;

const  { width, height } = canvas;

// create random x and y  starting points on the canvas
// we will use Math.floor() and Math.random()
// Math.floor - run Math.floor against Math.random it will give you the lower level of the random decimal returned by Math.random()
// Math.random only gives random numbers that are under zero or zero, takes no args. if you do Math.random() * 100 you'll get a random number between 0 and 99.999999
// replace your 200 px number in moveTo and lineTo belwo to use variables x and y
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * width);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); //this is how you start the drawing- it's like putting a marker to a page
ctx.moveTo(x, y); // 200 px from the top 200px down
ctx.lineTo(x, y); //moveTo and lineTo create an invisible line
ctx.stroke(); //this will draw an actual line from where you started to where you ended

// write a draw function

// write a handler for the keys

function handleKey(e) {
    e.preventDefault()
    console.log(e.key);
    console.log('handle key');
}

// clear/shake function

// listen for arrow keys
window.addEventListener('keydown', handleKey);