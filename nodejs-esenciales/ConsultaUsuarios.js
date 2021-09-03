$(document).ready(function () {
    $("#btnBuscar").click(function () {
    });
    
   let claveBuscada = $("#textClaveUsuario"). val();
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/users/${claveBuscada}`,
        contentType: "application/json",
        dataType: 'json',
        type: 'get',
        success: function (result) {
        $("#txtNombre").val(result.name);
        $("#txtEmail").val(result.email);
        
        },
        error: function (result) {
            console.log('La llamada no se pudo completar');
            console.log.apply(result);
        }
    });

});
