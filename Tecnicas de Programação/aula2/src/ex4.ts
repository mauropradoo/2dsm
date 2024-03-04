class Carro {
    marca: string = "";
    modelo: string = "";

    setMarca(marca: string): void {
    this.marca = marca;
    }

    setModelo(modelo: string): void {
    this.modelo = modelo;
    }

    print(): void {
    console.log(`${this.marca} ${this.modelo}`);
    }
    }

const um = new Carro();
um.setModelo("Gol");
um.setMarca("VW");

const dois = new Carro();
dois.setModelo("Uno");
dois.setMarca("Fiat");

um.print();
dois.print();