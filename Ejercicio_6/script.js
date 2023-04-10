document.addEventListener("DOMContentLoaded", function() {
  var fechaHora = document.getElementById("fechaHora");
  var fecha = new Date();
  var opcionesFecha = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var opcionesHora = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  var fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
  var horaFormateada = fecha.toLocaleTimeString('es-ES', opcionesHora);
  fechaHora.innerHTML = fechaFormateada + ' - ' + horaFormateada;
});



