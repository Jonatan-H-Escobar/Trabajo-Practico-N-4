function sumar() {
    const numeros = document.getElementById('numeros').value.split(',').map(Number);
    const resultado = sumarNumeros(numeros);
    document.getElementById('resultado').textContent = `La suma es ${resultado}.`;
}

function sumarNumeros(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}