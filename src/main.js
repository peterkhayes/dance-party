// Start by setting up global data.

// This is a list of all the kinds of dancers.
// * dancer.js (and your dancers) will add themselves to it.
// * danceFloor.js will use it.
window.kindsOfDancers = {};

// This is a list of all the dancers that have been created.
// * danceFloor.js will add to it when you click on stuff.
// * When you're writing mixins that affect existing dancers, you'll use it.
window.dancers = [];

// When the DOM is ready...
$(document).ready(function(){

  // ... start the dance floor!
  startDanceFloor();

});