/*eslint-disable*/

console.log('it works');

// select the buttons with a class of cardbutton
const cardButtons = document.querySelectorAll('.card button');

// grab the modal. do it here becaue we ony need to select it once, if we needed to select it with every click we would put it in the handlecardbuttonclick function
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

// This function below is going to grab something to show in the modal when the 'learn more' button in each card is clicked- the image and the data description of the parent card will show up in the modal

function handleCardButtonClick(event) {
  console.log('ya clicked it');
  const button = event.currentTarget;
  // find the card that is associated with the clicked button
  // .closest() is similar to queryselectorall but opposite- it climbs up the DOM tree of elements instead down
  const card = button.closest('.card');
  // grab the image src
  const imgSrc = card.querySelector('img').src;
  //  grab the data desc of the parent card. if we want to grab a data-desciption from the dom we use .dataset
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  // populate the modal with the new info. grab the image and show higher version of it
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
  <p>${desc}</p>`;
  // show the modal
  modalOuter.classList.add('open');
}

// loop over each of the buttons and listen for a click on them
cardButtons.forEach(button => 
  button.addEventListener('click', 
  handleCardButtonClick)
  );

function closeModal() {
  modalOuter.classList.remove('open');
}

// this function listens for a click outside the pop up part of the modal- the other part of the modal or modalOuter
modalOuter.addEventListener('click', function(event) {
  // .closest() is similar to queryselectorall but opposite- it climbs up the DOM tree of elements instead down
  // we can use the closest method to see if we are clicking inside the modalInner AT ALL by searching for the closest class of .modal-inner
  // make this .closest() a boolean so if it finds something called .modal-inner it will be FALSE that you're clicking outside and if doesn't find something it will be TRUE that you are clicking outside and then it will close the modal window
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
  // console.log(event.target);
  // console.log(event.currentTarget);
  console.log(isOutside);
});

window.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.key ==='Escape') {
    closeModal();
  }
});

// const cardButtons = document.querySelectorAll('.card button');
// const modalOuter = document.querySelector('.modal-outer');
// const modalInner = document.querySelector('.modal-inner');

// function handleCardButtonClick(event) {
//   const button = event.currentTarget;
//   const card = button.closest('.card');
//   // Grab the image src
//   const imgSrc = card.querySelector('img').src;
//   const desc = card.dataset.description;
//   const name = card.querySelector('h2').textContent;
//   // populate the modal with the new info
//   modalInner.innerHTML = `
//     <img width="600" height="600" src="${imgSrc.replace(
//       '200',
//       '600'
//     )}" alt="${name}"/>
//     <p>${desc}</p>
//   `;
//   // show the modal
//   modalOuter.classList.add('open');
// }

// cardButtons.forEach(button =>
//   button.addEventListener('click', handleCardButtonClick)
// );

// function closeModal() {
//   modalOuter.classList.remove('open');
// }

// modalOuter.addEventListener('click', function(event) {
//   const isOutside = !event.target.closest('.modal-inner');
//   if (isOutside) {
//     closeModal();
//   }
// });

// window.addEventListener('keydown', event => {
//   console.log(event);
//   if (event.key === 'Escape') {
//     closeModal();
//   }
// });
