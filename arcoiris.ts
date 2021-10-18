function colorArcoiris(colores:string[]){
    let arcoiris:string[] = ["rojo","naranja","amarillo","verde","cián","añil","violeta"];
    for(let color of colores){
        if (arcoiris.indexOf(color) != -1){
            console.log("El color " + color + " está en el arcoiris")
        }else{
            console.log("Lo siento pero el " + color + " no está en el arcoiris")
        }
    }
}

colorArcoiris(["verde","negro","amarillo","azul","naranja","marrón","morado","violeta"])