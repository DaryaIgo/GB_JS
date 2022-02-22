for (let i = 0; i < basket.length; i++) {

	let product = document.createElement('div');
	product.className = 'product';

	product.innerHTML = '<div class="name">' + basket[i].name_food 
	+ '</div><div class="name">' + '</div><div class="price">Цена: ' + basket[i].price_food 
	+ ' руб.</div><div class="buyButton" id ="' + basket[i].id_food + '">КУПИТЬ</div>';

	let products = document.getElementById('products');
	products.appendChild(product);

	console.log(basket[i].name_food);
}


function putToBasket(x) {

	let buy = document.createElement('div');
	buy.className = 'buy';
	buy.innerHTML = '' + basket[x.target.id].name_food + ' - ' + basket[x.target.id].price_food + ' руб.';
	let bin = document.getElementById('basket');
	bin.insertBefore(buy, bin.children[bin.children.length - 1]);

	let sum = +document.getElementById('sum').innerHTML;
	let currentSum = basket[x.target.id].price_food + sum;
	document.getElementById('sum').innerHTML = currentSum;
}

let buyButton = document.getElementsByClassName('buyButton');

for (let j = 0; j < (buyButton.length); j++) {
	buyButton[j].onclick = putToBasket;
}
