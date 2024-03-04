//Pra colocar tipo em Array, tem que usar [];
//Res é o que retorna, e como pedido no enunciado, vira string;

function converter(vet:number[]){
    const res: string[] = [];
    for(let i = 0; i < vet.length; i++){
        res [i]= "" + vet[i];
    }
    return res;
}

const vetor = [5,3,1,8,2];
console.log("Resultado:", converter(vetor));


