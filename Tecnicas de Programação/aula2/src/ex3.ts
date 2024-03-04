class Aleatorio {
    get(): number {
    return Math.floor(Math.random() * 100 + 1);
    }
}


const a = new Aleatorio();
for(let i = 0; i < 5; i++){
    console.log(a.get());    
}

