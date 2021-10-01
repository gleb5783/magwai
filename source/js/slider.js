$(document).ready(function(){
    $('.main-content__slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
    });
    
    document.querySelector('#slick-slide-control00').innerText = 'Dogie coin';
    document.querySelector('#slick-slide-control01').innerText = 'Падение';
    document.querySelector('#slick-slide-control02').innerText = 'Возвращение';
  });