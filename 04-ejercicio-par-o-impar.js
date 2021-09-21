// El usuario ingresa un número y el programa indica si es par o impar
const numero = parseInt(prompt("Ingresa un número"));

if (numero % 2 == 0) {
    document.write("¡Tu número es par! :)");
}else{
    document.write("Tu número es impar >:(");
}