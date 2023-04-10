function abrirVentana() {
    // Generar un número aleatorio entre 1 y 100
    const numeroRandom = Math.floor(Math.random() * 100) + 1;
    // Abrir una nueva ventana
    const ventana = window.open("", "", "width=500,height=500");
    // Escribir el número en la ventana emergente y aplicar un estilo CSS
    ventana.document.write(`<h1 id="numero" style="font-size: 10em">${numeroRandom}</h1>`);
}