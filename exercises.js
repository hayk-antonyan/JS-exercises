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

// let a=25;
// let b=6;
// let c=12;

// function arithmetic(){
// 	if(a+b==c || a+c==b ||b+c==a){
// 		alert("true");
// 	}else{
// 		alert("false");
// 	}
// }arithmetic();


// 28 կարտածեն true, եթե տրված թվերը երկրաչափական պրոգրեսիա են կազմում, հակառակ դեպքում՝ false

// let a=25;
// let b=6;
// let c=12;

// function geometric(){
// 	if(a*b==c || a*c==b ||b*c==a){
// 		alert("true");
// 	}else{
// 		alert("false");
// 	}
// }geometric();


// 29 Տրված թվերը կարտածեն ըստ աճման կարգի հաջորդականության

// it works by using array sort and join methods 

// const x = 7;
// const y = 3;
// const z = 9;
// function displayInAscendingOrder(x, y, z) {
//   const numbers = [x, y, z];
//   //  numbers.sort(function(a, b){
//   // 	return a-b;
//   // });
//   //  	alert(numbers.join(", "));
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



// Տրված են իրարից տարբեր a, b, c, և d թվերը։ Կազմել բլոկ-սխեմա, և ծրագիր, որոնք կարտածեն

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

let a = 13;
let b = 8;
let c = 5;
let d = 2;

// if (c == a+b && d == b+c){
// 	alert('true');
// }else{
// 	alert('false');
// }

function isArithmeticProgression(a, b, c, d) {
  return (b - a) === (c - b) && (c - b) === (d - c);
}
isArithmeticProgression();
