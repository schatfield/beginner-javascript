console.log('ya ya wes we get it.. IT WORKS!');

/*eslint-disable*/

// grab the tabs
const tabs = document.querySelector('.tabs');
// grab the buttons using tabs and looking for the ones that have the role of "tab"
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// grab the buttons using tabs and looking for the ones that have the role of "tabpanel"
// Array.from turns the tabPanels into an array instead of a nodelist
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

// this function will perform all the necessary actions needed to happen when the click event fires off
function handleTabClick(event) {
  // console.log(event.currentTarget);
  // when somebody clicks on a tab, hide all the tab panels: HIDE EM ALL
  // loop over each tab panel and say that the hidden atribute is equal to true
  tabPanels.forEach( panel => {
    panel.hidden = true;
  });
  // Mark all tabs as unselected, the actual tabButtons 
  tabButtons.forEach( tab => {
    // tab.ariaSelected = false;
    // for aria attributes you must use the setAttribute method
    tab.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  //go back an unselect one of them: SHOW THE ONE WE WANT- the currentTarget is the thing the event is happening to- make it true that it is clicked
  event.currentTarget.setAttribute('aria-selected', true);
  // find the associated tabpanel and show it
  const id  = event.currentTarget.id;
  // METHOD 1
  // const tabPanel = tabs.querySelector(`
  // [aria-labelledby="${id}"]`);
  // console.log(tabPanel);
  // tabPanel.hidden = false;

  // METHOD 2 
  // console.log(tabPanels)
  // .find only works on arrays, we made tabpanels an array above in the variable
  // .find loops, it takes a callback function
  const tabPanel =tabPanels.find(
  panel => panel.getAttribute('aria-labelledby') === id
  );
  console.log(tabPanel);
  tabPanel.hidden = false;
}

// forEach adding event listener
tabButtons.forEach(button => button.addEventListener('click',
 handleTabClick));