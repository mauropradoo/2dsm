// quando se tem o "?", o valor dela natural é "undefined"

class Carro {
    marca?: string;
    modelo?: string;
    ano?: number;

    constructor(marca?:string, modelo?:string, ano?:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    };

    print(): void {
        console.log(this);
    }
}

const g = new Carro("VW", "Gol", 2010);
g.print();

const f = new Carro("Fiat", "Uno");
f.print();

const v = new Carro();
v.print();
