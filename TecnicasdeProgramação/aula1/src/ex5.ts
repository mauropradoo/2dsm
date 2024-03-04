/* Para trabalhar com ArrayFunction, tem que apagar o "Function" e 
depois dos parenteses, colocar "=>" */

const Mauro = (v1:Array<number>,v2:Array<string>) => {
    let res:string[] = [];
    for(let i = 0; i < v1.length; i++){
        res[i] = v1[i] + v2[i];
    }
    return res;
}

const vet1 = [5,3,1,8,2];
const vet2 = ["M","a","r","i","a"];
console.log("Resultado:", Mauro(vet1,vet2)); 