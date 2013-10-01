var calcDistance = function(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
};

var generateAngle = function(period) { // Period provided in seconds.
  period = period * 1000;
  return ((new Date()) % period) * 2 * Math.PI/(period);
};

var playSound = function(soundfile) {
  document.getElementById("soundPlayer").innerHTML=
  "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
};