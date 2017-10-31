/*
Cifrar: (x - 65 + n) % 26 + 65 
Descifrar: (x - n) % 26
*/

//asegurarse que el usuario no ingresó un campo vacío

var text = prompt('Ingresa el texto que quieres descifrar');
 if (text != '') {
 	cipher(text); 
 	}  else {
 	alert('Ingresa un texto');
 	var text = prompt('Ingresa el texto que quieres descifrar');
 }



//función cipher

function cipher(text){
	var cipherText= '';
	
	for (i = 0 ; i <text.length; i++) {

		//aplicar la fórmula de cifrar para obtener el codigo ASCII de las letras ingresadas

		var textCode = (text.charCodeAt(i) - 65 + 33) % 26 + 65;

		//El código ASCII aqui lo volvemos letras nuevamente

		cipherText += String.fromCharCode(textCode);
	}
	return cipherText;
}

//función decipher

function decipher(text){
	var decipherText='';

	for (var i = 0; i < text.length; i++) {

		// Usamos la fórmula de decifrar para obtener la nueva posición

	 	var textCode = (String.fromCharCode (text(i) ) + 33) % 26;
     	decipherText += textCode;
      	var newText = newText.charCodeAt(decipherText);
    }
    	return newText;
}



