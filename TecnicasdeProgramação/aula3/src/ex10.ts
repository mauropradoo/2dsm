class Texto extends String {
    primeira(): string {
        return this.charAt(0);
    }
    ultima(): string {
        return this.charAt(this.length - 1);
    }
}

const palavra = new Texto ("Boa Noite");
console.log("Quantidade:", palavra.length);
console.log("Primeira:", palavra.primeira());
console.log("Última:", palavra.ultima());
console.log("Minúsculo:", palavra.toLowerCase());

