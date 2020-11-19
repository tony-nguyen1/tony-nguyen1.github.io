console.log("Hi");

document.addEventListener('DOMContentLoaded', function() {

  M.AutoInit();

  var options = {
   position: "bottom"
 };

  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, options);
});
