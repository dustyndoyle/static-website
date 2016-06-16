$(function() {

    // remove no-js class
    $('html').removeClass('no-js');

    // Create Skill Circles
    $( '.skill-circle' ).each( function() {

        var circleId = $(this).attr('id');
        var circlePercent = $(this).data( 'skillPercent' );

        Circles.create({
            id: circleId,
            radius: 120,
            value: circlePercent,
            width: 20,
            text: function(value){return value + '%';},
            colors: ['#677077', '#f2b632'],
        });
    });

    // Smooth Scroll Nav Links
    $( '.nav-container a' ).on( 'click', function(e) {

        // Get the clicked elements href value
        var selectedElementId = $( this ).attr( 'href' );

        // Check to make sure element exists
        if( $( selectedElementId ).length ) {

            var selectedElementLocation = $( selectedElementId ).offset().top;

            // Animate to that element
            $('html, body').animate({ scrollTop: selectedElementLocation });
            e.preventDefault();
        }
    });

});