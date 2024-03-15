"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var plot = require("nodeplotlib");
// Função para calcular o tempo de execução médio
function calcularTempoMedio(funcao, n, repeticoes) {
    var tempoTotal = 0;
    for (var i = 0; i < repeticoes; i++) {
        var inicio = performance.now();
        funcao(n);
        var fim = performance.now();
        tempoTotal += (fim - inicio);
    }
    return tempoTotal / repeticoes;
}
// Parâmetros
var n = 1000; // Número alto para evitar estouro de pilha
var repeticoes = 100; // Número de repetições para calcular o tempo médio
// Criando instância da classe Fatorial
var f = new model_1.Fatorial();
// Arrays para armazenar os tempos de execução
var temposSemCache = [];
var temposComCache = [];
// Calculando o tempo de execução médio para cada cenário
for (var i = 1; i <= n; i++) {
    var tempoSemCache = calcularTempoMedio(f.factorial.bind(f), i, repeticoes);
    var tempoComCache = calcularTempoMedio(f.factorial.bind(f), i, repeticoes);
    temposSemCache.push(tempoSemCache);
    temposComCache.push(tempoComCache);
}
// Plotando o gráfico
plot.plot([
    { x: Array.from({ length: n }, function (_, i) { return i + 1; }), y: temposSemCache, name: 'Sem Cache' },
    { x: Array.from({ length: n }, function (_, i) { return i + 1; }), y: temposComCache, name: 'Com Cache' }
], {
    title: 'Desempenho do Fatorial Recursivo com e sem Cache',
    xaxis: { title: 'N' },
    yaxis: { title: 'Tempo de Execução Médio (ms)' },
    legend: { x: 0, y: 1, traceorder: 'normal', font: { family: 'Arial', size: 12, color: '#000' } },
    grid: { visible: true }
});
