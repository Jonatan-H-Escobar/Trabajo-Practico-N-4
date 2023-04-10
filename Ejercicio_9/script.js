
document.addEventListener('DOMContentLoaded', function() {
    // Detectar el navegador
    const navegador = detectarNavegador();
    console.log('El archivo script.js se ha cargado correctamente');
    
    
    // Detectar la resolución de pantalla
    const anchoPantalla = window.innerWidth;
    const altoPantalla = window.innerHeight;
    
    // Mostrar resultados en la página
    document.getElementById('navegador').textContent = `Navegador: ${navegador}`;
    document.getElementById('resolucion').textContent = `Resolución de pantalla: ${anchoPantalla} x ${altoPantalla}`;
    
    // Función para detectar el navegador
    function detectarNavegador() {
        const agenteUsuario = window.navigator.userAgent;
    
        if (agenteUsuario.indexOf("Firefox") > -1) {
            return "Firefox";
        } else if (agenteUsuario.indexOf("Chrome") > -1) {
            return "Chrome";
        } else if (agenteUsuario.indexOf("Trident") > -1) {
            return "Internet Explorer";
        } else if (agenteUsuario.indexOf("Edge") > -1) {
            return "Edge";
        } else if (agenteUsuario.indexOf("Safari") > -1) {
            return "Safari";
        } else {
            return "Desconocido";
        }
    }
    
    })
