// 1

const chessField = {
	rowCount: 8,
	colCount: 8,
	blackCellColor: '#000',
	whiteCellColor: '#fff',
	containerElement: null,
	cellLetters: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
	cellSize: '80px',

	initCells() {
		this.containerElement = document.getElementById('field');
		this.containerElement.innerHTML = '';
		let lines = 8;

		for (let row = 0; row < this.rowCount; row++) {

			const trElem = document.createElement('tr');
			this.containerElement.appendChild(trElem);
			const firstCell = document.createElement('td');
			firstCell.innerText = '' + lines;
			trElem.appendChild(firstCell);
			lines--;
			let colorCode = 8;

			for (let col = 0; col < this.colCount; col++) {
				const cell = document.createElement('td');
				cell.style.height = this.cellSize;
				cell.style.width = this.cellSize;
				if (lines % 2 > 0) {
					if (colorCode % 2 > 0) {
						cell.style.backgroundColor = this.blackCellColor;
					}
				}
				else {
					if (colorCode % 2 === 0) {
						cell.style.backgroundColor = this.blackCellColor;
					}
				}
				trElem.appendChild(cell);
				colorCode--;
			}
		}

		const letterLine = document.createElement('tr');
		this.containerElement.appendChild(letterLine);
		for (let col = 0; col < this.cellLetters.length; col++) {
			const cell = document.createElement('td');
			cell.innerText = '' + this.cellLetters[col];
			cell.style.textAlign = 'center';
			letterLine.appendChild(cell);
		}
	},

};

chessField.initCells();

// 2

 const basket = {
 	food: [
 		{
 			id_food: 1,
 			name_food: 'Арбуз',
 			price_food: 100,
 			mass_food: 2
 		},

 		{
  			id_food: 2,
 			name_food: 'Бок-чой',
 			price_food: 957,
 			mass_food: 1			
 		},

 		{
   			id_food: 3,
 			name_food: 'Укроп',
 			price_food: 5,
 			mass_food: 1	
 		}
 	],

 	basketPrice() {
 		return this.food.reduce((totalPrice, currentProduct) => totalPrice += currentProduct.price_food, 0);
	}
 };


const total = document.createElement('p');
if (basket.basketPrice() > 0) {
	total.innerText = basket.basketPrice();
} else { total.innerText = 'Корзина пуста' }


const line = document.createElement('p');
line.innerText = 'В корзине: ' +  basket.food.length + ' товара(ов) на сумму ' + basket.basketPrice() + ' рублей';
document.querySelector('.prodBasket').appendChild(line);

// 3


let Product = {
 	food: [
 		['Арбуз', 100, 2],
 		['Бок-чой', 957, 1],
 		['Укроп', 5, 1],
 	],
 };

 for (let i = 0; i < Product.food.length; i++) {
	const line = document.createElement('p');
	line.innerText = '' + Product.food[i][0] + ': ' + Product.food[i][1] + '';
	document.querySelector('catalog').appendChild(line); // Uncaught TypeError: Cannot read properties of null (reading 'appendChild')
														 // Пока не удалось избавиться от ошибки
};
