(function(){
		function checkMobile() {
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
			return true;
		}
	}

	function spoiler(elem, isOpen) {
		if (isOpen) {
			elem.style.height = `${elem.scrollHeight}px`;
		} else {
			elem.style.height = `0`
		}
	};

	function vhCorrection() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	function wishlistProduct(btnClass) {
		let wishlistBtns = document.querySelectorAll(btnClass);

		wishlistBtns.forEach(btn => {
			btn.addEventListener("click", (event) => {
				event.preventDefault();
				event.currentTarget.classList.toggle("active")
			})
		})
	}

	function findParent(element, cls) {
		while ((element = element.parentElement) && !element.classList.contains(cls));
		return element;
	};


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

	const priceSlider = document.querySelector(".filter__price-slider");
const priceInputs = document.querySelectorAll(".filter__price input");

if (priceSlider) {
	noUiSlider.create(priceSlider, {
		start: [5700, 54600],
		connect: true,
		// tooltips: [wNumb({
		// 	decimals: 0
		// }), wNumb({
		// 	decimals: 0
		// })],
		range: {
			'min': 5700,
			'max': 54600
		}
	});

	priceSlider.noUiSlider.on('update', (values, index) => {
		priceInputs[index].value = Math.round(values[index]);
	});

	priceInputs.forEach((priceInputElem, index) => {
		priceInputElem.addEventListener('change', function () {
			priceSlider.noUiSlider.setHandle(index, this.value);
		});
		priceInputElem.addEventListener("blur", function() {
			priceSlider.noUiSlider.setHandle(index, this.value);
		})
		// priceInputElem.addEventListener("keyup", function() {
		// 	priceSlider.noUiSlider.setHandle(index, this.value);
		// })
	})
};
	class BurgerMenu {
	constructor(params) {
		// ? burgerBtn - класс бургер-кнопки
		//? menu - клас обёртки меню, которое отрывается/закрывается
		//? resolution - разрешение на котором срабатывает бургер
		// ? effect - "sideSlide" двигается сбоку, иначе регулируется высота

		this.menuBtn = document.querySelector(params.burgerBtn);
		this.menuBody = document.querySelector(params.menu);
		this.menuBtnActiveClass = `${params.burgerBtn.replace(".", "")}--active`;
		this.isSideSlideEffect = params.effect === "sideSlide" ? true : false;
		this.screenWidth = params.resolution ? params.resolution : 768;
		this.popupBg = document.querySelector(".header__popup-bg");

		this.load(this.screenWidth);
		this.createEvents();
	}

	toggleMenu() {
		if (this.popupBg.classList.contains("popup-bg--active") === this.menuBtn.classList.contains(this.menuBtnActiveClass)) {
			document.body.classList.toggle("active");
			this.popupBg.classList.toggle("popup-bg--active");

			this.menuBtn.classList.toggle(this.menuBtnActiveClass);
			if (this.menuBtn.classList.contains(this.menuBtnActiveClass)) {
				this.isSideSlideEffect ? this.menuBody.style.transform = "translateX(0%)" : this.menuBody.style.height = `${this.menuBody.scrollHeight}px`;
			} else {
				this.isSideSlideEffect ? this.menuBody.style.transform = "translateX(-100%)" : this.menuBody.style.height = "0px";
			}
		}
	}

	load() {
		if (document.body.offsetWidth > this.screenWidth) {
			this.isSideSlideEffect ? this.menuBody.style.transform = "translateX(0%)" : this.menuBody.style.height = "auto";
		} else {
			this.isSideSlideEffect ? this.menuBody.style.transform = "translateX(-100%)" : this.menuBody.style.height = "0px";

			if (this.menuBtn.classList.contains(this.menuBtnActiveClass)) this.toggleMenu();
		}
	}


	createEvents() {
		this.menuBtn.addEventListener("click", this.toggleMenu.bind(this));
		window.addEventListener("resize", this.load.bind(this));
		this.popupBg.addEventListener("click", this.toggleMenu.bind(this))
	}
};
		class Filters {
		constructor() {
			this.filtersElement      = document.querySelector(".filters");
			this.filterElementParent = this.filtersElement.parentElement;
			this.filtersNames        = this.filtersElement.querySelectorAll(".filter__name");
			this.filtersCheckboxes   = this.filtersElement.querySelectorAll(".filter__checkbox");
			this.filterBtn           = document.querySelector(".page-content__filters-btn");
			this.popupBg             = document.querySelector(".page-content__popup-bg");

			this.load();
			this.createEvents();
		}

		load() {
			this.filtersNames.forEach(filterName => {
				let filterBody = filterName.nextElementSibling;
				filterBody.style.height = `${filterBody.scrollHeight}px`;
			})
		}

		togglepoiler(event) {
			let currentName = event.currentTarget,
				currentSpoiler = currentName.nextElementSibling;

			currentName.classList.toggle("shown");

			spoiler(currentSpoiler, currentName.classList.contains("shown"));
		}

		toggleFilters(){
			if (this.filterElementParent.classList.contains("active") === this.popupBg.classList.contains("popup-bg--active")) {
					document.body.classList.toggle("active");
					this.popupBg.classList.toggle("popup-bg--active");
					this.filterElementParent.classList.toggle("active");
			}
		}

		toggleCheck(event){
			let currentCheckbox = event.currentTarget,
					checkboxName = currentCheckbox.getAttribute("name"),
					checkboxValue = currentCheckbox.getAttribute("value"),
					isCheckboxChecked = currentCheckbox.checked ? true : false,
					selectedFiltersElem = document.querySelector(".selected-filters")
			;

			if (isCheckboxChecked){
				let label = document.createElement("div");
				label.classList.add("selected-filters__item");
				label.dataset.name = checkboxName;
				label.dataset.value = checkboxValue;
				label.innerText = currentCheckbox.nextElementSibling.innerText;

				selectedFiltersElem.append(label);

				this.selectedFiltersEvents(selectedFiltersElem);
			}
			else{
				let currentSelectedFilterLabel = selectedFiltersElem.querySelector(`.selected-filters__item[data-name="${checkboxName}"][data-value="${checkboxValue}"]`);
				
				this.removeSelectedFilterLabel(null, currentSelectedFilterLabel);
			}
		}

		removeSelectedFilterLabel(event, selectedFilter){
			let currentSelectedFilter = event ? event.currentTarget : selectedFilter;

			if (event) {
				let currentFilterName = currentSelectedFilter.dataset.name,
						currentFilterValue = currentSelectedFilter.dataset.value
				;

				this.filtersElement.querySelector(`input[name="${currentFilterName}"][value="${currentFilterValue}"]`).checked = false;
			}

			currentSelectedFilter.remove();
			
		}

		selectedFiltersEvents(selectedFiltersElem){
			selectedFiltersElem.querySelectorAll(".selected-filters__item").forEach(selectedFilter => {
				selectedFilter.addEventListener("click", this.removeSelectedFilterLabel.bind(this));
			})
		}

		createEvents() {
			this.filtersNames.forEach(filterName => {
				filterName.addEventListener("click", this.togglepoiler.bind(this));
			});

			this.filtersCheckboxes.forEach(checkbox =>{
				checkbox.querySelector('input[type="checkbox"]').addEventListener("change", this.toggleCheck.bind(this));
			});

			this.filterBtn.addEventListener("click", this.toggleFilters.bind(this));

			this.popupBg.addEventListener("click", this.toggleFilters.bind(this));
		}
	};
	class FormEdit{
	 constructor(){
		 this.formEditBtns = document.querySelectorAll(".account-form__edit-btn");
		 this.formCancelBtns = document.querySelectorAll(".account-form__cancel-btn");

		 this.createEvents();
	 }

	 toggleEditForm(event){
		 event.preventDefault();
		 const currentEditBtn = event.currentTarget.classList.contains("account-form__edit-btn") ? event.currentTarget : event.currentTarget.parentElement.parentElement.querySelector(".account-form__edit-btn")
					,currentForm = currentEditBtn.parentElement.parentElement
					,currentFormItems = currentForm.querySelectorAll(".account-form__item");
		 ;
		currentEditBtn.classList.toggle("visually-hidden");
		currentForm.classList.toggle("active");
		currentFormItems.forEach(formItem =>{
			formItem.classList.toggle("active");
		})
	 }

	 createEvents(){
		 this.formEditBtns.forEach(editBtn =>{
			 editBtn.addEventListener("click", this.toggleEditForm.bind(this));
			 editBtn.parentElement.parentElement.addEventListener("submit", this.toggleEditForm.bind(this));
		 })

		 this.formCancelBtns.forEach(cancelBtn =>{
			 cancelBtn.addEventListener("click", this.toggleEditForm.bind(this));
		 })
	 }
};
		class MenuAccordeon {
		constructor(elem) {
			this.accordeonButtons = [...document.querySelectorAll(elem)].filter((button) => button.querySelector(".submenu"));

			this.load();
			this.createEvents();
		}

		load() {
			this.accordeonButtons.forEach((button) => {
				let submenuWrapper = button.querySelector(".menu__submenu");
				if (checkMobile() && window.innerWidth < 992) {
					submenuWrapper.classList.add("mobile");
					submenuWrapper.style.height = "0";
				} else {
					button.classList.remove("shown");
					submenuWrapper.style.height = "auto";
				}
			})

		}

		toggleContent(event) {
			let cuurentBtn = event.currentTarget,
				currentContent = cuurentBtn.querySelector(".menu__submenu");

			if (checkMobile() && window.innerWidth >= 992) {
				this.accordeonButtons.forEach(button => {
					if (button !== cuurentBtn) button.classList.remove("shown");
				})
			}
			cuurentBtn.classList.toggle("shown");

			if (checkMobile() && window.innerWidth < 992) {

				spoiler(currentContent, cuurentBtn.classList.contains("shown"));

				// if (cuurentBtn.classList.contains("shown")){
				// 	currentContent.style.height = `${currentContent.scrollHeight}px`;
				// }
				// else{
				// 	currentContent.style.height = `0`
				// }
			}
		}

		createEvents() {
			this.accordeonButtons.forEach((button) => {
				button.addEventListener("click", this.toggleContent.bind(this));
			})

			window.addEventListener("resize", this.load.bind(this));
		}
	};
	class OrderProducts{
	constructor(){
		this.orders = document.querySelectorAll(".item-order");

		this.createEvents();
	}

	toggleOrderBody(event){
		const currentOrderHeader = event.currentTarget,
					currentOrderBody = currentOrderHeader.nextElementSibling,
					currentOrder = currentOrderHeader.parentElement
		;
		currentOrder.classList.toggle("active");
		
		spoiler(currentOrderBody, currentOrder.classList.contains("active"));
	}

	createEvents(){
		this.orders.forEach(order =>{
			order.querySelector(".item-order__header").addEventListener("click", this.toggleOrderBody.bind(this));
		})
	}
};
	class WishlistItem{
	constructor(){
		this.wishlistItems = document.querySelectorAll(".check-prodcuts-list");

		this.createEvents();
	}

	checkedItem(event, wishlistItem){
		const currentCheckbox = event.target,
					currentWishItem = findParent(currentCheckbox, "check-prodcuts-list"),
					isAnyCheckboxChecked = this.isCheckboxesChecked(currentWishItem)
		;

		this.toggleDelBtn(currentWishItem, isAnyCheckboxChecked);
	}

	toggleDelBtn(wishlistItem, isCheckboxChecked){
		const deleteProductsBtn = wishlistItem.querySelector(".check-prodcuts-list__control-btn--del");

		if (isCheckboxChecked){
			deleteProductsBtn.classList.add("active")
		}
		else{
			deleteProductsBtn.classList.remove("active")
		}
	}

	isCheckboxesChecked(wishlistItem) {
		const checkedCheckboxQuantity = [...wishlistItem.querySelectorAll(".product-card__checkbox")].filter(checkbox => {
			return checkbox.querySelector("input").checked
		})

		return !!checkedCheckboxQuantity.length;
	}

	selectAllCheckboxes(event){
		event.preventDefault();
		const currentBtn = event.currentTarget,
					currentWishlistItem = findParent(currentBtn, "check-prodcuts-list"),
					currentCheckboxes = currentWishlistItem.querySelectorAll(".product-card__checkbox>input")
					;

		currentCheckboxes.forEach(currentCheckbox =>{
			if (!currentCheckbox.checked) currentCheckbox.checked = true;
		})

		this.toggleDelBtn(currentWishlistItem, true);
	}

	createEvents(){
		this.wishlistItems.forEach(wishlistItem =>{
			wishlistItem.querySelectorAll(".product-card__checkbox").forEach(wishlistItemCheckbox =>{
				wishlistItemCheckbox.addEventListener("change", this.checkedItem.bind(this));
			});

			wishlistItem.querySelector(".check-prodcuts-list__control-btn--select-all").addEventListener("click", this.selectAllCheckboxes.bind(this));
		})
	}


};
	class ReviewsSpoilers{
	constructor(){
		this.productReviewItems = document.querySelectorAll(".review-product-item");

		this.createEvents();
	}

	toggleReview(event){
		let currentReviewItemHeader = event.currentTarget,
				currentReviewItem = currentReviewItemHeader.parentElement,
				isReviewContains = currentReviewItem.dataset.reviewProduct
		;

		if (isReviewContains){
			let currentReviewItemContent = currentReviewItemHeader.nextElementSibling;

			currentReviewItem.classList.toggle("active");
			spoiler(currentReviewItemContent, currentReviewItem.classList.contains("active"));

		}
			
		// currentReviewItem.classList.toggle("active");
		// spoiler(currentReviewItemContent, currentReviewItem.classList.contains("active"));
	}

	createEvents(){
		this.productReviewItems.forEach(reviewItem =>{
			reviewItem.querySelector(".review-product-item__header").addEventListener("click", this.toggleReview.bind(this));
		})
	}
};

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