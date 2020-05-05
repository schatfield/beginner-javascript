/*eslint-disable*/
console.log('itworks')

const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');



// the benefits of having your function defined outside of the event listener are that it can be applied to several things with a click event it's drier! anon functions cannot be removed or unbinded from an element.
// if you want to remove an event listener you have to have reference to the function.

// this below is a good way to write event listener

function handleClick() {
  console.log('it got clicked');
}

 // BELOW: the browser runs the function inisde the event listener which is why it doesn't have to have handleClick() and it's only handleclick

// go get something // listen for something  // do something
butts.addEventListener('click', handleClick);

// event listeners typically take 2 arguments
// first is the type of event to listen for
// second is a callback function that runs when the event happens- you can name these with handle to help you rememebr that is the function that runs when your event happens. 
//three steps in event listeners: go get something (the "butts" part), listen for something (the "addEventListener('click')" part), and then do something (the "function" part)


//BELOW: event listener with anon function

// go get something // listen for something  // do something
// butts.addEventListener('click', function(){
//   console.log('it got clicked');
// });

//BELOW: arrow syntax
const hooray = () => console.log('hooray!')

// the browser runs the function inisde the event listener which is why it doesn't have to have hooray() and it's only hooray
coolButton.addEventListener('click', hooray);
  
  
  
  // LISTEN ON MULTIPLE ITEMS 
  // In order to add event listener on multiple items you need to loop over each item and add the event individually usinf the forEach method on them
  
  
  // grab reference to the things you want to listen for an event on
  // also typically your reference may be best placed at the top of your file like the other ones up there. we'r putting this here to see all the code examples in order

  const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('you are buying it!!!');
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
}) 


  
  // function buyItem() {
  //   console.log('buying items');
  // }

  // console.log(buyButtons);
  // console.dir(butts);
  
  // // Different ways to write 
  // // buyButtons.addEventListener('click', buyItem);
  
  // function attachListenerToButtons(buyButton) {
  //   console.log('binding the buy button');
  //   buyButton.addEventListener('click', buyItem);
    
  // }
  
  // buyButtons.forEach(attachListenerToButtons);


  // forEach will run a function for each item in our node list 
  // you can pass it an anon function here just fine
  // this function will run once for every thing it found and it also will give us reference to everything it found with the console.log of buyButton?
  // you just pass the function a parameter name- buyButton in this case below
  
  // This is one way to do this with an anon function
  // buyButtons.forEach(function(buyButton) {
  //   // console.log(buyButton)
  // })


  // arrow syntax with anon function
  // buyButtons.forEach((button)=>{
  //   button.addEventListener('click', () => {
  //     console.log('you clicked it ok');
  //   });
  // })



// const butts = document.querySelector('.butts');
// const coolButton = document.querySelector('.cool');

// function handleClick() {
//   console.log('🐛 IT GOT CLICKED!!!');
// }

// const hooray = () => console.log('HOORAY!');

// butts.addEventListener('click', function() {
//   console.log('Im an anon!');
// });
// coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick);

// // Listen on multiple items
// const buyButtons = document.querySelectorAll('button.buy');

// function handleBuyButtonClick(event) {
//   console.log('You clicked a button!');
//   const button = event.target;
//   // console.log(button.textContent);
//   // console.log(parseFloat(event.target.dataset.price));
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.target === event.currentTarget);
//   // Stop this event from bubbling up
//   // event.stopPropagation();
// }

// buyButtons.forEach(function(buyButton) {
//   buyButton.addEventListener('click', handleBuyButtonClick);
// });

// window.addEventListener(
//   'click',
//   function(event) {
//     console.log('YOU CLICKED THE WINDOW');
//     console.log(event.target);
//     console.log(event.type);
//     // event.stopPropagation();
//     console.log(event.bubbles);
//   },
//   { capture: true }
// );

// const photoEl = document.querySelector('.photo');

// photoEl.addEventListener('mouseenter', e => {
//   console.log(e.currentTarget);
//   console.log(this);
// });
