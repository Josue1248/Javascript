//OOP OBJECT ORIENTED PROGRAMMING

class Animal {
    constructor(c) {
        this.categoria = c;
    }
}


class CuentaBancaria {
    constructor(s=0, t= 'M') {
        this.saldo = s;
        this.tipo = t;
    }
    deposito(cantidad) {
        this.saldo += cantidad;
    }

    retiro(cantidad) {
        this.saldo -= cantidad;
    }
}

//Tarjeta de credito hereda de la clase cuentabancaria
class TarjetaDeCredito extends CuentaBancaria {
    constructor(s=0, t='TC',fc="xx/xx/xx", pm=0) {
        super(s,t);
        this.FechaDeCorte = fc;
        this.pagoMinimo = pm;
    }

    imprimeFechaDeCorte() {
        console.log(`La fecha de corte es: ${this.FechaDeCorte}`);
    }

    imprimePagoMinimo() {
        console.log(`El pago minimo es: ${this.pagoMinimo}`);
    }

}


//var main = function () {
    let tiburon = new Animal('Tiburon');
    let perro = new Animal('Perro');

    console.log(perro.categoria);
    console.log(tiburon.categoria);


    let cuenta1 = new CuentaBancaria(5000, 'M');
    cuenta1.retiro(1000);
    cuenta1.deposito(2000);
    cuenta1.deposito(3000);


    let cuenta2 = new CuentaBancaria(10000, 'E');
    console.log(cuenta1.saldo);
    console.log(cuenta1.tipo);
    console.log(cuenta2.saldo);
    console.log(cuenta2.tipo);
    console.log(true);

    let cuenta3= new CuentaBancaria();
    console.log(cuenta3.saldo);
    console.log(cuenta3.tipo);

    let cuenta4 = new TarjetaDeCredito(5000, 'TC','08/06/2021');
    console.log(cuenta4.saldo);
    console.log(cuenta4.tipo);
    cuenta4.imprimeFechaDeCorte();
    cuenta4.imprimePagoMinimo();

    let nombre = "Test Info";


    // no esta definida y por tanto no pasa por el constructor y no manda algo 
    //let cuenta3 = new CuentaBancaria();
    //console.log(cuenta3.saldo)
//}
//main();