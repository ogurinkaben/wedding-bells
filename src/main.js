$(document).ready(function() {
  // Add smooth scrolling 
  $("a.scroll").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }

});

  //carousel
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            "<i class='ti-arrow-circle-left'></i>",
            "<i class='ti-arrow-circle-right'></i>"
        ],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});
