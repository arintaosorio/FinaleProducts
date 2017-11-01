//asegurarse que el usuario no ingresó un campo vacío

var cardNumber = prompt('Ingresa el número de tarjeta');
 if (cardNumber != '') {
 	isValidCard(cardNumber); 
 	}  else {
 	alert('Ingresa un número');
 	var cardNumber = prompt('Ingresa el número de tarjeta');
 }

 //Iniciar la función

function isValidCard (cardNumber){

 //Convertir a array el número ingresado e invertirlo

 var arr = cardNumber.split('');
 arr.reverse();
	
 //Declarar variables result y sum que usaremos después
 
 var result= 0;
 var sum= 0;
 // Recorrer el arreglo y por medio de un if verificar los que esten en posición par
 for (i = 0; i < arr.length ; i++) {

 	 if (i % 2 === 0) {
 		result= arr[i] * 2 ;
 	 }
 	} 

 //Si el numero duplicado es mayor o igual a 10, sumar sus digitos	
 	 if (result>=10) {

	   for (j = 0; j < result.length ; j++) {
 	   sum += result[j];
 	   }
 	 }
 	 //FALTA SUMAR NUEVOS Y ANTERIORES DIGITOS
 //Si el residuo de la division de la suma de los digitos entre 10 es 0, es válida

 	 if (sum % 10 === 0){
 		return('is Valid Card');
 	 }  else {
		return('is not a Valid Card')
 	 }
}
