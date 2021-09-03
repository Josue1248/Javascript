class FiguraGeometrica {
    constructor (base, altura){
        this.base = base;
        this.altura = altura
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super(base, altura);
      }
}

class Cuadrado extends FiguraGeometrica {
    constructor(base) {
        super(base);
      }
}

