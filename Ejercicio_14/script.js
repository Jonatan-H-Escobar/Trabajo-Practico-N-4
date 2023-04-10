function validarDNI() {
    // Obtener el número de DNI del input
    var dni = document.getElementById("dni").value;

    // Eliminar los puntos del número de DNI
    dni = dni.replace(/\./g,'');
    
    // Validar que el número de DNI tenga entre 7 y 8 dígitos
    if (dni.length < 7 || dni.length > 8) {
      document.getElementById("resultado").innerHTML = "El DNI ingresado es inválido";
    }
    
    // Validar que el número de DNI contenga solo dígitos numéricos
    else if (/^\d+$/.test(dni) === false) {
      document.getElementById("resultado").innerHTML = "El DNI ingresado es inválido";
    }
    
    // Validar que el número de DNI no contenga una letra y un número juntos
    else if (/^\d+[a-zA-Z]|[a-zA-Z]+\d+$/.test(dni) === true) {
      document.getElementById("resultado").innerHTML = "El DNI ingresado es inválido";
    }
    
    // El número de DNI es válido
    else {
      document.getElementById("resultado").innerHTML = "El DNI ingresado es válido";
    }
  }
