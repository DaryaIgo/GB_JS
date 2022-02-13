//1

function convertToObj(number) {

	let newObj = {};

	if ( number === 0 ) {

		let newObj = {
			'единицы' : 0,
			'десятки' : 0,
			'сотни' : 0
		};

		console.log(newObj);

	} else if ( number < 999 ) {

		let arr = (""+number).split("").map(Number);
		console.log(arr);

		let newObj = {
			'единицы' : arr[0],
			'десятки' : arr[1],
			'сотни' : arr[2]
		};

		console.log(newObj);

	} else {
		return console.log(newObj)
	}
};

convertToObj(150);
convertToObj(1500);
convertToObj(0);

//2

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

console.log(basket.basketPrice());
