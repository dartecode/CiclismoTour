function registrar() {
    var nombre, usuario ,clave,expresion;
    nombre = document.getElementById("nombre").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre == "" || usuario == "" || clave == ""){
        alert("Todos los campos son obligatorios");
        return false;
    } else if(!expresion.test(usuario)){
        alert("Correo no valido");
        return false;
    } else {
        alert("Datos ingresados correctamente \nSerás redirigido al inicio de sesión");
        window.location = "login.html";
        return false;
    }
}
