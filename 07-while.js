// Ciclo while
// Nos permite repetir el código mientras una condición sea verdadera


// // Ejemplo 1
// let num1 = parseInt(prompt("Ingresa un número"));

// while(isNaN(num1)) {
//     num1 = parseInt(prompt("Ingresa un número, por favor :,("));
// }

// Ejemplo 2
let num1 = parseInt(prompt("Ingresa un número"));
const num_secreto = 23;
let intentos = 1;
// La variable va por fuera

while(num1 !== num_secreto) {
    console.log("No adivinaste el número secreto, intenta de nuevo")
    console.log(`Intento: ${intentos}`);
    intentos++;
    num1 = parseInt(prompt("Número incorrecto. Intenta de nuevo."))
    
}

document.write("Felicidades ganaste el juego")

