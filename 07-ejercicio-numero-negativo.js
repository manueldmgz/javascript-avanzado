// Solicitar número al usuario, mostrar la suma y la media de los números introducidos
// hasta introducir un número negativo y ahi mostrar el resultado


// let suma=0;
// let contador = 0;

// while (num1 >0){
//     suma=suma+num1
//     num1=parseInt(prompt("Ingresa otro número"))
//     contador++
// }

// console.log(suma)
// console.log(suma/contador)
// console.log(`la suma de los números es ${suma} y lo dividí entre la cantidad de números ingresados, que fue ${contador}`)


let num1 = parseInt(prompt("Ingresa un número"));
let suma = 0;
let contador = 0;

while (num1 >= 0){
    suma = suma + num1;
    contador++;
    num1 = parseInt(prompt("Ingresa un número"));
}

document.write("La suma de los números ingresados es", suma)
document.write("El promedio de los números ingresados es", (suma%contador))