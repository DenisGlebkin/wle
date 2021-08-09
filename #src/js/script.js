(function(){
	@@include("_functions.js");


	let isMobile = checkMobile() ? checkMobile() : false; //initiate as false
	// device detection


	const trendsSlider = new Swiper(".trends__content", {
		slidesPerView: "auto",
		spaceBetween: 30,
		speed: 700,
		// loop: true,
		touchRatio: isMobile ? 1 : 0,
		// centeredSlides: true,
		autoplay:{
			delay: 5000,
			disableOnInteraction: false,
			reverseDirection: true,
		},
		pagination:{
			el: ".trends__paginations",
			bulletClass: "trends__paginations-item",
			bulletActiveClass: "trends__paginations-item--active",
			clickable: true
		},
		// breakpoints:{
		// 	1320:{
		// 		slidesPerView: 4,
		// 		slidesPerGroup: 4,
		// 	}
		// }

	});

	const productGalleryThumb = new Swiper(".product-gallery__thumbnails", {
		slidesPerView: 2,
		spaceBetween: 10,
		touchRatio: 0.4,
		speed: 700,
		navigation: {
			nextEl: ".product-gallery__thumbnails-arrow--next",
			prevEl: ".product-gallery__thumbnails-arrow--prev",
		},
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints:{
			576:{
			slidesPerView: 3,
			}
		}
	});

	const productGalleryMain = new Swiper(".product-gallery__main", {
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 700,
		touchRatio: 0,
		thumbs: {
		swiper: productGalleryThumb,
		},
	});

	wishlistProduct(".product-card__wishlist-btn");
	wishlistProduct(".secondary-btn--wish");

	vhCorrection();

	window.addEventListener("resize", vhCorrection);

	$(document).ready(()=>{
		$(".sort-select").niceSelect();
	});

	if ($("#birthDay").length){
		$.datepicker.regional['ru'] = {
			closeText: 'Закрыть',
			prevText: 'Предыдущий',
			nextText: 'Следующий',
			currentText: 'Сегодня',
			monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
			dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
			dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
			dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			weekHeader: 'Не',
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
		};
		$.datepicker.setDefaults($.datepicker.regional['ru']);

		$("#birthDay").datepicker({
			defaultDate: +7
		});
	}

	@@include("_nouislider-func.js");
	@@include("_burgerMenu.js");
	@@include("_filters.js");
	@@include("_formEdit.js");
	@@include("_menuAccordeon.js");
	@@include("_orderProducts.js");
	@@include("_wishlist.js");
	@@include("_reviews-spoilers.js");

	const accordeon = new MenuAccordeon(".menu__list-item");
	const burger = new BurgerMenu({
		burgerBtn: ".burger-menu",
		menu: ".header__menu",
		resolution: 991,
		effect: "sideSlide"
	});
	if (document.querySelector(".filters")) const filtersSpoilers = new Filters();
	if(document.querySelector(".account-form")) const formEdit = new FormEdit();
	if(document.querySelector(".item-order")) const orderProducts = new OrderProducts();
	if (document.querySelector(".product-card__checkbox")) const wishlistItem = new WishlistItem();
	if (document.querySelector(".review-product-item")) const reviewsSpoilerItems = new ReviewsSpoilers();
}())