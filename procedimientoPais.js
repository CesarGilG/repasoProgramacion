//procedimiento para saber si a que continente pertenece un país.
var asia = ["China", "Corea", "Japón", "India", "Vietnam"];
var europa = ["Portugal", "España", "Francia", "Italia", "Alemania"];
var america = ["Colombia", "Canadá", "México", "Chile", "Venezuela"];
var africa = ["Congo", "Egipto", "Tanzania", "Marruecos", "Nigeria"];
var oceania = ["Nueva Zelanda", "Autralia", "Fiyi", "Samoa", "Tonga"];
var paises = ["China", "Portugal", "Colombia", "Congo", "Nueva Zelanda", "Turquía"];
function saberContinente() {
    for (var i = 0; i < paises.length; i++) {
        if (asia.indexOf(paises[i]) != -1) {
            console.log(paises[i] + " está en Asia.");
        }
        else if (europa.indexOf(paises[i]) != -1) {
            console.log(paises[i] + " está en Europa.");
        }
        else if (america.indexOf(paises[i]) != -1) {
            console.log(paises[i] + " está en América.");
        }
        else if (africa.indexOf(paises[i]) != -1) {
            console.log(paises[i] + " está en África.");
        }
        else if (oceania.indexOf(paises[i]) != -1) {
            console.log(paises[i] + " está en Oceanía.");
        }
        else {
            console.log("Ese país no está en la base de datos");
        }
    }
}
//Comprobación de funcionamiento;
saberContinente();
