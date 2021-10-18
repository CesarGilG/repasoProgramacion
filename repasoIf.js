//función para saber el signo del zodiaco
function signoZodiaco(day, month) {
    var signo = "";
    var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    if (day < 1 || day > 31) {
        signo = "El día es incorrecto";
    }
    if (mes.indexOf(month) == -1) {
        signo = "Escribe correctamente el mes";
    }
    if (month == "marzo" && day >= 21 || month == "abril" && day <= 20) {
        signo = "Tu signo zodiacal es Aries";
    }
    if (month == "abril" && day >= 21 || month == "mayo" && day <= 20) {
        signo = "Tu signo zodiacal es Tauro";
    }
    if (month == "mayo" && day >= 21 || month == "junio" && day <= 20) {
        signo = "Tu signo zodiacal es Géminis";
    }
    if (month == "junio" && day >= 21 || month == "julio" && day <= 20) {
        signo = "Tu signo zodiacal es Cáncer";
    }
    if (month == "julio" && day >= 21 || month == "agosto" && day <= 21) {
        signo = "Tu signo zodiacal es Leo";
    }
    if (month == "agosto" && day >= 22 || month == "septiembre" && day <= 20) {
        signo = "Tu signo zodiacal es Virgo";
    }
    if (month == "septiembre" && day >= 21 || month == "octubre" && day <= 20) {
        signo = "Tu signo zodiacal es Libra";
    }
    if (month == "octubre" && day >= 21 || month == "noviembre" && day <= 21) {
        signo = "Tu signo zodiacal es Escorpio";
    }
    if (month == "noviembre" && day >= 22 || month == "diciembre" && day <= 21) {
        signo = "Tu signo zodiacal es Sagitario";
    }
    if (month == "diciembre" && day >= 22 || month == "enero" && day <= 20) {
        signo = "Tu signo zodiacal es Capricornio";
    }
    if (month == "enero" && day >= 21 || month == "febrero" && day <= 19) {
        signo = "Tu signo zodiacal es Acuario";
    }
    if (month == "febrero" && day >= 20 || month == "marzo" && day <= 20) {
        signo = "Tu signo zodiacal es Piscis";
    }
    return signo;
}
//comprobación
// console.log(signoZodiaco(25,"eneero"));
// console.log(signoZodiaco(25,"febrero"));
// console.log(signoZodiaco(25,"marzo"));
// console.log(signoZodiaco(25,"abril"));
// console.log(signoZodiaco(25,"mayo"));
// console.log(signoZodiaco(25,"junio"));
// console.log(signoZodiaco(25,"julio"));
// console.log(signoZodiaco(25,"agosto"));
// console.log(signoZodiaco(25,"septiembre"));
// console.log(signoZodiaco(25,"octubre"));
// console.log(signoZodiaco(25,"noviembre"));
// console.log(signoZodiaco(25,"diciembre"));
//función numero par
function numeroPar(numeros) {
    var resultado = [];
    var conclusion;
    numeros.forEach(function (pares) { return resultado.push(pares % 2 == 0); });
    if (resultado.indexOf(true) != -1) {
        conclusion = "El array " + numeros + " contiene números Pares";
    }
    else {
        conclusion = "El array " + numeros + " no contiene Pares";
    }
    return conclusion;
}
console.log(numeroPar([1, 2, 3, 4, 5, 6, 7]));
console.log(numeroPar([1, 3, 5, 7, 9]));
//funcion numero impar
function parImpar(numero) {
    if (numero % 2 != 0) {
        console.log("El número es impar");
    }
    else {
        console.log("El número es Par");
    }
}
//función empieza por M
function empiezanPorM(nombres) {
    if (nombres.length == 0) {
        return false;
    }
    return nombres.every(function (nombre) { return nombre[0] === "M"; });
}
console.log(empiezanPorM(["Maria", "Marta", "Manuel", "Mario", "Luis"]));
