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
  }

  function closeModal() {
    modal.classList.remove('open');
    //TODO :add event listeners for clicks and keyboard
  }

  function handlClickOutside(e) {
    //if the thing they actually clicked (the modal) is the same as the the thing we are listening for a click on (modal), close it. 
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  //when someone clicks on an image we need to update that modal with the associated images and pop open the modal
  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }
    //update these things in the modal when clicked: the src, the h2, and p tag
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
  modal.addEventListener('click', handlClickOutside);
  window.addEventListener('keyup', handleKeyUp);
}

//Use it on the page
//the selectors are being passed in as arguments to the gallery param in the Gallery function above

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));