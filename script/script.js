
$(document).ready(function(){
	$('.slider').slider();
	$('.scrollspy').scrollSpy();
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('.collapsible').collapsible();
  $('.modal').modal();
  $(".button-collapse").sideNav();
 
});

$(document).ready(function(id) {
    return 'a[href="#' + id + '"]';
  });
         


$('.collapsible').collapsible('open', 0);

  // Close
  $('.collapsible').collapsible('close', 0);

  // Destroy
  $('.collapsible').collapsible('destroy');
