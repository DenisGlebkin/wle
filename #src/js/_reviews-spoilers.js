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
}