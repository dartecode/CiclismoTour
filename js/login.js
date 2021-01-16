function login(){
    var usuario, clave;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;

    if(usuario == "" || clave == ""){
        alert("Rellene los campos");
        return false;
    } else if(usuario == "admin" && clave == "admin"){
        alert("Bienvenido Admin");
        window.location = "InicioAdmin.html";
        return false;
    } else if(usuario == "user" && clave == "1234"){
        alert("Has iniciado sesión correctamente");
        window.location = "InicioUser.html";
        return false;
    } else {
        alert("Datos incorrectos, verifique usuario y contraseña");
        return false;
    }
}
