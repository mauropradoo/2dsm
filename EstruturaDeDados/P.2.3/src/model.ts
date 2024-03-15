export class Fatorial {
    private cache: { [key: number]: number } = {};

    factorial(n: number): number {
        if (n in this.cache) {
            return this.cache[n];
        }
        if (n === 0) {
            return 1;
        } else {
            const result = n * this.factorial(n - 1);
            this.cache[n] = result;
            return result;
        }
    }
}
