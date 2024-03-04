import { Geometria, Retangulo, Circulo } from "./ex8";

class Quadrado extends Geometria {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    area(): number {
        return this.lado * this.lado;
    }
}

let geom: Geometria = new Retangulo(10, 5);
console.log("Retângulo:", geom.area());

geom = new Circulo(5);
console.log("Círculo:", geom.area());

geom = new Quadrado(5);
console.log("Quadrado:", geom.area());