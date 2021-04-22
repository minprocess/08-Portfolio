/*
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    console.log("elems");
    console.log(elems);
    var instances = M.Sidenav.init(elems, options);
    console.log("instances");
    console.log(instances);
  });
*/
  // Or with jQuery
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
