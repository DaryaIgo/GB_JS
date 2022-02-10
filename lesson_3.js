//1

let i = 0;
let n = 100;

while (i < n) {
    if (isPrime(i)) {
      console.log(i);
    }
    i++;
  }

  function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  //2


 const basket = [
 	['id0', 'Арбуз', 100, 1],
 	['id1', 'Бок-чой', 957, 3],
 	['id2', 'Укроп', 5, 1],
 ];

function basketPrice(basket) {
	let totalPrice = 0;
 	return basket.reduce((totalPrice, currentProduct) => totalPrice + currentProduct[2]*currentProduct[3], 0);
}

console.log(basketPrice(basket));

// 3

for(let i = 0; i < 10 ; console.log(i++)){}

//4

repeatSign = 'x';

for(let i = 0; i < 20; i++) {
	console.log(repeatSign.repeat(i));
}