// validacion de barra de selecion.
function mostrar(id) {
    if (id == "1opc") {
        $("#1opc").show();
        $("#2opc").hide();
        $("#3opc").hide();
        $("#4opc").hide();
    }

    if (id == "2opc") {
        $("#1opc").hide();
        $("#2opc").show();
        $("#3opc").hide();
        $("#4opc").hide();
    }

    if (id == "3opc") {
        $("#1opc").hide();
        $("#2opc").hide();
        $("#3opc").show();
        $("#4opc").hide();
    }

    if (id == "4opc") {
        $("#1opc").hide();
        $("#2opc").hide();
        $("#3opc").hide();
        $("#4opc").show();
    }
}
//funcion de mostrar y ocultar contenidp.

function muestra_oculta(id){
if (document.getElementById){ //se obtiene el id
var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
}
}
window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
muestra_oculta('contenido_a_mostrar');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}