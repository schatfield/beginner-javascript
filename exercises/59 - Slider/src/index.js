/*eslint-disable*/
//this will take in a slider div element
//first thing we want to do is check if somebody has passed in a slider
//use instanceof to check the thing passed in is a valid instance of an Element
function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }
}


const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));