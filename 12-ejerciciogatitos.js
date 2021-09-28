const $botongatito = document.querySelector("#boton-gato");
const $divgatitos = document.querySelector("#gatitos");

$botongatito.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
    .then(resp => resp.json()).then(data => {
        console.log(data);
        const imagengato = document.createElement("img");
                // Desestructuración
        // Se usa para extraer elementos de un arreglo u objeto
        // const[cat] = data; <<<Esta Linea es igual a la de abajo
        imagengato.src = data[0].url;
        imagengato.width = "300";
        $divgatitos.append(imagengato);
    });
} )