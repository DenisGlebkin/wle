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
}