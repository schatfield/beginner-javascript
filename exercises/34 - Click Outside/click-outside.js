/*eslint-disable*/

console.log('it works');

// select the buttons with a class of cardbutton
const cardButtons = document.querySelectorAll('.card button');

// grab the modal. do it here becaue we ony need to select it once, if we needed to selectit with every click we would put it in the handlecardbuttonclick function
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  console.log('ya clicked it');
  const button = event.currentTarget;
  // grabs the individual card for the button you clicked on. the closest thing with a class of .card to the button clicked
  // .closest() is similar to queryselectorall but opposite- it climnbs up the DOM tree of elements instead down
  const card = button.closest('.card');
  // shows you the card associated with the button clicked
  console.log(card);
  // grab the image src
  const imgSrc = card.querySelector('img').src;
  console.log(imgSrc);
  //  grab the data desc of the parent card. if we want to grab a data-desciption from the dom we use .dataset
  const desc = card.dataset.description;
  // shows you the description you hust grabbed in const desc
  console.log(desc);
  // populate the modal with the new info. grab the image and show higher version of it
}

// loop over each of the buttons and listen for a click on them
cardButtons.forEach(button => 
  button.addEventListener('click', 
  handleCardButtonClick)
  );

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
