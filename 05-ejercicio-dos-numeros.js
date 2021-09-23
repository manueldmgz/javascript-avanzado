// Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.

const numero1 = parseInt(prompt("Ingresa un número"));
const numero2 = parseInt(prompt("Ingresa otro número"));

    if (numero1 > numero2){
        suma=(numero1+numero2)
        document.write(`Tu suma es:${suma}<br>`);
        resta=(numero1-numero2)
        document.write(`Tu resta es:${resta}<br>`);
    }else{
        producto=(numero1*numero2)
        document.write(`Tu producto es:${producto}<br>`);
        division=(numero1%numero2)
        document.write(`Tu division es:${division}<br>`);        
    }