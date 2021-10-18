//función Número Impares
function numImpar(numero:number){
    let numeros:number[] = [];
    for (let i = 1 ; i<=numero ; i++){
        if(i%2 != 0){
            numeros.push(i)
        }
    }
    console.log("El número " + numero + " contiene los siguientes números impares " + numeros)
}
numImpar(300)