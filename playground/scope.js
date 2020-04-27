/* eslint-disable prettier/prettier */
/* eslint- disable */

console.log('it works');
const first = 'shawna';

function sayHi(){
  console.log('hi');
}

// const age = 100;

// function go(){
//   const hair = 'blonde';
//   const age = 200;
//   console.log(age);
//   console.log(hair);
// }

// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   console.log(age)
//   console.log(myAge)
//   console.log(hair)
// }

// go()

// console.log(100)

function isCool(name) {
  // defined variable that is avaialble to the scope of this whole function
  let cool;
  if (name === 'shawna') {
    // reassigned the variable to equal true
     cool = true;
  } else {
    return false;
  }
  console.log(cool);
  return cool;
}

// lexical or static scoping. scope look up happens based on where the functions are defined and not where they are called
// When a function takes in an argument, it will make local variables inside of that function named whatever youb named the parameter.
// const dog = whateverYouPassedInAsTheFirstArgumentToTheFunction;
// js will say ok let's make some local variables to this function, some function scoped variables and it makes them all available to us
// js doesn't care what the variable is called that you are passing in it only cares what the value is.

const dog = 'snickers';

function logDog(dog) {
  const dog = 'whateverYou'
  console.log(dog);

}
logDog();

function go() {
  const dog = 'sunny';
  logDog('rufus');

}

go(); 


/* eslint-disable */ 
for(let i =0; i < 10; i++) {
  console.log(i)
}

// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   console.log(age);
//   console.log(myAge);
//   console.log(hair);
// }

// go();
/* eslint-disable*/

// function isCool(name) {
//   if (name === 'wes') {
//     var cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }


// const dog = 'snickers';

// function logDog(dog) {
//   console.log(dog);
// }

// function go() {
//   const dog = 'sunny';
//   logDog('sunny');
// }

// go();

// function yell() {
//   console.log(name.toUpperCase())
// }

// function sayHi(name) {

//   yell();
// }


// yell();
