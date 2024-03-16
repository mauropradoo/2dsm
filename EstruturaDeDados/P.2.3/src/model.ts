class Factorial {
    private cache: Record<number, number> = {}; // Dicionário para armazenar os resultados intermediários

    recursiveFactorial(n: number): number {
        if (n in this.cache) {
            // Se o resultado já estiver no cache, retorna-o diretamente
            return this.cache[n];
        } else if (n === 0 || n === 1) {
            // Caso base: fatorial de 0 ou 1 é 1
            return 1;
        } else {
            // Calcula o fatorial recursivamente e armazena no cache
            const result = n * this.recursiveFactorial(n - 1);
            this.cache[n] = result;
            return result;
        }
    }
}
 export default Factorial;