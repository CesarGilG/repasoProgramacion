function caracteres(palabras:string[]):number{
    let suma:number = 0;
        palabras.forEach(palabras => suma = suma + palabras.length)
    return suma
}

function parImpar (numero:number){
    if (numero%2 != 0){
        console.log("El número es impar")
    }else{
        console.log("El número es Par")
    }
}

let array1:string[] = ["casa","coche","ciudad","cesta"];
let array2:string[] = ["barco","baca","bicicleta","balon","bisiesto","Brasil"];
let array3:string[] = ["Venezuela","veneno","voltaje"];

parImpar(caracteres(array1));
parImpar(caracteres(array2));
parImpar(caracteres(array3));