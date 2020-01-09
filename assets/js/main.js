$(function() {

    "use strict";

    // Sticky Header
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('#header-menu').addClass("fixed-top");
        } else {
            $('#header-menu').removeClass("fixed-top");
        }
    });

    // Scroll Menu
    $(".navbar-nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Add Active Menu
    $(document).on("click", ".navbar-nav a", function() {
        $(".navbar-nav").find("li").removeClass("active");
        $(this).closest("li").addClass("active");
    });

    // Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    // scrollUp
    /*$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });*/

    // Instafeed Active 
    if($('#Instafeed').length) {

        var feed = new Instafeed({
            get: 'user',
            userId: 6925251571,
            accessToken: '6925251571.1677ed0.5ae0108a22d54c689a42b0df810b29b9',
            target: 'Instafeed',
            resolution: 'thumbnail',
            limit: 9,
            template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',
        });
        
        feed.run(); 
    }

    // Calendar
    $('#showcalendar').zabuto_calendar({
        cell_border: false,
        today: true,
        show_days: true,
        weekstartson: 0,
        nav_icon: {
            prev: '<i class="fa fa-angle-left"></i>',
            next: '<i class="fa fa-angle-right"></i>'
        }
    });

});