const num1 = parseInt(prompt("Ingresa un número"));

do {
    document.write(`<p>El numero introducido es ${num1}</p>`);
    num1 = parseInt(prompt("Ingresa un número"));
}
while(num1 > 5);