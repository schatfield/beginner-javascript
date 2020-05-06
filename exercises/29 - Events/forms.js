/*eslint-disable*/

console.log('itworks!!');

// select the first thing on the dom that has a class of wes
const wes = document.querySelector('.wes');

// listen for a click on it
wes.addEventListener('click', function(event) {
    // console.log('you cliked it');
    const shouldChangePage = confirm('this is malicious. proceed?');
    console.log(shouldChangePage);
    if (!shouldChangePage) {
        event.preventDefault();  
    }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) { 
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name.value);
    // console.log(event.currentTarget.email.value);
    // console.log(event.currentTarget.agree.checked);
    const name = event.currentTarget.name.value;
    if (name.includes('chad')) {
        alert('sory bro');
        event.preventDefault();
    }
});


function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
}
// console.log(signupForm.name);
// types of events
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
    if(event.type === 'click' || event.key === 'Enter') {
        console.log('you clicked the photo');
    }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);

