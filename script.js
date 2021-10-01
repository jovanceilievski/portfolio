$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 20){

            $('.header').addClass("sticky");

        }else{

            $('.header').removeClass("sticky");
        }
    })

    $('.hamburger').click(function(){

        $('.header .menu1').toggleClass('active');
        $('.hamburger i').toggleClass('active');

    });

});