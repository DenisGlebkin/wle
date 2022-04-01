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

		// this.load(this.screenWidth);
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

		// if (document.body.offsetWidth < this.screenWidth && this.menuBtn.classList.contains(this.menuBtnActiveClass)) this.toggleMenu();
	}


	createEvents() {
		this.menuBtn.addEventListener("click", this.toggleMenu.bind(this));
		window.addEventListener("resize", this.load.bind(this));
		this.popupBg.addEventListener("click", this.toggleMenu.bind(this))
	}
}