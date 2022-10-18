

let parrafo = document.createElement('p');
let texto = document.createTextNode('Lorem ipsum');
parrafo.appendChild(texto);
let main = document.querySelector('.container');
main.appendChild(parrafo);


let nav = document.querySelector('.menu');
let contact = document.querySelector('.contacto');

nav.removeChild(contact);

main.classList.remove('container');


function irClientes(data) {
    alert(data);
}

// const irClientes = (data) => {
//     alert(data);
// }

// irClientes = (data) => {
//     alert('Ir a mundo');
// }


let home = document.querySelector('.home');
home.addEventListener('keydown', irClientes);

// funcion que sume dos numeros
function sumar(a, b) {
    return a + b;
}


function name(params) {

}