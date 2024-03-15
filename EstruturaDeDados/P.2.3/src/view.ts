import { Fatorial } from './model';
import * as plot from 'nodeplotlib';

// Função para calcular o tempo de execução médio
function calcularTempoMedio(funcao: (n: number) => number, n: number, repeticoes: number): number {
    let tempoTotal = 0;
    for (let i = 0; i < repeticoes; i++) {
        const inicio = performance.now();
        funcao(n);
        const fim = performance.now();
        tempoTotal += (fim - inicio);
    }
    return tempoTotal / repeticoes;
}

// Parâmetros
const n: number = 1000; // Número alto para evitar estouro de pilha
const repeticoes: number = 100; // Número de repetições para calcular o tempo médio

// Criando instância da classe Fatorial
const f = new Fatorial();

// Arrays para armazenar os tempos de execução
const temposSemCache: number[] = [];
const temposComCache: number[] = [];

// Calculando o tempo de execução médio para cada cenário
for (let i = 1; i <= n; i++) {
    const tempoSemCache = calcularTempoMedio(f.factorial.bind(f), i, repeticoes);
    const tempoComCache = calcularTempoMedio(f.factorial.bind(f), i, repeticoes);
    temposSemCache.push(tempoSemCache);
    temposComCache.push(tempoComCache);
}

// Plotando o gráfico
plot.plot([
    { x: Array.from({ length: n }, (_, i) => i + 1), y: temposSemCache, name: 'Sem Cache' },
    { x: Array.from({ length: n }, (_, i) => i + 1), y: temposComCache, name: 'Com Cache' }
], {
    title: 'Desempenho do Fatorial Recursivo com e sem Cache',
    xaxis: { title: 'N' },
    yaxis: { title: 'Tempo de Execução Médio (ms)' },
    legend: { x: 0, y: 1, traceorder: 'normal', font: { family: 'Arial', size: 12, color: '#000' } },
});
