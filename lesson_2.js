//1

var a = 1, b = 1, c, d;

c = ++a; 
alert(c); // 2

d = b++; 
alert(d); // 1

c = (2+ ++a); 
alert(c); // 5

d = (2+ b++);

alert(d); //4
alert(a);   // 3
alert(b);   // 3

// 2

var a = 2;
var x = 1 + (a *= 2); //5

// 3

let oneDigit = +prompt('Введите число а:');
let twoDigit = +prompt('Введите число b:'); 

if (oneDigit > 0 && twoDigit > 0) {
	alert(oneDigit - twoDigit);
} else if (oneDigit < 0 && twoDigit < 0) {
	alert(oneDigit * twoDigit);
} else if ((oneDigit <= 0 && twoDigit >=0 ) || (oneDigit >= 0 && twoDigit <= 0)) {
	alert(oneDigit + twoDigit);
}

// 4
let oneDigit = 0;

switch (oneDigit) {
	case 0:
		alert('0');
	case 1:
		alert('1');
	case 2:
		alert('2');
	case 3:
		alert('3');
	case 4:
		alert('4');
	case 5:
		alert('5');
	case 6:
		alert('6');
	case 7:
		alert('7');
	case 8:
		alert('8');
	case 9:
		alert('9');
	case 10:
		alert('10');
	case 11:
		alert('11');
	case 12:
		alert('12');
	case 13:
		alert('13');
	case 14:
		alert('14');
	case 15:
		alert('15');
}

// 5 + 6

function add(argOne, argTwo) {
	result = argOne + argTwo
	alert(result)	
}

function subt(argOne, argTwo) {
	result = argOne - argTwo
	alert(result)
}

function mult(argOne, argTwo) {
	result = argOne * argTwo
	alert(result)
}

function div(argOne, argTwo) {
	result = argOne / argTwo
	alert(result)
}

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case 'add':
			result = add(arg1, arg2);
		case 'subt':
			result = subt(arg1, arg2);
		case 'mult':
			result = mult(arg1, arg2);
		case 'div':
			result = div(arg1, arg2);
	}
}

// mathOperation(6, 3, 'add')
// mathOperation(6, 3, 'subt')
// mathOperation(6, 3, 'mult')
// mathOperation(6, 3, 'div')

// 7

// alert( null > 0); // false
// alert( null < 0); // false
// alert( null === 0); // false
// alert( null == 0); // false
// alert( null >= 0); // true


// 8

function power(val, pow) {
	if (pow == 1) {
		return val;
	} else {
		return val * power(val, pow - 1);
	}
}

alert(power(2, 2));
