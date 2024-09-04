document.addEventListener('DOMContentLoaded', () => {
	const products = document.querySelectorAll('.product');

	products.forEach(product => {
		const quantityValueElem = product.querySelector('.product__quantity-value');
		const quantityDecBtn = product.querySelector('.product__quantity-control_dec');
		const quantityIncBtn = product.querySelector('.product__quantity-control_inc');
		const addToCartBtn = product.querySelector('.product__add');

		let quantity = parseInt(quantityValueElem.textContent, 10);

		quantityDecBtn.addEventListener('click', () => {
			if (quantity > 1) {
				quantity--;
				quantityValueElem.textContent = quantity;
			}
		});

		quantityIncBtn.addEventListener('click', () => {
			quantity++;
			quantityValueElem.textContent = quantity;
		});

		addToCartBtn.addEventListener('click', () => {
			const cartProductsContainer = document.querySelector('.cart__products');
			const productId = product.dataset.id;
			const productImage = product.querySelector('.product__image').src;

			let existingProduct = cartProductsContainer.querySelector(`.cart__product[data-id='${productId}']`);

			if (existingProduct) {
				const productCountElem = existingProduct.querySelector('.cart__product-count');
				productCountElem.textContent = parseInt(productCountElem.textContent, 10) + quantity;
			} else {
				const cartProductHTML = `
				<div class="cart__product" data-id="${productId}">
				    <img class="cart__product-image" src="${productImage}" alt="Product Image">
					<div class="cart__product-count">${quantity}</div>
				</div>
				`;
	
				cartProductsContainer.insertAdjacentHTML('beforeend', cartProductHTML);
			}

			quantity = 1;
			quantityValueElem.textContent = quantity;
		});
	});
});