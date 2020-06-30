

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
    //const name = e.currentTarget.item.value;
    //if subkit is hit when input is empty then don't submit an empty entry
    if (!inputItem) return;
    //this object will be pushed into our state array items
    const item = {
        name: inputItem,
        id: Date.now(),
        complete: false,
    };    
    //push the items into our state array
    items.push(item);
    console.log(`you have ${items.length} item in your state`);
    //clear the form
    e.target.reset();
    //fire off a custom event that will tell anyone who cares that the items have been updated
    //dispatchEvent method lives on all DOM elements, you have to pass it a customEvent - a constructor in the browser
    shoppingList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

//display shopping list items on dom
//use .map to loop over the state array and return some html for each item
function displayItems() {
    const html = items.map(item => `<li class "shopping-item">
    <input type="checkbox">
    <span class="itemName">${item.name}</span>
    <button aria-label="Remove ${item.name}">&times;</button>
    </li>`
    )
    .join('');
    //set the inner html of the contents in the list variable
    shoppingList.innerHTML = html;
}




//listen for a submit event on the form
//grab shopping form ref, add event listener for the submit event, pass it the handler function to run when the event happens
shoppingForm.addEventListener('submit', handleSubmit);
//passing it the custom event we created 'itemsUpdated' and then a function to run when that custom event happens
shoppingList.addEventListener('itemsUpdated', displayItems);
shoppingList.addEventListener('itemsUpdated', mirrorToLocalStorage);

//this will show you the breakdown of your custom event in the console
//shoppingList.addEventListener('itemsUpdated', e => {
   // console.log(e);
//})


//Make a function to mirror our data to localStorage

//local storage: sort of like a mini databaase that lives inside of your browser.
//allows users who are using your site to come back with the same browser to sort of pick up where they left off
//the ability to save some data in the user's browser for a future time
// local storage is text only by default, so if you try to setItem to localStorage that is an array or object or boolean it will try to convert that item to text first. 
//use the .toString method to fix this?

function mirrorToLocalStorage() {
    console.info('save items to local storage');
    //store your items
    localStorage.setItem('items', item);
}
// now when we add something to the list we need to listen for that event and then mirror all added items to local storage