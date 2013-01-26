$(document).ready(function(){

  /* This is a list of the different kinds of dancers. Right now,
   * there's just one, but as you create more types, you'll need
   * to add their factory functions here. */
  var kindsOfDancers = {
    makeBlinkyDancer: makeBlinkyDancer // found in blinkyDancer.js
  };

  /* This is a list of all the dancers that have been created.
   * danceFloor.js will create new dancers and add them to the list.*/
  window.dancers = [];

  /* "window" is a global object that is always defined for javascript
   * running in a web page. So setting a property of window is a trick
   * to make a global variable. You can refer to window.dancers
   * anywhere in order to check what dancers currently exist.*/

  var danceFloor = makeDanceFloor(kindsOfDancers, dancers);
  setupControls(danceFloor);
});