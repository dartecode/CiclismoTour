function registrarRuta() {
    var nombre, cedula;
    nombre = document.getElementById("nombre").value;
    cedula = document.getElementById("cedula").value;
    ruta = document.getElementById("ruta").value;

    console.log(nombre, cedula, ruta);

    if(nombre == "" || cedula == ""){
        alert("Todos los campos son obligatorios");
        return false;
    } else {
        alert("Datos ingresados correctamente \nTu solicitud será enviada al admin");
        window.location = "InicioUser.html";
        return false;
    }
    
}
