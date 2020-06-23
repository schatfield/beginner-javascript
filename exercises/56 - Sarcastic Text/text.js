/*eslint-disable*/


console.log('it works');

const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelector('[name="filter"]');

console.log(textArea, result, filterInputs);


function transformText(text) {
 //take the text and loop over each letter
    const mod = Array.from(text).map(filters.sarcastic);
    console.log(mod);
    result.textContent = mod.join('');
}

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

//listen for the input event, when that happens grab the event and pass the enteredt text to out transformText function
//grab the text out of the text area? e.target gives us the actual text box and .value gives us whatever the user has passed in 
textArea.addEventListener('input', e => transformText(e.target.value));

