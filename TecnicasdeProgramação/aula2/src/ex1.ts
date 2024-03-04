class Filme {
    titulo: string;
    duracao: number;

    constructor(titulo: string, duracao: number) {
        this.titulo = titulo;
        this.duracao = duracao;
    }

    print(): void {
    console.log(`O filme ${this.titulo} possui ${this.duracao} min.`);
    }
    }

    const um = new Filme("De volta pro futuro", 116);
    const dois = new Filme ("Matrix", 136);

    um.print();
    dois.print();

    export{};
   
    