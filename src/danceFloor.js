var makeDanceFloor = function(kindsOfDancers, dancers){
  /* Returns an object with an addDancer() method.
   * danceFloor.addDancer() takes a string which must match
   * one of the properties of kindsOfDancers in main.js.
   * A new object of the given type will be created and added
   * to dancers. You shouldn't need to alter this file.
   */
  var danceFloor = {
    width: $("body").width(),
    height: $("body").height(),

    addDancer: function(dancerMakerName){
      // get the kind of dancer we're supposed to make
      var dancerMaker = kindsOfDancers[dancerMakerName];

      // make a dancer with a random position
      var w = Math.random() * danceFloor.width;
      var h = Math.random() * danceFloor.height;
      var d = dancerMaker(w, h);

      d.dance();
      dancers.push(d);
    }
  }

  return danceFloor;
}