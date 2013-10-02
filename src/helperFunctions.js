var calcDistance = function(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
};

var generateAngle = function(period) { // Period provided in seconds.
  period = period * 1000;
  return (-1)*((new Date()) % period) * 2 * Math.PI/(period);
};

var playSound = function(soundfile) {
  document.getElementById("soundPlayer").innerHTML=
  "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
};

var findNearestPartner = function (array, index) {
  var dancer = array[index];
  var x = dancer.x_pos();
  var y = dancer.y_pos();

  var minDistance = 20000;
  var bestMatch = -1;

  for (var i = 0; i < array.length; i++) {
    if (i !== index) {
      var distance = calcDistance(dancer.x_pos(), dancer.y_pos(), array[i].x_pos(), array[i].y_pos());
      if (distance < minDistance) {
        minDistance = distance;
        bestMatch = i;
      }
    }
  }
  return bestMatch;
};