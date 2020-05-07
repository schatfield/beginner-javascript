/*eslint-disable*/
console.log('it works');

// select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// set up our canvas for drawing

// if you are making variable form property on an object you can shortform write this below like this:
// this format is called destructuring 
// make a variable called height, make a variable called width from the matching properties on our canvas
// const width = canvas.width;
// const height = canvas.height;

const  { width, height } = canvas;

// create random x and y  starting points on the canvas
// we will use Math.floor() and Math.random()
// Math.floor - run Math.floor against (when you wrap Math.random method with Math.floor method) Math.random it will give you the lower level of the random decimal returned by Math.random()
// Math.random only returns floating point (decimal) random numbers that are under zero or zero, takes no args. if you do Math.random() * 100 you'll get a random number between 0 and 99.999999
// replace your 200 px number in moveTo and lineTo belwo to use variables x and y
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * width);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); //this is how you start the drawing- it's like putting a marker to a page
ctx.moveTo(x, y); // 200 px from the top 200px down
ctx.lineTo(x, y); //moveTo and lineTo create an invisible line
ctx.stroke(); //this will draw an actual line from where you started to where you ended

// write a draw function
// A note: initially we passed an "options" object into the draw function like this function draw(options). options is an object that will contain everything that we wish to pass to this draw function. we have destructured it and passed it a property on the options object as a proper variable

function draw({ key }) {
    // increment the hue
    // Note: hue +=1 is the same thing as hue = hue +1
    hue = hue + 10;
    console.log(hue);
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 50%, 80%)`;
    console.log(key);
    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move our x and y  values depending on what the user did
    switch (key) {
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x = x + MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y = y + MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x = x - MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// write a handler for the keys - this will help us know whether we are moving the circle guy up down left right

function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault()
        draw({ key: e.key });
    }
}

// clear/shake function


function clearCanvas() {
    // add the shake
    canvas.classList.add('shake');
    // clear the canvas
    ctx.clearRect(0, 0, width, height);
    // add an event listener to our canvas and listen for the shake to end with 'animationend'
    canvas.addEventListener('animationend', function() {
        console.log('done the shake');
        canvas.classList.remove('shake');
    }, 
    { once: true}
  );
}


// listen for arrow keys
// to listen sitewide, listen on the window
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);