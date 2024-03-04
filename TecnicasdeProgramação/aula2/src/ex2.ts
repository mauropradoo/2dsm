/*Criar uma instância da classe Retangulo e, na sequência, imprimir no
terminal o valor da área e perímetro usando os métodos correspondentes.*/

class Retangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
    }

    area(): number {
    return this.base * this.altura;
    }

    perimetro(): number {
    return 2 * this.base + 2 * this.altura;
    }
    }
    

    const r = new Retangulo(2,3);
    console.log("Aréa:", r.area());
    console.log("Perímetro:", r.perimetro());

