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
  const images = Array.from(gallery.querySelectorAll('img'));
 
}

//Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));