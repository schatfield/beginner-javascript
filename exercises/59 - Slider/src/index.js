/*eslint-disable*/
//this will take in a slider div element
//first thing we want to do is check if somebody has passed in a slider
//use instanceof to check the thing passed in is a valid instance of an Element
function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }
  //create some variables for working with the slider
  
  let current;
  let next;
  let prev;

  //select the elements needed for the slider
  const slides = slider.querySelectorAll('.slides');
  const prevBUtton = document.querySelector('.goToPrev');
  const nextBUtton = document.querySelector('.goToNext');
}


const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));