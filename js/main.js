//Definir visibilidad de elementos
var divRegistro = document.getElementById("registro");
var divLogin = document.getElementById("login"); 



divLogin.style.display = "none";
document.getElementById("reg_bienvenida").style.display = "none";



//el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div

//lógica para crear nuevos usuarios en el sistema
document.getElementById("btnCrearUsuario")
    .addEventListener("click",function() {
        //recuperar datos ingresados
        var nombre = document.getElementById("reg_nombre").value;
        var apellido = document.getElementById("reg_apellido").value;
        var usuario = document.getElementById("reg_usuario").value;
        var clave = document.getElementById("reg_clave").value;
        //guardar en array
        var nuevoUsuario = new Usuario(nombre,apellido,usuario,clave);
        usuarios.push(nuevoUsuario);


        //Mostrar mensaje de bienvenida
        console.log("Bienvenido "  + usuario + " al sistema.");
        document.getElementById("reg_bienvenida").style.display = "block";
    });



//Mostrar inicio sesión
document.getElementById("reg_btn_iniciar")
    .addEventListener("click",function () {
        //ocultar div de registro
        divRegistro.style.display = "none";

        //mostrar div de inicio de sesión
        divLogin.style.display = "block";
        
    })


//recuperar datos ingresados en la web
document.getElementById("btnIngresar")
.addEventListener("click",function () {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value; 
    
    console.log("usuario: " + usuario);
    console.log("clave: " + clave);

    var usuario = usuarios.find(
        data => 
            data.user === usuario
            && data.clave === clave
    );

    if(typeof usuario === "undefined")
        console.log("Usuario o clave no válidas");
    else
        console.log("Bienvenido " + usuario.nombre + " " + usuario.apellido + " al sistema");
});


