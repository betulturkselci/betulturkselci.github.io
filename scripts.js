// (4-28.Satırlar) 
// Kaynak: https://www.codingnepalweb.com/2020/08/responsive-owl-carousel-slider-using-jquery.html 

$(document).ready(function(){
    $(".carousel1").owlCarousel({
        margin:10,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                
            }
        }
    });
    
  });


$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $('#arrow').css({
                "opacity":"1","pointer-events":"auto"
            });
        }else{
            $('#arrow').css({
                "opacity":"0","pointer-events":"none"
            });
        }
    });
    $('#arrow').click(function(){
        $('html').animate({scrollTop:0},500);

    });
});

window.addEventListener("scroll",function(){
    var header =document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})



