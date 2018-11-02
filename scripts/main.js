//var miTitulo = document.querySelector('h1');
//miTitulo.innerHTML = "Hello world!";

document.querySelector('html').onclick = function() {
    alert('Ouch! Deja de pincharme!');
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

if (!localStorage.getItem('nombre')) {
    		estableceNombreUsuario();
		}
		else {
		    var nombreAlmacenado = localStorage.getItem('nombre');
		    miTitulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
		}

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco,' + miNombre;
}


miBoton.onclick = function() {
    estableceNombreUsuario();
}