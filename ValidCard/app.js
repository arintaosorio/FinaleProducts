var cardNumber = prompt('Ingresa el número de tarjeta');

var isValidCard = function(cardNumber){

	var arr = cardNumber.split('');
	arr.reverse();
	var prod= 0;
	var sum= 0;
 
 for (var i = 0; i < arr.length; i++) {

 	if (i % 2 === 0) {
 		arr[i] *= 2 ;
 	}
 	if (arr[i]<10) {
 		arr[i]=
 	}
 }

 for (var i = 0; i < arr.length; i++) {
 	sum = sum + arr[i];
 }
 	if (sum % 10 === 0){
 		console.log('is Valid Card')
 	}  
}