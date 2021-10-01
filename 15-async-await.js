const $botongatito = document.querySelector("#boton-gato");
const $divgatitos = document.querySelector("#gatitos");

$botongatito.addEventListener("click", async () => {
   const resp = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await resp.json();

    const imagengato = document.createElement("img");
    imagengato.src = data[0].url;
    imagengato.width = "300";
    $divgatitos.appendChild(imagengato);
} )

// .then(resp => resp.json()).then(data => {
//     console.log(data);
    
// });

         // Desestructuración
    // Se usa para extraer elementos de un arreglo u objeto
    // const[cat] = data; <<<Esta Linea es igual a la de abajo