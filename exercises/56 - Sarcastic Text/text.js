/*eslint-disable*/


console.log('it works');

const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
//filterInputs is a nodelist so we wrapped it in Array.from to convert it o an array. this iwll be converted once on page load and this variable will be used in the translateText function to grab the inputs and identify which is selected by the user at at given time
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

console.log(textArea, result, filterInputs);

// an object holding functions (methods) to create the text modifications
//each property is named for the value in the index.html file
//the transformText function above is going to run these filter methods in the filters object

const filters = {
    //since we're running these methods on a map above, our sarcastic method can take in all the arguments a regular map will including current value and the index (map takes in an array)
    sarcastic(letter, index) {
        // if it is odd, it will return 1 which is a truthy value, so this if statement will trip
        // if there's an number other than zero at all, upper case it
       if (index % 2){
        return letter.toUpperCase();
       } else {
           //if it is even, it will return zero and we will lowercase it
           return letter.toLowerCase();
       }
    },
    funky(){

    },
    unable(){

    }
};



function transformText(text) {
    // 2 WAYS: grab the filter and change depending on user selection
    //every time this runs it's going to qerySelector for the thing that's selected. the .value gives the value in the input tag
    //const filter = document.querySelector('[name="filter"]:checked').value;
    const filter = filterInputs.find(input => input.checked).value;
    console.log(filter);
 //take the text and loop over each letter
 // saquare brackets on [filter] bc it's a variable, not a property
    const mod = Array.from(text).map(filters[filter]);
    console.log(mod);
    result.textContent = mod.join('');
}



//listen for the input event, when that happens grab the event and pass the enteredt text to out transformText function
//grab the text out of the text area? e.target gives us the actual text box and .value gives us whatever the user has passed in 
textArea.addEventListener('input', e => transformText(e.target.value));

