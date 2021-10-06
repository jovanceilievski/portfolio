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

    




var slideIndex = [1,1];
var slideId = ["mySlides", "mySlidesUi"]



showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] += n, no)
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

        




    


        
        