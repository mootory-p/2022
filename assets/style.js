$( ".mtopmenu, .topclose" ).click(function() {
  // $( this ).toggleClass( "on" );
  $( ".topmenu" ).toggleClass( "on" );
  $( ".blackbg" ).toggleClass( "on" );
});


$(function(){
	setInterval(function(){
		$('.thimg').last().prependTo('.moveimg1').addClass('on');
	}, 3200 );
/* img 중에 마지막 애를 맨앞에 붙임
append/prepend는 영역 뒤/앞에 붙음. */
});


/* slider plugin */

$(document).ready(function() {

  var width = 420;
  var animationSpeed = 700;
  var pause = 3200;
  var currentSlide = 1;
 
  var $slider = $("#thslider");
  var $slideContainer = $slider.find('.moveimg2');
  var $slides = $slideContainer.find('.thimg2');
  var interval;

  function startSlider() {
  interval =  setInterval(function() {
      $($slideContainer).animate({
        "margin-left": "-=" + width
      }, animationSpeed, firstSlide);
    }, pause);

    function firstSlide() {
      currentSlide++;
      if (currentSlide === $slides.length) {
        currentSlide = 1;
        $slideContainer.css("margin-left", 0);
      }
    }
  }

  startSlider();
});



/*  youtube modal  */

$(document).ready(function(){

	var url = $("youtubeVideo").attr('src');
	$("#myModal").on('hide.bs.modal', function(){
			$("#youtubeVideo").attr('src', '');
	});
	$("#myModal").on('show.bs.modal', function(){
			$("#youtubeVideo").attr('src', url);
	});
})

const myModal = document.getElementById('myModal')
myModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget
  const recipient = button.getAttribute('data-bs-whatever');
  $("#youtubeVideo").attr("src", recipient);
})


/*	lightbox */
	lightbox.option({
		'resizeDuration': 200,
		'imageFadeDuration' : 200,
		'wrapAround': false,
		'fitImagesInViewport' : false,
		'disableScrolling' : true,
	});


/*	Swiper - mainpage */	

const swiperwork1 = new Swiper('.swiperwork1', {
  loop: true,
	slidesPerView: "auto",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
  navigation: {
    nextEl: '.swiper-button-next',
  },
});

const swiperphoto = new Swiper('.swiperphoto', {
  loop: false,
	slidesPerView: "auto",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
  navigation: {
    nextEl: '.swiper-button-next',
  },
});

const swiperavi = new Swiper('.swiperavi', {
  loop: false,
	slidesPerView: "auto",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
  navigation: {
    nextEl: '.swiper-button-next',
  },
});
