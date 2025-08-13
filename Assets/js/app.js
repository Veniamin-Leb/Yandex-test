document.addEventListener('DOMContentLoaded', function() {
  
  const supportButton = document.querySelector('.content__buttons button:first-child');
  const detailsButton = document.querySelector('.content__buttons button:last-child');
  
  
  const ideaSection = document.querySelector('.main__Idea');
  const tableSection = document.querySelector('.main__Table');
  
  
  supportButton.addEventListener('click', function() {
    ideaSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  detailsButton.addEventListener('click', function() {
    tableSection.scrollIntoView({ behavior: 'smooth' });
  });
});



$('.content__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    autoplay: 4000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
});

function updateCounter() {
    if (window.innerWidth <= 800){
      var current = $('.content__slider').slick('slickCurrentSlide') + 1;
    } else var current = $('.content__slider').slick('slickCurrentSlide') + 3;
    
    var total = $('.content__slider').slick('getSlick').slideCount;
    $('.slider-counter .current').text(current);
    $('.slider-counter .total').text(total);

  }
  

  $('.slick-prev').click(function(){
    $('.content__slider').slick('slickPrev');
  });
  
  $('.slick-next').click(function(){
    $('.content__slider').slick('slickNext');
  });
  

  updateCounter();
  $('.content__slider').on('afterChange', updateCounter);


function initSliderOnMobile() {
    const $slider = $('.content__greed');
    
    if (window.innerWidth <= 800) {
        if (!$slider.hasClass('slick-initialized')) {
            $slider.slick({
                infinite: false,
                dots: true,          
                arrows: true,       
                slidesToShow: 1,     
                slidesToScroll: 1,   
                adaptiveHeight: true,
                prevArrow: '<button type="button" class="slick-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.07664 15.923L1.15357 8.9999L8.07664 2.07682" stroke="white" stroke-width="1.63636" stroke-linecap="square"/></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.92336 2.0769L8.84644 8.99998L1.92336 15.9231" stroke="white" stroke-width="1.63636" stroke-linecap="square"/></svg></button>',
            });
        }
    } else {

        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick'); 
        }
    }
}

$(document).ready(function() {
    initSliderOnMobile();
    $(window).on('resize', initSliderOnMobile);
});


updateArrowStates();

$('.content__greed').on('afterChange', function() {
    updateArrowStates();
});

function updateArrowStates() {
    const slider = $('.content__greed');
    const currentSlide = slider.slick('slickCurrentSlide');
    const totalSlides = slider.slick('getSlick').slideCount;

    if (currentSlide === 0) {
        $('.slick-prev').addClass('slick-disabled');
    } else {
        $('.slick-prev').removeClass('slick-disabled');
    }

    if (currentSlide === totalSlides - 1) {
        $('.slick-next').addClass('slick-disabled');
    } else {
        $('.slick-next').removeClass('slick-disabled');
    }
}