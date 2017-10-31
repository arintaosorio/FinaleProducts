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

/* function isValidCard(number){
    number.reverse();//revierte el array ingresado.
    var newArray=[];
    //se crea un for para que cuente de uno en uno dentro del array.
    for(var i = 0; i < number.length; i++){
        var result; 
// si el numero sacado en i es par entonces multiplicara * 2
    while(number[1]%2==0){
           result1=number[i]*2
//dentro del mismo si el resultado de la multiplicación es mayor a 10
// entonces dividira 10/2 donde dara resultado
           if(result1 >= 10){ //10
              result = result1/10; // ->1.2
// Math.trunc saca solo el primer valor dado de un decimal.
              var oneNumber = Math.trunc(result); // ->1
              var twoNumber = result1%10;
              var finalResult=oneNumber+twoNumber;
              newArray.push(finalResult);
           }else if(result<10){
              newArray.push(result1);
           }
         if(number[i]%2!==0){
           newArray.push(number[i]);
        }   
        return console.log(newArray);    
    }      
}
}
isValidCard([1,2,3,4,5,6,7,8,9,0,1,2,3]); */

/*
function isValidCard(){
      var newArr = 0;
      var num = prompt('').split('').reverse();
      while(num.length < 16 || num.length > 16){
        num = prompt('El nùmero de dígitos ingresado no es correcto');
      }
        for(var i = 0; i < num.length; i++){
        var values = parseInt(num[i]);
          if(i % 2 === 0){
          newArr += values;
        }
          if(i % 2 !== 0){
           if((values * 2) <= 9 ){
           newArr += (values * 2);
          }
            if ((values * 2) > 9){
              var digits = (values * 2);
                for (var j = 0; j <digits.length;j++){
  	            newArr += parseInt(digits[j]);
              }
          }
        }
      }
      if(newArr % 10 === 0){
        alert("La tarjeta de crédito es válida");
      }
      else 
        alert("La tarjeta de crédito no es válida");
    }

isValidCard() */

/*
function isValidCard(option){

	 var tener = prompt('Ingrese Numero de Tarjeta');

       if((tener !== "") && (/^([0-9])*$/.test(tener))){ // Comprobando que no contenga numeros vacíos o caracteres distintos a números.
       
          var arry = [];
          
	      for (i=0; i<tener.length; i++){
	        
	       var newArry= tener[i];
	         
	        arry.push(newArry);

		//return invertido;
var invertido = arry.reverse();
	var pares = [];

	var impares = []; //no llamar luego!!

			for(var i=0; i<invertido.length; i++){ //cambiar el i+=2, por i++

				if([i]%2 === 0){

					pares.push();

						//dividir el número par

					parcito=pares(i).toString();

					cifra=pares(i).split(num1,num2);

						//transformar el string a número.

						var num1= parseInt[uno];

						var num2= parseInt[dos];

							sumita=[uno+dos];

						//suma=(sumita+[arreglo[i])

						suma= (sumita[i]);

						//módulo de 10. Dos opciones --> usar IF/Else

				}

			}		
					if(suma%10===0){

						return "Su tarjeta es válida";

					}else{

						return "Su tarjeta es inválida";
					}

	      }
        }else {
                alert("Ingrese un numero");
            }
       }
 
isValidCard();
*/