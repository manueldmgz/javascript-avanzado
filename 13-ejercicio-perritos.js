const $botonperro = document.querySelector("#boton-perro");
const $divperritos = document.querySelector("#perritos");

$botonperro.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json()).then(data => {
        console.log(data);
        const imagenperro = document.createElement("img");
        imagenperro.src = data.message;
        $divperritos.appendChild(imagenperro);
    });
})