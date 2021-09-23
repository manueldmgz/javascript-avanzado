/* Arreglos */
    // Estructura de datos


let lenguajes = ["Javascript", "Java", "PHP", "Python", "C#", "C++", "Scala", "Rust", "Ruby", "Cobol"];

document.write("<ul>");
lenguajes.forEach(function(lenguajes,index) {
    document.write(`<li>${index} - ${lenguajes}</li>`);

});
document.write("</ul>");




let numeros = Array(2, 3, 4, 27, 19, 12);
let numeros2 = numeros.map(function(numero) {
	return "quiero "+numero;
});

console.log(numeros);
console.log(numeros2);


// Includes
// Determina si un arreglo contiene un valor
console.log(lenguajes.includes("Go"));
console.log(!lenguajes.includes("PHP"));

//Filter
// Crea un nuevo arreglo con todos los elementos que cumplan con la condicion
let filtrados = numeros.filter(function(numero) {
    if(numero > 9) {
        return numero
    }
});

console.log(filtrados);