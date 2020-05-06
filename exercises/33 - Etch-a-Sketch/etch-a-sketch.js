/*eslint-disable*/
console.log('it works');

// select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// set up our canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.Width = 10;

// write a draw function

// write a handler for the keys

// clear/shake function

// listen for arrow keys