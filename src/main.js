$(document).ready(function() {
    $('.seat-saved-msg').hide();

    setTimeout(function() {
        $('.loader').fadeOut();
    }, 100);


    // Add smooth scrolling 
    $("a.scroll").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
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
    //Client Side Form Validatiom
    const main = function() {
        $('form').submit(function() {
            const fullName = $('#name').val();

            if (fullName === "") {
                $('.name-error').text('Please enter your first name.').fadeIn();;
                setTimeout(function() {
                    $('.name-error').text('Please enter your first name.').fadeOut();;
                }, 3000);

            }

            return false;
        });

        $('form').submit(function() {
            const info = $('#contactInfo').val();

            if (info === "") {
                $('.info-error').text('Please enter your first name.').fadeIn();

                setTimeout(function() {
                    $('.info-error').text('Please enter your first name.').fadeOut();
                }, 3000);
            };
            return false;
        });
        $('form').submit(function() {

            let contactInfo = $('#contactInfo').val();
            let name = $('#name').val();
            if (contactInfo !== "" && name !== "") {
                $('.seat-saved-msg').fadeIn();
                $('.seat-saved-msg h1').text('See you there ' + name).fadeIn();
                setTimeout(function() {

                    $('.seat-saved-msg').fadeOut();
                    $('.seat-saved-msg h1').text('See you there ' + name).fadeOut();
                    location.reload();
                    $('form').find("input[type=text], textarea").val("");
                }, 3000);

            }
            return true;


        });

    }

    $(document).ready(main);

    lightbox.option({
    'albumLabel':   "picture %1 of %2",
    'fadeDuration': 300,
    'resizeDuration': 150,
    'wrapAround': true
})
});
