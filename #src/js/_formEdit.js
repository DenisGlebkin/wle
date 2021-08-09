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
}