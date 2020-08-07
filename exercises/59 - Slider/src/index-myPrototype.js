/*eslint-disable*/
//this will take in a slider div element
//first thing we want to do is check if somebody has passed in a slider
//use instanceof to check the thing passed in is a valid instance of an Element
function Slider(slider) {
    if (!slider instanceof Element) {
      throw new Error('No slider passed in');
    }

    //select the elements needed for the slider
    console.log(slider);
    this.slides = slider.querySelector('.slides');
    //save reference to the slider that's passed in
    //WHY: the slider that gets passed in needs to be saved on the instance so we can querySelector it in the future
    this.slider = slider;
    //these variables are only accessibleinsid the constructor and NOT needed anywhere inside the protype method so not neccessary to put them on 'this'
    const prevBUtton = slider.querySelector('.goToPrev');
    const nextBUtton = slider.querySelector('.goToNext');
  
  //When the person creates the slider/ When this slider is created, run the startSlider Function
    this.startSlider();
    this.applyClasses();

    //Event listeners
    //this.move = this.move.bind(this);
    //Arrow function and 'this': the arrow functions are bound instead of the 'this.move' to the event listeners and that's what we want
    //WHY: binds the arow function and leaves the this.move function free to access the instance so it can reference prev, current, and next DOM elements
    prevBUtton.addEventListener('click', () => this.move('back'));
    nextBUtton.addEventListener('click', () => this.move());
  }

  Slider.prototype.startSlider = function() {
      //debugger;
    this.current =
        this.slider.querySelector('.current') ||
        this.slides.firstElementChild;
    this.prev = 
        this.current.previousElementSibling || 
        this.slides.lastElementChild;
    this.next = 
        this.current.nextElementSibling || 
        this.slides.firstElementChild;
    //console.log(this.current, this.prev, this.next);
  }

  Slider.prototype.applyClasses = function() {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next'); 
  }

  Slider.prototype.move = function(direction) {
      console.log(this);
    //strip all of the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
    if(direction === 'back') {
      //make a new array of the new values and destructure them over and into the prev,current and next variables.
      [this.prev, this.current, this.next] = [
        //get the prev slide, if there is none, get the last slide from the entire slider and wrap back around
       this.prev.previousElementSibling || this.slides.lastElementChild, 
        this.prev, 
        this.current
      ];
    } else {
      [this.prev, this.current, this.next] = [
        this.current, 
        this.next, 
        //get the next slide, or if there is none becasue you're at the end, wrap around and grab the first slide 
        this.next.nextElementSibling || this.slides.firstElementChild
      ];
    }
    this.applyClasses();
  }
  
 //the new keyword will create a new instance of the Slider for each of the variables below
  const mySlider = new Slider(document.querySelector('.slider'));
  const dogSlider = new Slider(document.querySelector('.dog-slider'));
  //console.log(mySlider, dogSlider);
  
  window.dogSlider = dogSlider;

  window.addEventListener('keyup', function(e) {
      if (e.key === 'ArrowRight') {
          dogSlider.move();
      } 
      if (e.key === 'ArrowLeft') {
        dogSlider.move('back');
      }
  });