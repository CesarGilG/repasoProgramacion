function revertir(elArray:string[]){
    let arrayInvertido:string[] = [];
    for (let i = elArray.length; i > 0 ; i--){
        arrayInvertido.push(elArray[i-1])
    }
    return arrayInvertido;
}
console.log(revertir(["uno","dos","tres","cuatro","cinco","seis"]));