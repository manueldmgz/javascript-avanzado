const url='https://jsonplaceholder.typicode.com/albums/1/photos';
const $info = document.querySelector('#info');

fetch(url).then(response => response.json()).then(datos =>{
        //La información viene en un arreglo de 50 elementos
        for(var i=0;i<datos.length;i++){
            let nuevoElemento=document.createElement('div');
            nuevoElemento.className='col-3';
            let mensaje=
            `<div class="card" style="width: 100%;">
                <img src="${datos[i].url}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${datos[i].title}</h5>
                </div>
             </div>`;
            nuevoElemento.innerHTML=mensaje;
            $info.appendChild(nuevoElemento);
        } 
}).catch(err => console.log(err));