$(document).ready(function() {

    // All'evento mouseenter di li, devo aggiungere la classe show al figlio .dropdown 

    $('.menu li').mouseenter(function() {    
        $(this).children('.dropdown').addClass('show');
    });

    $('.menu li').mouseleave(function() {
        $(this).children('.dropdown').removeClass('show');
    });
});