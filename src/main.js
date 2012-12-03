$(document).ready(function(){
  var d = makeDancer(100, 400);
  d.elem = $(d.htmlString);
  d.elem.css("left", d.left);
  d.elem.css("top", d.top);
  $(".stage").append(d.elem);
  setInterval(function(){
    d.step();
  }, 1000);
});