/*eslint-disable*/
//this will take in a slider div element
//first thing we want to do is check if somebody has passed in a slider
//use instanceof to check the thing passed in is a valid instance of an Element
function Slider(slider) {
  if (!slider instanceof Element) {
    throw new Error('No slider passed in');
  }
  //create some variables for keeping track of the slides in slider
  //By creating these variables here, all the functions that live inside of the Slider function will have access to them. 
  //These aren't golbal variables, they just live insdide the closure of our Slider function - that's the whole concept of a Closure we have variables that exist that several functions can access
  let prev;
  let current;
  let next;

  //select the elements needed for the slider
  //If you look at your HTML elements ask yourslef what you need for the slider to operate- you need all of the slides so it has slides, duh, and the previous and next buttons to navigate through it
  //you use querySelector here to grab the element itself
  const slides = slider.querySelector('.slides');
  const prevBUtton = slider.querySelector('.goToPrev');
  const nextBUtton = slider.querySelector('.goToNext');

  function startSlider() {
    //updating "current" variable - not defining it inside because other functions will need to access it too. 
    current = slider.querySelector('.current') ||
    slides.firstElementChild;
    prev = current.previousElementSibling || 
    slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({current, prev, next});
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next'); 
  }

  function move(direction) {
    //strip all of the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if(direction === 'back') {
      //make a new array of the new values and destructure them over and into the prev,current and next variables.
      [prev, current, next] = [
        //get the prev slide, if there is none, get the last slide from the entire slider and wrap back around
        prev.previousElementSibling || slides.lastElementChild, 
        prev, 
        current
      ];
    } else {
      [prev, current, next] = [
        current, 
        next, 
        //get the next slide, or if there is none becasue you're at the end, wrap around and grab the first slide 
        next.nextElementSibling || slides.firstElementChild
      ];
    }
    applyClasses();
  }
  

  //When the person creates the slider/ When this slider is created, run the startSlider Function
  startSlider();
  //when the slider starts run apply classes?
  applyClasses();

  //Event listeners
  prevBUtton.addEventListener('click', ( )=> move ('back'))
  nextBUtton.addEventListener('click', move)
}

// the beauty of running both of these at once is that as we are building we can make sure it works for both use cases
const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));