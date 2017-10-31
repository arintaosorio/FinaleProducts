#Cifrado César
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha

Por ejemplo:

Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

La fórmula para descifrar es: (x - n) % 26

#Pseudocódigo

1. Escribir un prompt donde el suario escriba la frase a encriptar.
2. Comprobar que el usuario no haya ingresado un campo vacío o un número, si es un texto válido, continuar. En caso contrario, colocar una alerta que diga 'Ingrese un texto' y volver solicitar la frase a encriptar por medio de un prompt.
3. Declarar la función cipher.
4. En la función cipher, recorrer el texto ingresado con un for.
5. Usar la formula (x - 65 + n) % 26 + 65, donde n seria 33 por ser el parámetro de desplazamiento solicitado, para obtener el código ASCII de cada letra del texto.
6. Retornar el valor cifrado.
7. Declarar la función decipher.
8. Declarar una variable vacía que 'guarde' las letras a descifrar.
9. Recorrer el texto nuevamente con un for.
10. Usar la formula (x - n) % 26 para descifrar el texto de código ASCII a letras.
11. Retornar el texto descifrado.

![Diagrama De Flujo](https://ibb.co/c9EGhb)
