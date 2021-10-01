// Try nos permite ejecutar código propenso a fallar de una manera segura

const gravedad = 9.8;
console.log(gravedad);

// Intenta ejecutar el código, si hay un error ejecuta el catch

try {
    gravedad = 10.1
    
} catch(e) {
    // El catch se ejecuta si hay un error, recibe como primer parámetro el error
    console.log(e);
} finally {
    // El finally siempre se ejecuta. 
    console.log("Soy el finally");
}


console.log(gravedad);