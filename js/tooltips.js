document.addEventListener('DOMContentLoaded', function() {

  M.AutoInit();

  var options = {
   position: "bottom"
 };

  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, options);

  var options2 = {
   shift: 100,
   dist: -5
 };
  var elems2 = document.querySelectorAll('.carousel');
  var instances2 = M.Carousel.init(elems2, options2);
});
