// Mostrar todos los numeros impares que hay entre dos números introducidos por el usuario

const numero1 = parseInt(prompt("Ingresa un número"));
const numero2 = parseInt(prompt("Ingresa otro número"));

if (numero1 < numero2) {

    for (let i = numero1 + 1; i < numero2; i++) {

        if (i % 2 !=0) {
            document.write(i);
        }
    }
} else {
    document.write("El segundo número debe ser mayor que el primero");
}
