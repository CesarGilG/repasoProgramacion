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
