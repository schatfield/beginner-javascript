/* eslint-disable prettier/prettier */
console.log('IT WORKS')


// Function definition with function keyword

// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// } 


// function call to demonstrate hoisting of doctorize2 over doctorize
// console.log(doctorize2('shawna'));

// Function Expression

// a function expression is where you store a function as a value inside a variable. this below is an anonymous function stuck inside a variable. this could also be called a variable function
const doctorize = function(firstName) {
  return `Dr. ${firstName}`;
} 

// this function does the same thing as the one above but is 'hoisted'. Functions declared with the function keyword are categorized as hoisted. JS will hoist functions defined this way to the top which allows you to run a function beofe t's defined. It doesn't do this for varaible functions.
function doctorize2(firstName) {
  return `Dr. ${firstName}`;

}


// Arrow functions
// Arrow functions are Anonumous functions!

// Arrow function syntax with Implicit return
// const doctorize = firstName => `Dr. ${firstName}`;
// console.log(doctorize)

// Arrow function with explicit return
// const inchToCM = (inches) => {
  //   const total = inches * 2.54;
  //   return total;
  // }
  // console.log(inchToCM)


  const inchToCM = function(inches) {
    return inches * 2.54;
  }
  console.log(inchToCM)
  
/* eslint-disable */

// Arrow function with implicit return
  // const inchToCM = inches => inches * 2.54;
  
  
  // Function definition with function keyword
  // function add(a, b = 3) {
    //   const total = a + b;
    //   return total;
    // }
    

function multiply(a, b = 5) {
 const total = a * b;
 return total;
}

const multiply1 = (a, b = 5) => a * b;
console.log(multiply(5))

const divide = (a, b) =>  solution = a / b;
console.log(divide(4,2))
console.log(divide(8,5))
console.log(Math.round(solution))




// const add = (a, b = 3) => a + b;
// console.log(add)


// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }



const makeABaby = (first, last, age) => {

  return {
    name: `${first} ${last}`,
    age: `${age}`
  }
}

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });


// IIFE
// Immediately Invoked Function Expression

// (function(age) {
//   return `You are cool and age ${age}`;
// })(10);

(function (age) {
  console.log('running the IIFE')
  return `You are cool and ${age}!`;
})(100)


// Methods!!!
// const wes = {
//   name: 'Westopher Bos',
//   // Method!
//   sayHi: function() {
//     console.log(`Hey ${this.name}`);
//     return 'Hey Wes';
//   },
//   // Short hand Method
//   yellHi() {
//     console.log('HEY WESSSSS');
//   },
//   // Arrow function
//   wisperHi: () => {
//     console.log('hii wesss im a mouse');
//   }
// }


// you can create a property on an object and set it to a function, e.g. 'sayHi' property below
const shawna = {
  name: 'shawna',
  // the browser infers the function name from the property name just like when we stuck a function into variavble, the name is infered from the name of the varible 
  // Method!
  sayHi: function() {
    
    console.log(`Hey ${this.name}`);
    return 'Hey shawna';
  },
  // Shorthand way to write a method inside an object 
  yellHi() {
    console.log('HEY SHAWNA');
  },
  // Arrow function
  whisperHi: () => {
    console.log('hiii shawna im a mouseee');
  }
}



// Callback Functions
// Click Callback

// const button = document.querySelector('.clickMe');

// function handleClick() {
//   console.log('Great Clicking!!');
// }


// Here we are passong
// button.addEventListener('click', function() {
//   console.log('NIce Job!!!');
// });

// // Timer Callback
// this methos takes 2 things, it takes a function to call after a certain amount of time and the 2nd argument is a duration in miliseconds as to when the run it (after how long should i run this)
// setTimeout(() => {
//   console.log('DONE! Time to eat!');
// }, 1000);

setTimeout(shawna.yellHi, 1000);
// callback with anon syntax
setTimeout(function() {
  console.log('time to eat!');
}, 1000);
// callback with arrow
setTimeout(() => {
  console.log('done dude!!!');
}, 1000);

// Callback Functions
// Click Callback

// select the element- this is how you do that
const button = document.querySelector('.clickMe');
console.log(button);
// when the click happens we can pass it reference to a function we want to run when the button is clicked. 
// here the shawna.yellHi() will run when the button is clicked.
// we are just saying HEY BROWSER, here's a function could you be a dear and please run that function when the buton is clicked? 
// when someone clicks here's a function you should run.
// This s what is refered to as a 'Callback Function'
button.addEventListener('click', shawna.yellHi);


// Callback Function: a function that gets passed into another function and gets called at a later point in time.