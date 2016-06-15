$(function() {

    // remove no-js class
    $('html').removeClass('no-js');

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

});