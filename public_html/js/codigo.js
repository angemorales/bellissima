$(document).ready(inicio);
$(document).ready(animando);


function inicio() {
  $('.slick-slider').slick({
  arrows: true,
  dots: true,    
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '80px',
        margin: '20px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 412,
      settings: {
        arrows: false,
        dots: false,
        centerMode: true,
       /* centerPadding: '40px',*/
        slidesToShow: 1
      }
    }
  ]
  });
}

 
 function animando() {
     new WOW().init();   
 }