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
	}