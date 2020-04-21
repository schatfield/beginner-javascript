/* eslint-disable prettier/prettier */

// function calculateBill() {
//   // this is the function body everything in here is part of the function
//   // console.log('Running calculateBill!!!!');
//   const total = 100 * 1.13;
//   // console.log(total);

//   // the variable total is only ever available inside this function because it was created inside this function. It is known as a a temporary variable for that reason. When the function is done running, that variable is garbage collected. we need to capture the returned value of a function into a variable. the returned value of the function in this case is the total. so calculateBill() is "total" since that's what it returns. 
//   return total;
// }

// const myTotal = calculateBill();

// // this doesn't work becasuse the variable "total" isn't available to us outside of the function
// // console.log(total);

// console.log(myTotal);
// console.log(`Your total is ${myTotal}`);
// console.log(`Your total is ${calculateBill()}`);  


// // Function Definition

function calculateBill(billAmount, taxRate = 0.13){
  console.log(billAmount, taxRate);
  // this is the function body
  // console.log('Running calculateBill!!!');
  const total = billAmount * (1 + taxRate);
  return total;
}

// Function call or function run

const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal = calculateBill(wesTotal, wesTaxRate)
console.log(myTotal)
const myTotal3 = calculateBill(20 +  20 + 30 + 20, 0.15)
console.log(myTotal3)

// const myTotal2 = calculateBill(200, 0.13)
// console.log(myTotal, myTotal2) 


// Function definition

// function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
//   // this is the function body
//   console.log('Running Calculate Bill!!');
//   const total = billAmount + billAmount * taxRate + billAmount * tipRate;
//   return total;
// }

// // Function Call. Or **Run**
// const wesTotal = 500;
// const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);



function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('JACK');
console.log(greeting)


function myNameIs(first, last) {
  return `My name is ${first} ${last}`;
}

const name1 = 'Shoonoo';
const name2 = 'Choochoo';

const introduceMe = myNameIs(name1, name2);
const introduceMe2 = myNameIs('shoo', 'choo')

console.log(introduceMe, introduceMe2)

function feedJack(breakfast,lunch, dinner){
  console.log(breakfast, lunch, dinner);
  // const meals = `${breakfast} ${lunch} ${dinner}`;
  const meals = 'I AM FULL';
  const meals1 = meals
  return meals1;
}
const breakfast1 = 'french toast';
const lunch1 = 'carrot'
const dinner1 = 'beef'
const survived = feedJack(breakfast1, lunch1, dinner1)
console.log(survived)


// // Function Definition
// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// // const greeting = sayHiTo('Wes');
// // console.log(greeting);


// function doctorize(name = 'shoo') {
//   return `Dr. ${name}`;
// }

// function yell(name = '') {
//   return `HEY ${name.toUpperCase()}`;
// }

// yell(doctorize('shoo'))
// const nameTime = yell(myNameIs('shoo', 'choo'))
// console.log(nameTime)




// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// function yell(name = 'Silly Goose') {
//   return `HEY ${name.toUpperCase()}`;
// }

// const myBill4 = calculateBill(100, undefined, 0.2);
// console.log(myBill4);




// console.log('it works');
