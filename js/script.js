var namePattern = new RegExp ("^[a-z A-Z]{4,30}$");
var emailPattern =new RegExp ("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");
var phonePattern = new RegExp ("^[0-9]{9}$");


function validar(){

    //Booleano para comprabar que todo es ta correcto
    var todo_correcto = true;
    //Mensaje para los errores
    var msg = "Revise los siguientes campos a continuación:\n\n";
    
    //Nombre
    if(!namePattern.test(document.getElementById("formulario").elements[0].value)){
        todo_correcto = false;
        msg = msg + "El Nombre no es correcto\n";
    }
    
    //Apellidos
    if(!namePattern.test(document.getElementById("formulario").elements[1].value)){
        todo_correcto = false;
        msg = msg + "Los apellidos no son correctos\n";
    }
    
    //Email
    if (!emailPattern.test(document.getElementById("formulario").elements[2].value)){
        todo_correcto = false;
        msg = msg + "Formato del Email incorrecto\n";
    }
    
    //Telefono
    if(!phonePattern.test(document.getElementById("formulario").elements[3].value)){
        todo_correcto = false;
        msg = msg + "Revise el telefono (9 numeros)\n";
    }
    
    //Usuario
    if(document.getElementById("formulario").elements[4].value.length < 3){
        todo_correcto = false;
        msg = msg + "El Usuario debe tener al menos 3 caracteres\n";
    }
    
    //Password
    if(document.getElementById("formulario").elements[5].value.length < 3){
        todo_correcto = false;
        msg = msg + "El Password debe tener al menos 3 caracteres\n";
    }

    if(document.getElementById("formulario").elements[6].value == ""){
        todo_correcto = false;
        msg = msg + "Introduzca su fecha de nacimiento\n";
    }

    if(!document.getElementById("formulario").elements[7].checked){
        todo_correcto = false;
        msg = msg + "Acepte las condiciones";
    }
    
    //Comprobacion que todo ha ido bien, sino mostramos aviso de que falla
    if(todo_correcto){
        alert("Bienvenido "+document.getElementById("formulario").elements[4].value);
        resetForm();
    }else{
        alert(msg);
    }
    
    return todo_correcto;
}

function resetForm(){
    document.getElementById("formulario").reset();
}