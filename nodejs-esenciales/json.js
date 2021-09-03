class Persona {
    constructor(nombre, apPaterno, apMaterno, email){
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.email = email;
    }

    imprimePersona = function(){
        console.log(this);
    }
}

let persona1 = new Persona("Josue", "Montaño", "Aguilar", "JosueM.A@hotmail.com");
Persona.imprimePersona();

console.log(JSON.stringify(persona1));