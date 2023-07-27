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

// function ifOneIsEqual(){
// 	if(a==1 || b==1 || c==1){
// 		alert("true");
// 	}else{
// 		alert("false");
// 	}
// }ifOneIsEqual();


//24 եթե տրված թվերից ճիշտ երկուսը հավասար են երկուսի, ապա կարտածեն true, հակառակ դեպքում ՝ false

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

// function creatingRectangle(){
// 	if (a>0 && b>0 && c>0) {
// 		alert("y=1");
// 	}else{
// 		alert("y=2");
// 	}
// }creatingRectangle();


// 26  կարտածեն մեկ, եթե տրված թվերից գոնե մեկը զույգ է, այլապես երկու։

	// function double(){
	// 	if(a%2==0 || b%2==0 || c%2==0){
	// 		alert(1);
	// 	}else{
	// 		alert(2);
	// 	}
	// }double();


// 27 կարտածեն true, եթե տրված թվերը թվաբանական պրոգրեսիա են կազմում, հակառակ դեպքում՝ false

// function arithmetic(){
// 	if(a+b==c || a+c==b ||b+c==a){
// 		alert("true");
// 	}else{
// 		alert("false");
// 	}
// }arithmetic();


// 28 կարտածեն true, եթե տրված թվերը երկրաչափական պրոգրեսիա են կազմում, հակառակ դեպքում՝ false

// function geometric(){
// 	if(a*b==c || a*c==b ||b*c==a){
// 		alert("true");
// 	}else{
// 		alert("false");
// 	}
// }geometric();


//29 Տրված թվերը կարտածեն ըստ աճման կարգի հաջորդականության

// function ascending(){
// 	if(a<b<c){
// 	alert(a+' '+b+' '+c);
// }else if(b<c<a){
// 	alert(b+' '+c+' '+a);
// }else if(c<a<b){
// 	alert(c+' '+a+' '+b);
// }else{
// 	alert("false");
// }
// }ascending();



//it works, but i don't understand how?
// const x = 7;
// const y = 3;
// const z = 9;
// function displayInAscendingOrder(x, y, z) {
//   const numbers = [x, y, z];
//   numbers.sort((a, b) => a - b);
//   alert(numbers.join(", "));
// }

// // Example usage:

// displayInAscendingOrder(x, y, z);