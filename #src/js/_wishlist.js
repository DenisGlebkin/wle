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


}