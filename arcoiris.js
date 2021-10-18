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
