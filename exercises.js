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

let product = 1;

  for (let i = 100; i <= 110; i++) {
    if (i % 3 == 1 && i % 4 == 2) {
      product *= i;
    }
  }

alert("The product of three-digit non multiples of 2 and 3 is: " + product);


