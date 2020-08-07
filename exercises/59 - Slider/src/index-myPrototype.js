/*eslint-disable*/
//this will take in a slider div element
//first thing we want to do is check if somebody has passed in a slider
//use instanceof to check the thing passed in is a valid instance of an Element
function Slider(slider) {
    if (!slider instanceof Element) {
      throw new Error('No slider passed in');
    }
    //save reference to the slider div that was passed in to Slider

    this.slider= slider;

    //select the elements needed for the slider
    //If you look at your HTML elements ask yourslef what you need for the slider to operate- you need all of the slides so it has slides, duh, and the previous and next buttons to navigate through it
    //you use querySelector here to grab the element itself
    this.slides = this.slider.querySelector('.slides');
    this.prevBUtton = this.slider.querySelector('.goToPrev');
    this.nextBUtton = this.slider.querySelector('.goToNext');
    console.log(this.prevBUtton);
  
  //When the person creates the slider/ When this slider is created, run the startSlider Function
    startSlider();
    //when the slider starts run apply classes?
    applyClasses();

    //Event listeners
    this.prevBUtton.addEventListener('click', this.move('back'))
    this.nextBUtton.addEventListener('click', this.move)
  }

//when and where should this function be called?
  Slider.prototype.startSlider = function() {
    //updating "current" variable - not defining it inside because other functions will need to access it too. 
    this.current = this.slider.querySelector('.current') ||
    this.slides.firstElementChild;
    this.prev = this.current.previousElementSibling || 
    this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
    console.log({current, prev, next});
  }

  Slider.prototype.applyClasses = function() {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next'); 
  }

  Slider.prototype.move = function(direction) {
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
    applyClasses();
  }
  
  
  // the beauty of running both of these at once is that as we are building we can make sure it works for both use cases
  const mySlider = Slider(document.querySelector('.slider'));
  const dogSlider = Slider(document.querySelector('.dog-slider'));
  
  