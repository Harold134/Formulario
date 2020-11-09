/**
 * funcion para validar los elementos requeridos (*)
 * @param {object} forma
 */
function validarForma(forma) {
    //validamos el usuario
    var usuario = forma.usuario;
    if (usuario.value == "" || usuario.value == "Escribir usuario") {
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }


//validamos el password
var password = forma.password;
if (password.value == "" || password.value.length < 3) {
    alert("Debes proporcionar un password de al menos 3 caracteres");
    password.focus();
    password.select();
    return false;
}
//validamos tecnlogias de interes
var tecnologias = forma.tecnologia;
var checkSeleccionado = false;

//revisamos si se selecciono algun checkbox
for (i = 0; i < tecnologias.length; i++) {
    if (tecnologias[i].checked) {
        checkSeleccionado = true;
    }
}
if (!checkSeleccionado) {
    alert("Debes proporcionar una tecnologia");
    return false;
}

//Validamos el genero
var genero = forma.genero;
var radioSeleccionado = false;

//Revisamos si se selecciona algun radiobutton
for (i = 0; i < generos.length; i++) {
    if (generos[i].checked) {
        radioSeleccionado = true;
    }
} 
if (!radioSeleccionado) {
    alert("El usuario debe seleccionar el genero")
    return false;
}
//validamos ocupacion
var ocupacion = forma.ocupacion;
if (ocupacion.value =="") {
    alert("Debe seleccionar una ocupacion");
    return false;
}

//formulario valido
alert("Formulario valido, Enviando datos...");
return true;
}
