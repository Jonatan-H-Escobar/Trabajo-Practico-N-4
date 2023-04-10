function cambiarImagen(imagen) {
  var imagenActual = imagen.src;
  var nuevaImagen = imagen.getAttribute('data-src');
  if (imagenActual.includes(nuevaImagen)) {
    imagen.src = imagen.alt;
  } else {
    imagen.alt = imagen.src;
    imagen.src = nuevaImagen;
  }
}





