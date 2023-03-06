const ESTADOS = {
    'SP' : 6783643,
    'RJ' : 3667866,
    'MG' : 2922988,
    'ES' : 2716548,
    'Outros' : 1984953
}

var mediaEstados = new Map()
function verificarEstados(value){
    // Somando o faturamento total dos estados
    let somaFaturamento = 0;
    for(i in value){
        somaFaturamento += value[i]
    }

    let siglaEstados = Object.keys(value).slice("") // Dividindo a sigla dos estados

    // Verificando quanto cada Estado Representa
    for(i in siglaEstados){
        let valorEstado = (value[siglaEstados[i]] * 100) / somaFaturamento ;
        mediaEstados.set(siglaEstados[i], valorEstado);
        
    }
    return mediaEstados;
}

console.log(verificarEstados(ESTADOS))