// Mostrar todos los numeros impares que hay entre dos números introducidos por el usuario

const numero1 = parseInt(prompt("Ingresa un número"));
const numero2 = parseInt(prompt("Ingresa otro número"));
let array_pares = [] 
let array_impares = []

for (let n = numero1; n <= numero2; n += 1) {
    if (n % 2 !== 0) {
        array_impares.push(n)
    } else {
        array_pares.push(n)
    }
}
console.log(`Los números impares fueron ${array_impares}`)
