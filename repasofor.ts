//procedimiento para saber si a que continente pertenece un país.

let asia:string[] = ["China","Corea","Japón","India","Vietnam"];
let europa:string[] = ["Portugal","España","Francia","Italia","Alemania"];
let america:string[] = ["Colombia","Canadá","México","Chile","Venezuela"];
let africa:string[] = ["Congo","Egipto","Tanzania","Marruecos","Nigeria"];
let oceania:string[] = ["Nueva Zelanda","Autralia","Fiyi","Samoa","Tonga"];

let paises:string[] = ["China","Portugal","Colombia","Congo","Nueva Zelanda","Turquía"];

function saberContinente(){
    for (let i = 0 ; i<paises.length ; i++){
        if (asia.indexOf(paises[i]) != -1){
            console.log(paises[i] + " está en Asia.");
        }else if (europa.indexOf(paises[i]) != -1){
            console.log(paises[i] + " está en Europa.");
        }else if (america.indexOf(paises[i]) != -1){
            console.log(paises[i] + " está en América.");
        }else if (africa.indexOf(paises[i]) != -1){
            console.log(paises[i] + " está en África.");
        }else if (oceania.indexOf(paises[i]) != -1){
            console.log(paises[i] + " está en Oceanía.");
        }else{
            console.log("Ese país no está en la base de datos")
        }
    }
}
//Comprobación de funcionamiento;
saberContinente();

//función invertir

function revertir(elArray:string[]){
    let arrayInvertido:string[] = [];
    for (let i = elArray.length; i > 0 ; i--){
        arrayInvertido.push(elArray[i-1])
    }
    return arrayInvertido;
}
console.log(revertir(["uno","dos","tres","cuatro","cinco","seis"]));


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

//función contar caracteres de una palabra

function caracteres(palabras:string[]):number{
    let suma:number = 0;
        palabras.forEach(palabras => suma = suma + palabras.length)
    return suma
}

//función de los colores del arcoiris
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