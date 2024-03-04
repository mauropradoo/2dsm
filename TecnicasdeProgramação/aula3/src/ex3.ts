class Um {
    nro: number = 0;
    incrementar(): void {
        this.nro++;
    }
}

class Dois extends Um {
    incrementar(): void {
        this.nro += 2;
        super.incrementar();
    }
}

class Tres extends Dois {
    incrementar(): void {
        this.nro += 3;
        super.incrementar();
    }
}

const teste = new Tres();
teste.incrementar();
console.log("Nro:", teste.nro);