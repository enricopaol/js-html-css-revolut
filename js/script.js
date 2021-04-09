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

});