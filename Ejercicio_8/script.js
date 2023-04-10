function sumar() {
    const numeros = document.getElementById("numeros").value;
    const arrNumeros = numeros.split(",");
    let suma = 0;
    for (let i = 0; i < arrNumeros.length; i++) {
        suma += parseInt(arrNumeros[i]);
    }
    document.getElementById("resultado").textContent = `La suma de los números es: ${suma}`;
}
