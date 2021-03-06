/*eslint-disable*/
console.log('it works');
//a Closure- the ability create a function and creates scope for each of the galleries and have reuseable code
function Gallery(gallery) {
  console.log(gallery);
  if (!gallery) {
    throw new Error('No Gallery Found');
  }
  //save reference to the gallery div that was passed in to Gallery
  this.gallery = gallery;

  // select the elements we need
  // since we need to select these things for each of our instances, we are selecting the things we need inside this function instead of outside of it. this will scope the variables to the function- they live only inside this function that way gallery1 and 2 will never clash with each other
  //using gallery instead of document here bc we need to scope everything to the actual gallery that was passed into the querySelector below in gallery1 and gallery2 variables
  this.images = Array.from(gallery.querySelectorAll('img'));
  //we are using docmunet here becasue the html markup for the modal will be shared bewteen the 2 galleries bc only one modal can be open at a time
  this.modal = document.querySelector('.modal');
  //slecting things inside the modal, using the modal variable from just above
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');
  
  // bind our methods to the instance when we need them - binding it here is important bc we are creating and instance property of the same prototype function / saving reference to the functions, BOUND with this. Bind lets us explicitly supply what "this" will be equal to. BC in our constructor (where this is scoped) "this" is equal to the instance of this.functionName we are creating a new function that has the value of "this" we need bound to it. it won't then change value when used in a callback. 
  //This allows us to hold remove event listeners from the reference we're making here
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handlClickOutside = this.handlClickOutside.bind(this);


  //THESE ARE OUR EVENT LISTENERS!!
  //take images array (selected above in const images) and loop over adding ELs
  //pass the image tag (using event.currentTarget) of whatever image is clicked to the showImage()
  // (e) is the event being used as anon callback function
  this.images.forEach(image => image.addEventListener('click', (event) => this.showImage(event.currentTarget))
  );

  //Loop over each image
  this.images.forEach(image => {
    //attach an event listener for each image
    image.addEventListener('keyup', e => {
      //when that is keyup'd, check if it was 'Enter'
      if (e.key === 'Enter') {
        //if it was 'Enter', show that image
        showImage(e.currentTarget);
      }
    });
  });

  this.modal.addEventListener('click', this.handlClickOutside);
}

Gallery.prototype.openModal = function() {
  //first check if the modal is already open
  if (this.modal.matches('.open')) {
    console.info('modal open');
    return; //stop the function from running
  }
  this.modal.classList.add('open'); 

  //Event listeners to be bound when we open the modal:
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
}

Gallery.prototype.closeModal = function() {
  this.modal.classList.remove('open');
  //TODO: remove event listeners for clicks and keyboard
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPrevImage);
}

Gallery.prototype.handlClickOutside = function(e) {
  //if the thing they actually clicked (the modal) is the same as the the thing we are listening for a click on (modal), close it. 
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
}

Gallery.prototype.handleKeyUp = function(e) {
  if (event.key === 'Escape') {
    return this.closeModal();
  }
  if (event.key === 'ArrowRight') {
    return this.showNextImage();
  }
  if (event.key === 'ArrowLeft') {
    return this.showPrevImage();
  }
}
Gallery.prototype.showNextImage = function() {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
    );
}

Gallery.prototype.showPrevImage = function() {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
    );
}

//when someone clicks on an image we need to update that modal with the associated images and pop open the modalGallery.prototype.showImage = function(el) {
  
Gallery.prototype.showImage = function(el) {
if (!el) {
    console.info('no image to show');
    return;
  }
  //update the modal with this info when clicked: the src, the h2, and p tag
  console.log(el);
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  this.currentImage = el;
  this.openModal();
}

//Use it on the page
//the selectors are being passed in as arguments to the gallery param in the Gallery function above

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));
console.log(gallery1, gallery2);