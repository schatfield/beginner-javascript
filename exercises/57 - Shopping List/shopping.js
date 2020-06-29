

/*eslint-disable*/
console.log('it works');
//first thing- to do anything at all we need to select items from the DOM
//we need the form and the list (see index.html file)
const shoppingForm = document.querySelector('.shopping');
const shoppingList = document.querySelector('.list');

//we need an array to hold our state
// state- data that reflects the current state of you application
//you should always be able to recreate the visual part of your application just given the data and relfected as an object or an array of the data

//array for holding the state
const items = [];

//listen for submit event bc it covers all use cases for submitting something whether it be by clicking, or hitting enter, etx, submit event covers all

//submit handler
function handleSubmit(e) {
    e.preventDefault();
    const inputItem = document.querySelector('#item').value;
    console.log(inputItem);
    
}

//listen for a submit event on the form
//grab shopping form ref, add event listener for the submit event, pass it the handler function to run when the event happens
shoppingForm.addEventListener('submit', handleSubmit);



//listen for user typing input and hits submit
//keep track of list items and whether they are complete or not
//render a list of all those items