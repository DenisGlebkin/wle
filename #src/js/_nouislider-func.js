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
}