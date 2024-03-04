//Maneira convencional;

/* function operar(v1:number[],v2:string[]) {
    let res:string[] = [];
    for(let i = 0; i < v1.length; i++){
        res[i] = v1[i] + v2[i];
    }
    return res;
}

const vet1 = [5,3,1,8,2];
const vet2 = ["M","a","r","i","a"];
console.log("Resultado:", operar(vet1,vet2)); */

// Maneira genérica;

function operar(v1:Array<number>,v2:Array<string>) {
    let res:string[] = [];
    for(let i = 0; i < v1.length; i++){
        res[i] = v1[i] + v2[i];
    }
    return res;
}

const vet1 = [5,3,1,8,2];
const vet2 = ["M","a","r","i","a"];
console.log("Resultado:", operar(vet1,vet2)); 

//comando pra poder usar o mesmo nome de const em diversos arquivos sem atrapalhar:

export{};