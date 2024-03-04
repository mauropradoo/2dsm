/* Função anônima é você declarar ela sem nome e manusea-lá 
a partir de sua variável */

const Arley = function(v1:Array<number>,v2:Array<string>) {
    let res:string[] = [];
    for(let i = 0; i < v1.length; i++){
        res[i] = v1[i] + v2[i];
    }
    return res;
}

const vet1 = [5,3,1,8,2];
const vet2 = ["M","a","r","i","a"];
console.log("Resultado:", Arley(vet1,vet2)); 

export{};