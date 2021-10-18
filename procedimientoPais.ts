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