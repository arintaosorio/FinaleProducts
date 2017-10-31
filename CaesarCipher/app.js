/*
Cifrar: (x - 65 + n) % 26 + 65 
Descifrar: (x - n) % 26
*/

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

		var textCode = (text.charCodeAt(i) - 65 + 33) % 26 + 65;
		cipherText += String.fromCharCode(textCode);
	}
	return cipherText;
}

//función decipher

function decipher(text){
	var decipherText='';

	for (var i = 0; i < text.length; i++) {
	 	var textCode = (String.fromCharCode (text(i) ) + 33) % 26;
     	decipherText += textCode;
      	var newText = newText.charCodeAt(decipherText);
    }
    	return newText;
}



