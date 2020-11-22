document.addEventListener('DOMContentLoaded', function() {

  M.AutoInit();

  var options = {
   position: "bottom"
 };

  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, options);

  var options2 = {
   shift: 0,
   dist: 0,
   padding: 165,
   numVisible: 5,
   fullWidth: true,
   indicators: true
 };
  var elems2 = document.querySelectorAll('.carousel');
  var instances2 = M.Carousel.init(elems2, options2);



  var options3;
  var elems3 = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems3, options3);

});
