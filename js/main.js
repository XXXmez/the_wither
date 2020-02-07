var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    navigation: {
    	nextEl: '.arrow',
  	},
  	breakpoints: {
  		768: {
  			slidesPerView: 2
  		}
  	}
});

var menuButton = document.querySelector('.menu-btn');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
	menu.classList.toggle('active')
	menuButton.classList.toggle('active')
})