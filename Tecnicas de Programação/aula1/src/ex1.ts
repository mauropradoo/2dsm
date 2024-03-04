function somar(a:number,b:number):number|string {
    if ( a < b ){
        return a + b;  //soma
    } else {
        return "" + a + b;  //concatena
    }
}

console.log("Resultado:", somar(1,2));
console.log("Resultado:", somar(5,3));