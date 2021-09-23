// Mostrar todos los numero divisores de un número introducido

// let num1 = parseInt(prompt("Ingresa un número para ver sus números divisibles"));
// let mensaje = "";

// switch (num1) {
//     case (num1 % 2 == 0):
//         mensaje = "Tu numero es divisible entre 2"
//         break;
//     // case (num1 % 3 === 0):
//     //     mensaje = "Tu numero es divisible entre 3"
//     //     break;
//     // case (num1 % 4 === 0):
//     //     mensaje = "Tu número es divisible entre 4"
// }

// document.write(mensaje)



//Codigo Raul


const num = parseInt(prompt("Introduce un número"));

let contador = 0;

while(contador <= num){
    divisible = num/contador;
    if((divisible%1) == 0){
        document.write(contador);
    }
    contador++;
}
