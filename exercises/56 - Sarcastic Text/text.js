/*eslint-disable*/


console.log('it works');

const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
//filterInputs is a nodelist so we wrapped it in Array.from to convert it o an array. this iwll be converted once on page load and this variable will be used in the translateText function to grab the inputs and identify which is selected by the user at at given time
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

console.log(textArea, result, filterInputs);


//variable to use for funky text in filters methods for "funky"
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
  };

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
    funky(letter) {
        //first check if there's a funky letter for each letter typed by user
        //funkyLetters[letter] - variable above and the letter passed in we want
        let funkyLetter = funkyLetters[letter];
        if (funkyLetter) return funkyLetter;
        //if there is not, check if there is a lowercase version of the letter
        funkyLetter = funkyLetters[letter.toLowerCase()];
        if (funkyLetter) return funkyLetter;
        //if there is nothing return the original letter passed in unaffected
        return letter;
    },
    unable(letter) {
        //use '...' in 1 out of 3 spaces enterted by the user
        const random = Math.floor(Math.random() * 3);
        if (letter === ' '  && random === 2) {
            return '...';
        }
        return letter;
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

//when the user clicks on each radio button (this is considered an input and not a click for some reason) the radio button input should trigger each of our filters  and show what's selected
//loop over the inputs (radio buttons)
//each input (radio button) has an event listener for an input event
//when that input event triggers, we runa nother function that runs our transformText function and passes it the value of the text input by the user
filterInputs.forEach(input => 
    input.addEventListener('input',() => {
        transformText(textArea.value);
    }));
