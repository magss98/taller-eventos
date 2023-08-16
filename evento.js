// Función que evento de clic en el div
function ClickEnDiv() {
    alert("Hola! Soy el div");
}

// let para obtener una referencia al div
let miDiv = document.getElementById ("elDiv")

// Agregamos el manejador del evento de clic a la funcion  ClickEnDiv
miDiv.addEventListener("click", ClickEnDiv);