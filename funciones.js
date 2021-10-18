function caracteres(palabras) {
    var suma = 0;
    palabras.forEach(function (palabras) { return suma = suma + palabras.length; });
    return suma;
}
function parImpar(numero) {
    if (numero % 2 != 0) {
        console.log("El número es impar");
    }
    else {
        console.log("El número es Par");
    }
}
var array1 = ["casa", "coche", "ciudad", "cesta"];
var array2 = ["barco", "baca", "bicicleta", "balon", "bisiesto", "Brasil"];
var array3 = ["Venezuela", "veneno", "voltaje"];
parImpar(caracteres(array1));
parImpar(caracteres(array2));
parImpar(caracteres(array3));
