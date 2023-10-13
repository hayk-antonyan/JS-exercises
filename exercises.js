//Տրված են իրարից տարբեր a, b, c թվերը։ կազմել բլոկ սխեմա և ծրագիր, որոնք 


//21 կարտածեն տրված թվերից մեծի արժեքը
// let a=25;
// let b=6;
// let c=12;

// function greatValue(){
// 	if (a>b && a>c){
// 		alert(a);
// 	}else if(b>a && b>c){
// 		alert(b);
// 	}else if(c>a && c>b){
// 		alert(c);
// 	}
// }greatValue();


//22 կարտածեն տրված թվերից փոքրի արժեքը

// let a=25;
// let b=6;
// let c=12;

// function lessValue(){
// 	if (a<b && a<c){
// 		alert(a);
// 	}else if(b<a && b<c){
// 		alert(b);
// 	}else if(c<a && c<b){
// 		alert(c);
// 	}
// }lessValue();


// 23 եթե տրված թվերից գոնե մեկը հավասար է մեկի, ապա կարտածեն true, հակառակ դեպքում ՝ false

// let a=25;
// let b=6;
// let c=12;

// function ifOneIsEqual(){
// 	if(a==1 || b==1 || c==1){
// 		alert("true");
// 	}else{
// 		alert("false");
// 	}
// }ifOneIsEqual();


//24 եթե տրված թվերից ճիշտ երկուսը հավասար են երկուսի, ապա կարտածեն true, հակառակ դեպքում ՝ false

// let a=25;
// let b=6;
// let c=12;

// function ifTwoAreEqual(){
// 	if(a==2 && b==2 && c!==2){
// 		alert("true");
// 	}else if(a==2 && c==2 && b!==2){
// 		alert("true");
// 	}else if(b==2 && c==2 && a!==2){
// 		alert("true");
// 	}else{
// 		alert("false");
// 	}
// }ifTwoAreEqual();


//25 եթե այդպիսի երկարություն ունեցող հատվածներով հնարավոր է կառուցել եռանկյունի, ապա կտպեն y=1, հակառակ դեպքում՝ y=2 

// let a=25;
// let b=6;
// let c=12;

// function creatingRectangle(){
// 	if (a>0 && b>0 && c>0) {
// 		alert("y=1");
// 	}else{
// 		alert("y=2");
// 	}
// }creatingRectangle();


// 26  կարտածեն մեկ, եթե տրված թվերից գոնե մեկը զույգ է, այլապես երկու։

	// let a=25;
  // let b=6;
  // let c=12;

	// function double(){
	// 	if(a%2==0 || b%2==0 || c%2==0){
	// 		alert(1);
	// 	}else{
	// 		alert(2);
	// 	}
	// }double();


// 27 կարտածեն true, եթե տրված թվերը թվաբանական պրոգրեսիա են կազմում, հակառակ դեպքում՝ false

// let a=3;
// let b=5;
// let c=9;

// function isArithmetic(a, b, c){
// 	if((b - a) === (c - b)){
// 		alert("true");
// 	}else{
// 		alert("false");
// 	}
// };
// isArithmetic(a, b, c);


// 28 կարտածեն true, եթե տրված թվերը երկրաչափական պրոգրեսիա են կազմում, հակառակ դեպքում՝ false

// let a=6;
// let b=12;
// let c=24;

// function isGeometric(a, b, c){
// 	if(b / a === c / b){
// 		alert("true");
// 	}else{
// 		alert("false");
// 	}
// };
// isGeometric(a, b, c);


// 29 Տրված թվերը կարտածեն ըստ աճման կարգի հաջորդականության

// it works by using array sort and join methods 

// const x = 7;
// const y = 3;
// const z = 9;
// function displayInAscendingOrder(x, y, z) {
//   const numbers = [x, y, z];
 
//   numbers.sort((a, b) => a - b);
//   alert(numbers.join(", ")); //returns an array as a string
// }
// displayInAscendingOrder(x, y, z);



// 30 Տրված թվերը կարտածեն ըստ նվազման կարգի հաջորդականության

// const x = 7;
// const y = 3;
// const z = 9;
// function displayInDescendingOrder(x, y, z) {

//   const numbers = [x, y, z];
//   numbers.sort((a, b) => b - a);
//   alert(numbers.join(", "));
// }
// displayInDescendingOrder(x, y, z);



// Տրված են իրարից տարբեր a, b, c, և d թվերը։ Կազմել բլոկ-սխեմա, և ծրագիր, որոնք կարտածեն`

// 31 կարտածեն տրված թվերից մեծագույնի արժեքը

// let a = 5;
// let b = 9;
// let c = 2;
// let d = 12;

// const  theBiggest =  Math.max(a, b, c, d);

// alert(theBiggest);

// 32 կարտածեն տրված թվերից մեծագույնի արժեքը

// let a = 5;
// let b = 9;
// let c = 2;
// let d = 12;

// const  theSmallest =  Math.min(a, b, c, d);

// alert(theSmallest);

// 33 կարտածեն true, եթե տրված թվերից գոնե մեկը հավասար է մեկի, այլապես false

// let a = 5;
// let b = 9;
// let c = 1;
// let d = 12;

// if (a == 1 || b == 1 || c == 1 || d==1){
// 	alert("true");
// }else{
// 	alert("false");
// }

// 34 եթե տրված թվերից երկուսի գումարը հավազար է մյուս երկուսին, կարտածեն true, այլապես false

// let a = 5;
// let b = 8;
// let c = 4;
// let d = 7;

// if( a + b == c + d || a + c == b + d || a + d == b + c){
// 	alert("true");
// }else{
// 	alert("false");
// }



// 35 եթե տրված թվերից մեկը հավազար է մյուս երեքի գումարին, կարտածեն true, այլապես false

// let a = 5;
// let b = 8;
// let c = 4;
// let d = 17;

// if( a == b+c+d || b == a+c+d || c == a+b+d || d == a+b+c){
// 	alert("true");
// }else{
// 	alert("false");
// }


// 36 եթե տրված թվերից գոնե երկուսը կենտ են, արտածել 1, հակառակ դեպքում 2

// let a = 2;
// let b = 8;
// let c = 5;
// let d = 7;

// if ( a % 2 !==0 && b % 2 !==0 ){
// 	alert("1");
// }else if( a % 2 !==0 && c % 2 !==0){
// 	alert("1");
// }else if( a % 2 !==0 && d % 2 !==0){
// 	alert("1");
// }else if(b % 2 !==0 && c % 2 !==0 ){
// 	alert('1');
// }else if(b % 2 !==0 && d % 2 !==0 ){
// 	alert('1');
// }else if(c % 2 !==0 && d % 2 !==0 ){
// 	alert('1');
// }else{
// 	alert('2');
// }


//another way to find out is the number odd or not
// function isOdd(number) {
//   return number % 2 !== 0;
// }
// const num = 7; // Replace this with the number you want to check
// if (isOdd(num)) {
//   alert(`${num} is an odd number.`);
// } else {
//  alert(`${num} is an even number.`);
// }


// 37  կարտածեն true, եթե տրված թվերը կազմում են թվաբանական պրոգրեսիա, այլապես false

// let a = 13;
// let b = 8;
// let c = 25;
// let d = 2;

// function isArithmeticProgression(a, b, c, d) {
//   return (b - a) === (c - b) && (c - b) === (d - c);
// }
// if ( isArithmeticProgression === true){
// 	alert("true");
// }else{
// 	alert("false");
// }


// 38 եթե տրված թվերը կազմում են երկրաչափական պրոգրեսիա, ապա կարտածեն true, հակառակ դեպքում՝ false 

// let a = 2;
// let b = 4;
// let c = 8;
// let d = 16;

// function isGeometricProgression(a, b, c, d) {
//   if ((b / a) === (c / b) && (c / b) === (d / c)){
// 		alert("true");
// }else{
// 		alert("false");
// }
// };
// isGeometricProgression(a, b, c, d);

// 39 Տրված թվերը կարտածեն ըստ աճման կարգի հաջորդականության

// let a = 2;
// let b = 4;
// let c = 8;
// let d = 16;

// function displayInAscendingOrder(a, b, c, d) {
//   const numbers = [a, b, c, d];

//   numbers.sort((x, y) => x - y);
//   alert(numbers.join(", ")); //returns an array as a string
// }
// displayInAscendingOrder(a, b, c, d);

 //40 Տրված թվերը կարտածեն ըստ աճման կարգի հաջորդականության

// let a = 29;
// let b = 4;
// let c = 8;
// let d = 16;

// function displayInDescendingOrder(a, b, c, d) {
//   const numbers = [a, b, c, d];

//   numbers.sort((x, y) => y - x);
//   alert(numbers.join(", ")); //returns an array as a string
// }
// displayInDescendingOrder(a, b, c, d);



//Տրված է եռանիշ թիվ։ Կազմել բլոկ սխեմա և ծրագիր, որոնք 


// 51 Տրամաբանական տիպի փոփոխականին վերագրել true արժեք, 
// եթե եռանիշ թվի միավորների թվանշանը հավասար է տասնավորների և հարյուրավորների թվանշանների գումարին, 
// հակառակ դեպքում false: Արտածել փոփոխականի արժեքը

// Replace this with your three-digit number
// const t = 527;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t % 100) / 10);
// const hundredsDigit = Math.floor(t / 100);

// const isConditionMet = unitsDigit === tensDigit + hundredsDigit;

// alert(isConditionMet);


//52

// const t = 599;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t % 100) / 10);
// const hundredsDigit = Math.floor(t / 100);
 	
// if(unitsDigit === tensDigit || unitsDigit === hundredsDigit || tensDigit === hundredsDigit){
// 	alert("true");
// }
// 	alert("false");


// 53

// const t = 599;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t % 100) / 10);
// const hundredsDigit = Math.floor(t / 100);

// let k = t / (unitsDigit + tensDigit + hundredsDigit);

// alert(k);


// 54

// const t = 124;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t % 100) / 10);
// const hundredsDigit = Math.floor(t / 100);

// if ( unitsDigit > tensDigit && unitsDigit > hundredsDigit ){
// 	alert("The biggest value is" + " " + unitsDigit);
// }else if( tensDigit > unitsDigit && tensDigit> hundredsDigit){
// 	alert("The biggest value is" + " " + tensDigit);
// }else{
// 	alert("The biggest value is" + " " + hundredsDigit);
// }


// 55

// const t = 824;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t % 100) / 10);
// const hundredsDigit = Math.floor(t / 100);

// if ( unitsDigit < tensDigit && unitsDigit < hundredsDigit ){
// 	alert("The smallest value is" + " " + unitsDigit);
// }else if( tensDigit < unitsDigit && tensDigit < hundredsDigit){
// 	alert("The smallest value is" + " " + tensDigit);
// }else{
// 	alert("The smallest value is" + " " + hundredsDigit);
// }

// 56

// const t = 178;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t % 100) / 10);
// const hundredsDigit = Math.floor(t / 100);

// alert("Units digit is "+ unitsDigit);
// alert("Tens digit is " + tensDigit);
// alert("Hundreds digit is " + hundredsDigit);
// const digitsRatio = ( unitsDigit + tensDigit + hundredsDigit ) / t;
// if(unitsDigit > tensDigit){
// 	alert("Digits ratio is" + " " + digitsRatio);
// }else{
// 	alert("The number is" + " " + t);
// }


// 57

// const t = 123;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t % 100) / 10);
// const hundredsDigit = Math.floor(t / 100);

// const tensToUnits = tensDigit / unitsDigit;
// const hundredsToUnits = hundredsDigit / unitsDigit;

// alert("Tens to units is r=equal to " + tensToUnits);
// alert("Hundreds to units is equal to " + hundredsToUnits);

// if(t > 300){
// 	alert("Tens digit divided to units is equal to " + " " + tensToUnits);
// }else{
// 	alert("Hundreds digit divided to units is equal to " + " " + hundredsToUnits);
// }


//58

// const t = 459;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t % 100) / 10);
// const hundredsDigit = Math.floor(t / 100);

// if( tensDigit + hundredsDigit < 5){
// 	let a = t;
// 	alert("The value of a is equal to " + a);
// }else{
// 	let b = t;
// 	alert("The value of b is equal to " + b);
// }
// alert("The value of t is equal to " + t);


// 59 Ascending order

// const t = 819;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t % 100) / 10);
// const hundredsDigit = Math.floor(t / 100);

// const numbersArray = [unitsDigit, tensDigit, hundredsDigit];

// numbersArray.sort(function(a, b){
// 	return a - b;
// });
// alert("Numbers in ascending order: " + numbersArray.join(', '));

// 60 Descending order

// const t = 819;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t % 100) / 10);
// const hundredsDigit = Math.floor(t / 100);

// const numbersArray = [unitsDigit, tensDigit, hundredsDigit];

// numbersArray.sort(function(a, b){
// 	return b - a;
// });
// alert("Numbers in descending order: " + numbersArray.join(', '));


//61 Տրված է քառանիշ թիվ, կազմել տվյալ խնդրի բլոկ-սխեման և ծրագիրը։

// const t = 4325;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t / 10) % 10);
// const hundredsDigit = Math.floor((t / 100) % 10);
// const thousandsDigit = Math.floor( t / 1000); 


// if(unitsDigit + tensDigit == hundredsDigit + thousandsDigit){
// 	alert("true");
// }else{
// 	alert("false");
// }alert(t);


// 62	

// const t = 4321;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t / 10) % 10);
// const hundredsDigit = Math.floor((t / 100) % 10);
// const thousandsDigit = Math.floor( t / 1000); 


// if( t < 5000 && unitsDigit + hundredsDigit !== 0 ){
// 	alert( t / (unitsDigit + hundredsDigit));
// }else{
// 	alert( t / (thousandsDigit + tensDigit));
// }


// 63 

// const t = 4325;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t / 10) % 10);
// const hundredsDigit = Math.floor((t / 100) % 10);
// const thousandsDigit = Math.floor( t / 1000); 

// if( unitsDigit === 1 || tensDigit === 1 || hundredsDigit === 1 || thousandsDigit === 1 ){
// 	alert("1");
// }else{
// 	alert("0");
// }


// 64

// const y  = 4323;

// const unitsDigit = y % 10;
// const tensDigit = Math.floor((y / 10) % 10);

// if (unitsDigit + tensDigit === 5){
// 	let y = ;
// }else{
// 	y = d;
// }
// alert(y);


// 65

// const number = 4326;

// const unitsDigit = number % 10;
// const tensDigit = Math.floor((number / 10) % 10);

// if ( unitsDigit * tensDigit === 12){
// 	alert('y=12');
// }else{
// 	alert('y=0');
// }


// 66

// const t = 7321;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t / 10) % 10);
// const hundredsDigit = Math.floor((t / 100) % 10);
// const thousandsDigit = Math.floor( t / 1000); 


// if( unitsDigit === 4 || thousandsDigit === 4){
// 	alert("YES");
// }else{
// 	alert("NO");
// }

// 67

// const t = 7989;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t / 10) % 10);
// const hundredsDigit = Math.floor((t / 100) % 10);
// const thousandsDigit = Math.floor( t / 1000); 

// const theSum = unitsDigit + tensDigit + hundredsDigit + thousandsDigit;

// theSquareOfTheSum = Math.pow(theSum, 2);

// if( t === theSquareOfTheSum){
// 	alert("YES");
// }else{
// 	alert("NO");
// }

// 68  

// const t = 7983;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t / 10) % 10);
// const hundredsDigit = Math.floor((t / 100) % 10);
// const thousandsDigit = Math.floor( t / 1000); 

// const oneAndHundred = unitsDigit * hundredsDigit;

// if( unitsDigit > tensDigit){
// 	alert(oneAndHundred);
// }else{
// 	alert("1");
// }


// 69

// const t = 1234;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t / 10) % 10);
// const hundredsDigit = Math.floor((t / 100) % 10);
// const thousandsDigit = Math.floor( t / 1000); 

// sumOfDigits = unitsDigit + tensDigit + hundredsDigit + thousandsDigit;
// let y;
// if( sumOfDigits > 20){
// 	y = 1;
// }else{
// 	y = 0;
// }alert(y);


// 70

// const t = 1234;

// const unitsDigit = t % 10;
// const tensDigit = Math.floor((t / 10) % 10);
// const hundredsDigit = Math.floor((t / 100) % 10);
// const thousandsDigit = Math.floor( t / 1000); 

// multipledDigits = unitsDigit * tensDigit * hundredsDigit * thousandsDigit;
// let y;
// if( multipledDigits > 200){
// 	y = 0;
// }else{
// 	y = 1;
// }alert(y);


// 151 Տպել բոլոր այն բնական թվերի գումարը, որոնց վրա առանց մնացորդի բաժանվում է տրված n բնական թիվը

// function sumOfDivisors(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }
// //for example
// const n = 100;
// const result = sumOfDivisors(n);
// alert(`The sum of divisors of ${n} is ${result}`);

// 152 Տպել բոլոր այն բնական թվերի արտադրյալը, որոնց վրա առանց մնացորդի բաժանվում է տրված n բնական թիվը

// function multiplyOfDivisors(n) {
//   let multiply = 1;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       multiply *= i;
//     }
//   }

//   return multiply;
// }
// //for example
// const n = 15;
// const result = multiplyOfDivisors(n);
// alert(`The multiply of divisors of ${n} is ${result}`);


// 153 Տպել բոլոր այն բնական թվերի գումարը, որոնց վրա տրված n բնական թիվը բաժանելիս կմնա 2 մնացորդ

// function sumOfDivisors(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 2) {
//       sum += i;
//     }
//   }

//   return sum;
// }
// //for example
// const n = 5;
// const result = sumOfDivisors(n);
// alert(`The sum of divisors of ${n} is ${result}`);

// 154 Տպել բոլոր այն բնական թվերի արտադրյալը, որոնց վրա տրված n բնական թիվը բաժանելիս կմնա 3 մնացորդ

// function multiplyOfDivisors(n) {
//   let multiply = 1;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 3) {
//       multiply *= i;
//     }
//   }

//   return multiply;
// }
// //for example
// const n = 10;
// const result = multiplyOfDivisors(n);
// alert(`The multiply of divisors of ${n} is ${result}`);


// 155  Տպել բոլոր այն երկնիշ թվերի գումարը, որոնք բազմապատիկ են 3 թվին

//   let sum = 0;

//   for (let i = 10; i <= 99; i++) {
//     if (i % 3 === 0) {
//       sum += i;
//     }
//   }

// alert("The sum of two-digit multiples of 3 is: " + sum);


// 156  Տպել բոլոր այն երկնիշ թվերի արտադրյալը, որոնք բազմապատիկ են 3 և 5 թվերին


// let sum = 1;

//   for (let i = 10; i <= 99; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       sum *= i;
//     }
//   }

// alert("The sum of two-digit multiples of 3 and 5 is: " + sum);


// 157 Տպել բոլոր այն եռանիշ թվերի գումարը, որոնք բազմապատիկ չեն 5 թվին

// let sum = 0;

//   for (let i = 100; i <= 999; i++) {
//     if (i % 5 !== 0) {
//       sum += i;
//     }
//   }

// alert("The sum of three-digit non multiples of 5 is: " + sum);


// 158  Տպել բոլոր այն եռանիշ թվերի արտադրյալը, որոնք բազմապատիկ չեն 2 և 3 թվերին

// let product = 1;

//   for (let i = 100; i <= 105; i++) {
//     if (i % 3 !== 0 && i % 2 !== 0) {
//       product *= i;
//     }
//   }

// alert("The product of three-digit non multiples of 2 and 3 is: " + product);


// 159  Տպել բոլոր այն եռանիշ թվերի արտադրյալը, որոնք 3-ի բաժանելիս կմնա 1 մնացորդ, իս 4-ի բաժանելիս կնմա 2 մնացորդ։

// let product = 1;

//   for (let i = 100; i <= 110; i++) {
//     if (i % 3 == 1 && i % 4 == 2) {
//       product *= i;
//     }
//   }

// alert("The product of three-digit non multiples of 2 and 3 is: " + product);


// 160 Տպել այն ամենափոքր եռանիշ թիվը, որը 16-ով բազմապատկելիս դառնւմ է բնական թվի քառակուսի։

// let n = 1;

//   for (let i = 100; i <= 999; ) {
//     if (i * 16 === n * n) {
//       alert(n);
//       break;
//     }else{
//     	n++;
//     }
//   }

// Version 2

// function findSmallestNumber(){
// 	for (let number = 100; number <= 999; number++ ){
// 		const product = number * 16;
// 		const squareRoot = Math.sqrt(product);

// 		if(Number.isInteger(squareRoot)){
// 			return number;
// 		}
// 	}
// }

// const smallestNumber = findSmallestNumber();
// alert(`The smallest tree-digit number is ${smallestNumber}`);



// 161 Տպել այն ամենափոքր քառանիշ թիվը, որը 26-ով բազմապատկելիս դառնւմ է բնական թվի քառակուսի։

//   function findSmallestNumber() {
//   for (let num = 1000; num <= 9999; num++) {
//     const product = num * 26;
//     const squareRoot = Math.sqrt(product);

//     // Check if the squareRoot is a whole number (natural number)
//     if (Number.isInteger(squareRoot)) {
//       return num;
//     }
//   }
// }

// const smallestNumber = findSmallestNumber();
// alert(`The smallest four-digit number is ${smallestNumber}`);


// 162 Տպել այն ամենամեծ քառանիշ թիվը, որը 14-ով բազմապատկելիս դառնւմ է բնական թվի քառակուսի։

// function findBiggestNumber() {
//   for (let num = 9999; num >= 1000; num--) {
//     const product = num * 14;
//     const squareRoot = Math.sqrt(product);

//     if (Number.isInteger(squareRoot)) {
//       return num;
//     }
//   }
// }

// const biggestNumber = findBiggestNumber();
// alert(`The biggest four-digit number is ${biggestNumber}`);


// 163 Տպել այն ամենամեծ քառանիշ թիվը, որը 18-ով բազմապատկելիս դառնւմ է բնական թվի քառակուսի։

// function findBiggestNumber() {
//   for (let num = 9999; num >= 1000; num--) {
//     const product = num * 18;
//     const squareRoot = Math.sqrt(product);

//     if (Number.isInteger(squareRoot)) {
//       return num;
//     }
//   }
// }

// const biggestNumber = findBiggestNumber();
// alert(`The biggest four-digit number is ${biggestNumber}`);


// 164 Տպել այն ամենափոքր եռանիշ թիվը, որի քառակուսի արմատը մեծ է տրված n բնական թվից


// function findSmallestNumber(n){

// 	for (let num = 100; num < 1000; num ++ ){
// 		const squareRoot = Math.sqrt(num);

// 		if(squareRoot > n && Number.isInteger(squareRoot)){
// 			return num;
// 		}
// 	}
// 	return null;
// }

// const n = 15;
// const smallestnumber = findSmallestNumber(n);

// if( smallestnumber !== null){
// 	alert(`The smallest number is ${smallestnumber}`);
// }else{
// 	alert(`There is no three digit number whose square root is greather than ${n} `);
// }


// 165 T տրամաբանական տիպի փոփոխականին կվերագրվի true արժեքը, եթե տրված n բնական թիվը 3-ի աստիճան է, հակառակ դեպքում false:
// Տպել t-ի արժեքը։



// function isPowerOfThree(n) {
//   // Check if n is a positive integer
//   if (n <= 0 || n % 1 !== 0) {
//     return false;
//   }
  
//   // Use logarithm properties to check if it's a power of 3
//   const logBase3 = Math.log10(n) / Math.log10(3);
  
//   // If logBase3 is an integer, then n is a power of 3
//   return logBase3 % 1 === 0;
// }

// // Example usage:
// const n = 9; // Change this value to test different numbers
// const t = isPowerOfThree(n);
// console.log(t); // This will print "true" if n is a power of 3, and "false" otherwise


// 166 y փոփոխականին վերագրել 0 արժեքը, եթե տրված n բնական թիվը 4-ի աստիճան չէ, հակառակ դեպքում՝ 1 արժեքը։

// function isPowerOf4(n) {
//   // Check if n is a positive integer and is a power of 4
//   return n > 0 && (n & (n - 1)) === 0 && (n % 3 === 1);
// }

// const n = 64; // Replace with your natural number
// const y = isPowerOf4(n) ? 1 : 0;

// alert(y); // Output: 1 (if n is a power of 4), 0 (otherwise)


// 168 p տրամաբանական տիպի փոփոխականին վերագրել true արժեքը, եթե տրված n (n>1) թիվը պարզ է, հակառակ դեպքում false։ Տպել p փոփոխականի արժեքը


// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
  
//   if (n <= 3) {
//     return true;
//   }
  
//   if (n % 2 === 0 || n % 3 === 0) {
//     return false;
//   }
  
//   let i = 5;
//   while (i * i <= n) {
//     if (n % i === 0 || n % (i + 2) === 0) {
//       return false;
//     }
//     i += 6;
//   }
  
//   return true;
// }

// const n = 17; // Replace with the number you want to check
// const p = isPrime(n);

// console.log(p); // Output: true if n is prime, false otherwise


// 169 Տրված են  x և y բնական թվերը։ z փոփոխականին վերագրել 5 արժեքը, եթե (x+y) թիվը պարզ է, հակառակ դեպքում 6 արժեքը։ Տպել z փոփոխականի արժեքը։


// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
  
//   if (n <= 3) {
//     return true;
//   }
  
//   if (n % 2 === 0 || n % 3 === 0) {
//     return false;
//   }
  
//   let i = 5;
//   while (i * i <= n) {
//     if (n % i === 0 || n % (i + 2) === 0) {
//       return false;
//     }
//     i += 6;
//   }
  
//   return true;
// }

// let x = 7;
// let y = 10;
// let sum = x+y;
// let z;

// if (isPrime(sum)) {
// 	z = 5;
// }else{
// 	z = 6;
// }

// alert(z);


// 170 Տրված է n բնական թիվը։ Ստանալ և տպել n-ից մեծ այն ամենափոքր թիվը, որը 2-ի աստիճանն է։

// function smallestPowerOfTwo(n){

// 	let power = 1;

// 	while (power <= n){

// 		power *= 2;
// 	}
// 	return power;
// }

// const n = 10; 
// const result = smallestPowerOfTwo(n);
// alert(result);


// 171 Տրված է N բնական թիվը։ Հաշվել և արտածել N-ի ֆակտորիալը։

 // function factorial(N){
 // 	 let result = 1;

 // 	for (let i = 2; i <= N; i++){
 // 		 result *= i;
 // 	}
 // 	return result;
 // }

 // const N = 10;
 // const result = factorial(N);
 // alert(result);


// 172 Տրված է N բնական թիվը։ Հաշվել և արտածել N-ի կրկնակի ֆակտորիալը, որտեղ N!! = N(N-2)(N-4)...: Եթե N-ը զույգ է, ապաա վերջին արտադրիչը հավասար է 2-ի, հակառակ դեպքում՝ 1-ի։

// function doubleFactorial(N) {
//   if (N <= 0) {
//     return 1;
//   } else {
//     return N * doubleFactorial(N - 2);
//   }
// }

// // Example usage:
// const N = 6; // Replace this with your desired value of N
// const result = doubleFactorial(N);
// console.log(result); // This will print the double factorial of N


// 180 Արտածել true, եթե տրված n բնական թիվը հանդիսանում է 3-ի աստիճան, հակառակ դեպքում false:

// function powerOfTree(n){

// 	if( n % 3 == 0){
// 		alert('true');
// 	}else{
// 		alert('false');
// 	}
// }

// const n = 27;
// powerOfTree(n);


// 181 Տրված է N բնական թիվը, որը 2-ի որևէ աստիճան է հանդիսանում։ N = 2-ի k աստիճան։ Հաշվել և արտածել K-ի արժեքը։  

// function calculateK(N) {
//   if (N <= 0 || (N & (N - 1)) !== 0) {
//     // N should be a positive power of 2
//     return NaN;
//   }

//   let k = 0;
//   while (N > 1) {
//     N /= 2;
//     k++;
//   }

//   return k;
// }

// // Example usage:
// const N = 8; // N is a power of 2 (2^3 = 8)
// const k = calculateK(N);
// console.log(`k = ${k}`);

// 185  Բանկում ներդրված նախնական ավանդը 30000 դրամ է։ Յուրաքանչյուր ամիս այն ավելանում է P (0<P<25) տոկոսով։
// Հաշվել, թե քանի ամիս հետո ստացված գումարը կգերազանցի 100000 դրամը։ 
// Արտածել ստացված ամիսների քանակը և ավանդի վրեջնական գումարը։

// function calculateMonthsToExceedTarget(initialDeposit, P, targetAmount) {
//   let currentAmount = initialDeposit;
//   let months = 0;

//   while (currentAmount < targetAmount) {
//     currentAmount += (currentAmount * (P / 100)); // Increase by P percent
//     months++;
//   }

//   return { months, redemptionAmount: currentAmount };
// }

// // Example usage:
// const initialDeposit = 30000; // Initial deposit in AMD
// const P = 5; // Monthly increase in percent (you can change this value)
// const targetAmount = 100000; // Target amount in AMD

// const result = calculateMonthsToExceedTarget(initialDeposit, P, targetAmount);
// console.log(`It will take ${result.months} months to exceed ${targetAmount} AMD.`);
// console.log(`The redemption amount will be ${result.redemptionAmount} AMD.`);


// 186 

// function calculateMonthsToExceedTarget(initialDeposit, P, targetAmount) {
//   let currentAmount = initialDeposit;
//   let days = 0;

//   while (currentAmount < targetAmount) {
//     currentAmount += (currentAmount * (P / 100)); // Increase by P percent
//     days++;
//   }

//   return { days, redemptionAmount: currentAmount };
// }

// // Example usage:
// const initialDeposit = 20; // Initial deposit in AMD
// const P = 5; // Monthly increase in percent (you can change this value)
// const targetAmount = 80; // Target amount in AMD

// const result = calculateMonthsToExceedTarget(initialDeposit, P, targetAmount);
// alert(`It will take ${result.days} days to exceed ${targetAmount} km.`);
// alert(`The crossed distance will be ${result.redemptionAmount} km.`);



// 187 Տրված է N բնական թիվը։ Եթե այն պարզ թիվ է, ապա արտածել true, հակառակ դեպքում՝ false:

// function simpleNumber(n){

// 	if( n <= 1 ){
// 		return false;
// 	}
// 	if(n <= 3 ){
// 		return true;
// 	}
// 	if(n % 2 === 0 || n % 3 === 0){
// 		return false;
// 	}
		
// 	for (let i = 5; i*i <=n; i += 6){
// 		if( n % i === 0 || n % (i + 2 ) === 0){
// 			return false;
// 		} 
// 	}
// 	return true;
// }

// let result = simpleNumber(17);
// alert(result);


// Տրված է n բնական թիվը։ Օգտագործելով ամբողջթվային բաժանումը և բաժանումից ստացած մնացորդը վերցնելու գործողությունը՝

// 201 հաշվել և արտածել թվի թվանշանների քանակը

// function countsDigits(n){

// 	if ( n < 0 ){
// 		n = -n;
// 	}

// 	let count = 0;
// 	while (n >= 1){
// 		n = Math.floor(n / 10 );
// 		count ++;
// 	}
// 	return count;
// }
// const n = 123;
// const digitCount = countsDigits(n);
// console.log(`The number of digits in ${n} is: ${digitCount}`);


// 202 հաշվել և արտածել թվի թվանշանների գումարը 

// function sumOfDigits(number) {
//     // Convert number to string to iterate through digits
//     let numString = number.toString();
//     let sum = 0;

//     // Iterate through each digit and add it to the sum
//     for (let i = 0; i < numString.length; i++) {
//         // Convert digit back to number and add to sum
//         sum += parseInt(numString[i]);
//     }

//     return sum;
// }

// // Example usage
// let number = 54668445;
// let digitSum = sumOfDigits(number);
// console.log("Sum of digits is:", digitSum);


// function sumDigits(){
// 	var value = document.getElementById('thenumber').value;
// 	sum = 0;

// 	while(value){
// 	sum += value % 10;
// 	value = Math.floor(value / 10);
// }

// var resultat = document.getElementById('result');
// resultat.value = sum;
// }


// 203 հաշվել և արտածել թվի թվանշանների արտադրյալը 

// function sumDigits(){
// 	var value = document.getElementById('thenumber').value;
// 	sum = 1;

// 	while(value){
// 	sum *= value % 10;
// 	value = Math.floor(value / 10);
// }

// var resultat = document.getElementById('result');
// resultat.value = sum;
// }


// 204 արտածել թվի բոլոր թվանշանները՝ աջից ձախ հաջորդականությամբ

function pronounceDigits(number) {
    const digitNames = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let result = "";

    while (number > 0) {
        let digit = number % 10; // Extract the last digit
        result = digitNames[digit] + " " + result; // Prepend digit name to the result
        number = Math.floor(number / 10); // Remove the last digit
    }
    
    return result.trim(); // Trim to remove extra space at the end
}

// Example usage
let number = 12345;
let pronunciation = pronounceDigits(number);
console.log(pronunciation);


