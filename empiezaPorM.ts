function empiezanPorM(nombres:string[]):boolean{
    if(nombres.length == 0){
        return false
    }
    return nombres.every(nombre => nombre[0] === "M");
    
}

console.log(empiezanPorM(["Maria","Marta","Manuel","Mario","Luis"]))