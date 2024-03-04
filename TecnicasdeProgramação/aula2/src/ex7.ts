class Ponto {
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    distancia(p:Ponto):number{
        const dx = (this.x - p.x) ** 2;
        const dy = (this.y - p.y) ** 2;
        const d = Math.sqrt(dx+dy);
        return d;
    }
}

const a = new Ponto(3,5);
const b = new Ponto(1,2);
//observe que passamos como parâmetro um objeto do tipo Ponto
/*Comentário para nao atrapalhar o ex.8:
console.log("Distância:", a.distancia(b));*/

export default Ponto;