/*eslint-disable*/
//this will take in a slider div element
//first thing we want to do is check if somebody has passed in a slider
//use instanceof to check the thing passed in is a valid instance of an Element
function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }
  //create some variables for keeping track of the slides in slider
  
  let current;
  let next;
  let prev;

  //select the elements needed for the slider
  //If you look at your HTML elements ask yourslef what you need for the slider to operate- you need all of the slides so it has slides, duh, and the previous and next buttons to navigate through it
  const slides = slider.querySelectorAll('.slides');
  console.log(slides);
  const prevBUtton = document.querySelector('.goToPrev');
  const nextBUtton = document.querySelector('.goToNext');
}


const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));