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
    result.textContent = text;
}

// an object holding functions (methods) to create the text modifications
//each property is named for the value in the index.html file
//the transformText function above is going to run these filter methods in the filters object
const filters = {
    sarcastic(letter, index) {
        console.log(letter, index);
        return letter;
    },
    funky(){

    },
    unable(){

    }
};

//listen for the input event, when that happens grab the event and pass the enteredt text to out transformText function
//grab the text out of the text area? e.target gives us the actual text box and .value gives us whatever the user has passed in 
textArea.addEventListener('input', e => transformText(e.target.value));

