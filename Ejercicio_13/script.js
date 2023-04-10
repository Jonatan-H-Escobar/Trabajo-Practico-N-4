function verificar() {
    var cadena = document.getElementById("cadena").value;
    if (cadena.match(/^\d+$/)) {
      document.getElementById("resultado").innerHTML = cadena + " es un valor Entero Positivo";
    } else {
      document.getElementById("resultado").innerHTML = cadena + " no es un valor Entero Positivo";
    }
  }