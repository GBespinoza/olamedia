/*
 * Funciones para la pagina de Login
 * author: 
 * date: 2017-07-17
 */

$(document).foundation();

$(".optSel").click(function() {
    
    // Valida no seleccionado
    if (!$(this).hasClass("optSelect")){
        
        // Cambia la clase
        $(".optSel").removeClass("optSelect");
        $(this).addClass("optSelect");
        
        // Oculta/Muestra Formulario
        $("#formLogin").toggle();
        $("#formNew").toggle();
    }
});

// Funcionalidad para cambiar el checkbox
$("#chkLogin").click(function() {
    if ($("#chkLogin").attr('attr-isSelected') == 'true'){
        // Apago y pongo imagen sin check
        $("#chkLogin").attr('attr-isSelected', false);
        $("#chkLogin").html('<img src="img/ImgLogin/check0.jpg"> Recordar Usuario');
    }else{
        // Prendo y pongo imagen con check
        $("#chkLogin").attr('attr-isSelected', true);
        $("#chkLogin").html('<img src="img/ImgLogin/check1.jpg"> Recordar Usuario');
    }
    
});



// Validar por tamaños
if (Foundation.MediaQuery.current == 'small'){
    $("#middleColor").removeClass("inner");
}
$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize){
    if (newSize == 'small'){
        $("#middleColor").removeClass("inner");
    }else{
        $("#middleColor").addClass("inner");
    }
});




