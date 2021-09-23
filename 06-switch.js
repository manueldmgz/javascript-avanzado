// switch
// Estructura de control de flujo, nos ayuda a tomar decisiones mediante la evaluación de una condición. 
// (Tipo if)

const edad= parseInt(prompt("Ingresa tu edad"));
let mensaje = "";

// Esto es igual a 
// if(edad === 18 ) {
//     mensaje ="Acaba de cumplir la mayoria de edad"
// }

switch (edad) {
    case 18:
        mensaje = "Acabas de cumplir la mayoría de edad";
        break; 
    case 25: 
        mensaje = "Ya eres un adulto";
        break;
    case 70: 
        mensaje = "Ya eres de la tercera edad";
        break;
    default: 
        mensaje = "Fuera del rango de edad";
        break;   
}

document.write(`<p>${mensaje}</p>`)

