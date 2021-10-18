function empiezanPorM(nombres) {
    if (nombres.length == 0) {
        return false;
    }
    return nombres.every(function (nombre) { return nombre[0] === "M"; });
}
console.log(empiezanPorM(["Maria", "Marta", "Manuel", "Mario", "Luis"]));
