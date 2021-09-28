
const peticion = fetch("https://jsonplaceholder.typicode.com/todos")
.then(resp => resp.json()).then(data => {
    console.log(data);
}).catch(e => {
    console.log(e);
});

console.log(peticion);