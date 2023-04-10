// JavaScript para cambiar el formato del reloj
document.addEventListener('DOMContentLoaded', function () {
  const formatSwichtBtn = document.querySelector(".format-swtich-btn");

  formatSwichtBtn.addEventListener("click", () => {
    formatSwichtBtn.classList.toggle("active");
    var formatValue = formatSwichtBtn.getAttribute("data-format");

    if (formatValue === "12") {
      formatSwichtBtn.setAttribute("data-format", "24");
    }
    else {
      formatSwichtBtn.setAttribute("data-format", "12");
    }

  });


  // Declara la función clock
  function clock() {
    // Crea un objeto Date para obtener la fecha y hora actual
    var today = new Date();

    // Obtiene la hora actual
    var hours = today.getHours();

    // Obtiene los minutos actuales
    var minutes = today.getMinutes();

    // Obtiene los segundos actuales
    var seconds = today.getSeconds();

    // Determina si es AM o PM basado en la hora actual
    var period = hours >= 12 ? "PM" : "AM";

    // Convierte la hora a formato de 12 horas
    var formatValue = formatSwichtBtn.getAttribute("data-format");
    if (formatValue === "12") {
      hours = hours % 12;
      hours = hours ? hours : 12;
    }

    // Agrega un 0 delante de la hora si es menor a 10
    hours = hours < 10 ? "0" + hours : hours;

    // Agrega un 0 delante de los minutos si son menores a 10
    minutes = minutes < 10 ? "0" + minutes : minutes;

    // Agrega un 0 delante de los segundos si son menores a 10
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Crea un array con los nombres de los días de la semana
    var daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    // Crea un array con los nombres de los meses del año
    var monthsOfYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Obtiene el nombre del día de la semana actual
    var dayOfWeek = daysOfWeek[today.getDay()] + ", " + today.getDate();

    // Obtiene el nombre del mes actual
    var monthOfYear = monthsOfYear[today.getMonth()];

    // Obtiene el año actual
    var year = today.getFullYear();

    // Obtiene el nombre del día de la semana actual y la fecha completa
    var dayOfWeek = daysOfWeek[today.getDay()] + ", " + today.getDate() + " de ";

    // Obtiene el nombre del mes actual y lo agrega a la fecha completa
    var monthOfYear = monthsOfYear[today.getMonth()] + " de ";

    // Obtiene el año actual y lo agrega a la fecha completa
    var year = today.getFullYear();

    // Actualiza el elemento HTML con la hora actual
    document.querySelector(".hour").innerHTML = hours;

    // Actualiza el elemento HTML con los minutos actuales
    document.querySelector(".minutes").innerHTML = minutes;

    // Actualiza el elemento HTML con los segundos actuales
    document.querySelector(".seconds").innerHTML = seconds;

    // Actualiza el elemento HTML con AM o PM
    document.querySelector(".period").innerHTML = period;

    // Actualiza el elemento HTML con el nombre del día de la semana actual y la fecha completa
    document.querySelector(".day-name").innerHTML = dayOfWeek;

    // Actualiza el elemento HTML con el nombre del mes actual
    document.querySelector(".month-name").innerHTML = monthOfYear;

    // Actualiza el elemento HTML con el año actual
    document.querySelector(".year-number").innerHTML = year;

    // JavaScript para activar/desactivar el menú de puntos
    const dotmenuBtn = document.querySelector(".dot-menu");
    const dotMenu = document.querySelector(".dot-menu-btn");

    dotMenu.addEventListener("click", () => {
      dotmenuBtn.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (e.target.id !== "active-menu") {
        dotmenuBtn.classList.remove("active");
      }
    })

    // Agrega el atributo SameSite a las cookies
    document.cookie = "cookie-name=value; SameSite=strict; path=/; secure";
  }
  // Ejecutar la función clock cada segundo
  var updateClock = setInterval(clock, 1000);

});