/*eslint-disable*/
console.log('IT WORKS!');

// NOTES and beginning of exercise with error log and solution

// scroll events: when somebody scrolls on apage or scrolls inside an element
// if you want to listen for a window scroll event you just listen for window.addEventListener, 
// but if it's the case of another element that has an overflow scroll set on it  with css we have to select that element and listen for scroll on the element

// const terms = document.querySelector('terms-and-conditions');
// // when we console.log this it comes up as null
// console.log(terms);

// // this .addEventListener gave us this error: scroll-to-accept.js:11 Uncaught TypeError: Cannot read property 'addEventListener' of null at scroll-to-accept.js:11
// // this is saying it can't read it because there's nothing in the selector
// // this is a good indication that your selector 'terms-and-conditions' is wrong
// // in this case we needed the '.' before the selector name
// terms.addEventListener('scroll', function(e) {
//     console.log(e);
// });


const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallBack(payload) {
    // chek if the first item in our payload's intersectionRatio is equal to 1
    if(payload[0].intersectionRatio === 1) {
        // if it is equal to 1 remove the disabled attribute on the accept button
        button.disabled = false;
        console.log('REMOVING DISABLED ATTRIBUTE'); 
//     } else {
//         button.disabled = true;
//     }
    // Stop observing the button
        ob.unobserve(terms.lastElementChild);
    }
};




// creating a new intersection observer
// it is something that will watch if an element is on or off or partly on or off a page
// intersection observer takes a callback function as an arg. it will be fired every single time it needs to check if something is currently on the page
// we want to see when that 'watch' strong tag we added to the html file is visible on the page
// new is keyword we will learn about later
// this is just a watcher so we need to tell it to watch soemthing
const ob = new IntersectionObserver(obCallBack, {
    root: terms,
    threshold: 1,
});

// here we are telling it to watch something by using the .observe()
// and you pass it something to watch for
// we are observing for when the last element in our terms and conditions div is 100% on the screen to check when the user scrolls to the bottom
// this specifically is looking for the last tag in the div <hr>
ob.observe(terms.lastElementChild);


// window.addEventListener('scroll', function(e) {
//     this.console.log(e);    
// });