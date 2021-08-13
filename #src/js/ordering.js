class Ordering{
	constructor(){
		this.orderInfoItems = document.querySelectorAll(".order__info-item");
		this.orderInfoItemsRecipient = null;

		this.orderRecipientLoad();
		this.createEvents();
	}

	orderRecipientLoad(event){
		this.orderInfoItemsRecipient = [...this.orderInfoItems].filter(orderInfoItemRecipient => {
			return orderInfoItemRecipient.dataset.order == "recipient"
		})
	}

	toggleRecipientData(event){
		const checkboxInput = event.target,
					orderItemRecipient = findParent(checkboxInput, "order__info-item-checkboxes").nextElementSibling
		;

		orderItemRecipient.classList.toggle("active");
		spoiler(orderItemRecipient, orderItemRecipient.classList.contains("active"));
	}

	createEvents(){
		this.orderInfoItemsRecipient.forEach(orderInfoItemRecipient =>{
			orderInfoItemRecipient.querySelectorAll(".checkbox").forEach(recipientCheckbox =>{
				recipientCheckbox.addEventListener("change", this.toggleRecipientData.bind(this))
			})
		})
	}
}