import { Matematica, Multiplicar, Somar } from "./ex5";

class Subtrair extends Matematica {

    constructor(nro:number){
        super(nro);
    }

    calcular(): void {
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.nro} - ${i} = ${this.nro - i}`);
        }
    }
}

const a: Matematica = new Somar(5);
a.calcular();
const b: Matematica = new Multiplicar(5);
b.calcular();
const c: Matematica = new Subtrair(5);
c.calcular();