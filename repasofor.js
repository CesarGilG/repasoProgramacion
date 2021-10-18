//procedimiento para saber si a que continente pertenece un país.
var asia = ["China", "Corea", "Japón", "India", "Vietnam"];
var europa = ["Portugal", "España", "Francia", "Italia", "Alemania"];
var america = ["Colombia", "Canadá", "México", "Chile", "Venezuela"];
var africa = ["Congo", "Egipto", "Tanzania", "Marruecos", "Nigeria"];
var oceania = ["Nueva Zelanda", "Autralia", "Fiyi", "Samoa", "Tonga"];
var paises = ["China", "Portugal", "Colombia", "Congo", "Nueva Zelanda", "Turquía"];
function saberContinente() {
    for (var i = 0; i < paises.length; i++) {
        if (asia.indexOf(paises[i]) != -1) {
            console.log(paises[i] + " está en Asia.");
        }
        else if (europa.indexOf(paises[i]) != -1) {
            console.log(paises[i] + " está en Europa.");
        }
        else if (america.indexOf(paises[i]) != -1) {
            console.log(paises[i] + " está en América.");
        }
        else if (africa.indexOf(paises[i]) != -1) {
            console.log(paises[i] + " está en África.");
        }
        else if (oceania.indexOf(paises[i]) != -1) {
            console.log(paises[i] + " está en Oceanía.");
        }
        else {
            console.log("Ese país no está en la base de datos");
        }
    }
}
//Comprobación de funcionamiento;
saberContinente();
//función invertir
function revertir(elArray) {
    var arrayInvertido = [];
    for (var i = elArray.length; i > 0; i--) {
        arrayInvertido.push(elArray[i - 1]);
    }
    return arrayInvertido;
}
console.log(revertir(["uno", "dos", "tres", "cuatro", "cinco", "seis"]));
//función Número Impares
function numImpar(numero) {
    var numeros = [];
    for (var i = 1; i <= numero; i++) {
        if (i % 2 != 0) {
            numeros.push(i);
        }
    }
    console.log("El número " + numero + " contiene los siguientes números impares " + numeros);
}
numImpar(300);
//función contar caracteres de una palabra
function caracteres(palabras) {
    var suma = 0;
    palabras.forEach(function (palabras) { return suma = suma + palabras.length; });
    return suma;
}
//función de los colores del arcoiris
function colorArcoiris(colores) {
    var arcoiris = ["rojo", "naranja", "amarillo", "verde", "cián", "añil", "violeta"];
    for (var _i = 0, colores_1 = colores; _i < colores_1.length; _i++) {
        var color = colores_1[_i];
        if (arcoiris.indexOf(color) != -1) {
            console.log("El color " + color + " está en el arcoiris");
        }
        else {
            console.log("Lo siento pero el " + color + " no está en el arcoiris");
        }
    }
}
colorArcoiris(["verde", "negro", "amarillo", "azul", "naranja", "marrón", "morado", "violeta"]);
