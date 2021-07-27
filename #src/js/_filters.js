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
	}