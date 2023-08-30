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

const t = 459;

const unitsDigit = t % 10;
const tensDigit = Math.floor((t % 100) / 10);
const hundredsDigit = Math.floor(t / 100);

if( tensDigit + hundredsDigit < 5){
	let a = t;
	alert("The value of a is equal to " + a);
}else{
	let b = t;
	alert("The value of b is equal to " + b);
}
alert("The value of t is equal to " + t);