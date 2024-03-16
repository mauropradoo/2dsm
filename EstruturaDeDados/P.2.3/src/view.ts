import Factorial from "./model";

// Função para medir o tempo real em milissegundos
function measureTime(callback: () => void): number {
    const start = process.hrtime();
    callback();
    const end = process.hrtime(start);
    return end[0] * 1000 + end[1] / 1e6; // Converte para milissegundos
}

// Exemplo de uso
const n = 1000; // Número para calcular o fatorial

// Calcula o fatorial sem usar o cache
const timeWithoutCache = measureTime(() => {
    const factorialCalculatorWithoutCache = new Factorial();
    factorialCalculatorWithoutCache.recursiveFactorial(n);
});
console.log(`Tempo sem cache: ${timeWithoutCache.toFixed(2)} ms`);

// Calcula o fatorial usando o cache
const timeWithCache = measureTime(() => {
    const factorialCalculatorWithCache = new Factorial();
    factorialCalculatorWithCache.recursiveFactorial(n);
});
console.log(`Tempo com cache: ${timeWithCache.toFixed(2)} ms`);
