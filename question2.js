// Questão 2
const N = 34; // Número para ser pesquisado na sequencia
function fibonnaci(value){
    let sequencia = [0, 1];
    for(let i = 0; sequencia[i] < N; i++){
        sequencia.push(sequencia[i] + sequencia[i + 1])
    }

    return sequencia.includes(N) ? `Numero ${N} aparece na sequência` : `Numero ${N} não aparece na sequência`;
}

console.log(fibonnaci(N))