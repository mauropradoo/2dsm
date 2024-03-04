class Operacao {
    somar(a:number,b:number):number {
    return a + b;
    }

}
// classe "secundaria"
    class Calcular extends Operacao {
    x: number;
    y: number;
    
// super tem que ser chamado primeiro,
// ele puxa a operacao 
    constructor(x:number, y:number){
        super(); // = new Operacao();
        this.x = x;
        this.y = y;

    }

    somar(): number {
    return super.somar(this.x, this.y);
    }

}

    const c = new Calcular(5,15);
    console.log("Somar:", c.somar());