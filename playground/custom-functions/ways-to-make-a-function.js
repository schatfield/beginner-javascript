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




// Function Expression


const doctorize = function(firstName) {
  return `Dr. ${firstName}`;
} 

// const doctorize = firstName => `Dr. ${firstName}`;
// console.log(doctorize)

/* eslint-disable */
// const inchToCM = (inches) => {
  //   const total = inches * 2.54;
  //   return total;
  // }
  // console.log(inchToCM)

  const inchToCM = function(inches) {
    return inches * 2.54;
  }
  console.log(inchToCM)
  
  // const inchToCM = inches => inches * 2.54;
  
  
  // Function definition with function keyword
  // function add(a, b = 3) {
    //   const total = a + b;
    //   return total;
    // }
    

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

(function(age) {
  return `You are cool and age ${age}`;
})(10);

// Methods!!!
const wes = {
  name: 'Westopher Bos',
  // Method!
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes';
  },
  // Short hand Method
  yellHi() {
    console.log('HEY WESSSSS');
  },
  // Arrow function
  wisperHi: () => {
    console.log('hii wesss im a mouse');
  }
}

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!');
}

button.addEventListener('click', function() {
  console.log('NIce Job!!!');
});

// Timer Callback
setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 1000);
