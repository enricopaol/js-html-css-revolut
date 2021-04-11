$(document).ready(function() {

    // All'evento mouseenter di li, devo aggiungere la classe show al figlio .dropdown 

    $('.menu li').mouseenter(function() {    
        $(this).children('.dropdown').addClass('show'); 

        if (!$(this).hasClass('btn')) {
            $(this).children('a').css('color', '#030303');  
        }        

        if ($(this).hasClass('icon')) {
            $('.icon i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
    });

    $('.menu li').mouseleave(function() {
        $(this).children('.dropdown').removeClass('show');

        
        if (!$(this).hasClass('btn')) {
            $(this).children('a').css('color', '#a8aeb3');
        }

        if ($(this).hasClass('icon')) {
            $('.icon i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
    });


    // Dropdow Burger Menu
    $('.dropdown-icon').click(function() {
        $(this).siblings('.dropdown-burger').slideToggle(500);

        if ($(this).children('i').hasClass('fa-chevron-down')) {
            $(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else if ($(this).children('i').hasClass('fa-chevron-up')) {
            $(this).children('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }        
    });

    // Slide Left Burger Menu
    $('.burger > a').click(function() {
        $('.slide-menu-container').addClass('active');
    });

    $('.exit-icon').click(function() {
        $('.slide-menu-container').removeClass('active');
    });

    // Toccare ovunque per chiudere il menu
    $(document).click(function(e) {
        var target = $(e.target);
        if (target.is(".burger > a i, .slide-menu-container, .slide-menu, li, li a, li span, li span i, .menu-dropdown-burger, .button") === false) {
          $('.slide-menu-container').removeClass("active");          
        }
    });

});