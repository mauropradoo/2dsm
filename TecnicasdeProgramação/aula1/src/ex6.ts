/*Primeiro passo: Deixar anonima;
Segundo passo: Se tiver apenas "return" no corpo,
podemos tirar o "return" e as chaves "{}"*/ 

const isPar = (nro:number) => 
    nro % 2 === 0 ? true : false;

console.log("Resultado:", isPar(2));
console.log("Resultado:", isPar(3));