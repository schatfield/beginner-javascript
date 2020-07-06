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
  //we are using docmunet here becasue the heml markup for the modal will be shared bewteen the 2 galleries bc only one modal can be open at a time
  const modal = document.querySelector('.modal');
  //slecting things inside the modal, using the modal variable from just above
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
}

//Use it on the page
//the selectors are being passed in as arguments to the gallery param in the Gallery function above

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));