/*eslint-disable*/
console.log('it works');
//a Closure- the ability create a function and creates scope for each of the galleries and have reuseable code
function Gallery(gallery) {
  console.log(gallery);
  if (!gallery) {
    throw new Error('No Gallery Found');
  }
  // select the elements we need
  // since we need to select these things for each of our instances, we are selecting the things we need inside this function instead of outside of it. this will scope the variables to the function- they live only inside this function that way gallery1 and 2 will never clash with each other

  //using gallery instead of document here bc we need to scope everything to the actual gallery that was passed into the querySelector below in gallery1 and gallery2 variables
  const images = Array.from(gallery.querySelectorAll('img'));
  //we are using docmunet here becasue the html markup for the modal will be shared bewteen the 2 galleries bc only one modal can be open at a time
  const modal = document.querySelector('.modal');
  //slecting things inside the modal, using the modal variable from just above
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    //first check if the modal is already open
    if (modal.matches('.open')) {
      console.info('modal open');
      return; //stop the function from running
    }
    modal.classList.add('open');

    //Event listners to be bound when we open the modal:
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }
  
  function closeModal() {
    modal.classList.remove('open');
    //TODO: remove event listeners for clicks and keyboard
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handlClickOutside(e) {
    //if the thing they actually clicked (the modal) is the same as the the thing we are listening for a click on (modal), close it. 
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }
  
  function handleKeyUp(e) {
    if (event.key === 'Escape') {
      return closeModal();
    }
    if (event.key === 'ArrowRight') {
      return showNextImage();
    }
    if (event.key === 'ArrowLeft') {
      return showPrevImage();
    }
  }
  
  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    
  }
  //when someone clicks on an image we need to update that modal with the associated images and pop open the modal
  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }
    //update the modal with this info when clicked: the src, the h2, and p tag
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  //THESE ARE OUR EVENT LISTENERS!!
  //take images array (selected above in const images) and loop over adding ELs
  //pass the image tag (using event.currentTarget) of whatever image is clicked to the showImage()
  // (e) is the event being used as anon callback function
  images.forEach(image => image.addEventListener('click', (event) => showImage(event.currentTarget))
  );

  //Loop over each image
  images.forEach(image => {
    //attach an event listener for each image
    image.addEventListener('keyup', e => {
      //when that is keyup'd, check if it was 'Enter'
      if (e.key === 'Enter') {
        //if it was 'Enter', show that image
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener('click', handlClickOutside);

}

//Use it on the page
//the selectors are being passed in as arguments to the gallery param in the Gallery function above

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));