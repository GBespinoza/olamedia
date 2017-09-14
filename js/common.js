


//togle efecto ocultar sidebar
$('[data-app-dashboard-toggle-shrink]').on('click', function(e) {
  e.preventDefault();
  $(this).parents('.app-dashboard').toggleClass('shrink-medium').toggleClass('shrink-large');
});

//cambio de icono

// Funcionalidad para cambiar el checkbox
$("#chkLogin").click(function() {
    if ($("#chkLogin").attr('attr-isSelected') == 'true'){
        // Apago y pongo imagen sin check
        $("#chkLogin").attr('attr-isSelected', false);
        $("#chkLogin").html('<img src="img/ImgIcons/outline2.png">');
    }else{
        // Prendo y pongo imagen con check
        $("#chkLogin").attr('attr-isSelected', true);
        $("#chkLogin").html('<img src="img/ImgIcons/outline3.png">');
    }
    
});
