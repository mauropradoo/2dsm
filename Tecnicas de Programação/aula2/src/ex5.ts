class Questao {
    enunciado: string;
    valor: number;

    constructor(enunciado: string, valor: number) {
        this.enunciado = enunciado;
        this.valor = valor;
    }

    print(): void {
    console.log(`${this.enunciado} (${this.valor} pts.) `);
    }
    }

    const q1 = new Questao("O que é um array?", 0.5);

    q1.print();

    export{};