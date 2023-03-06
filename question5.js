// Questão 5 (Sem usar reverse)
const FRASE = "Tec Desenvolvedor"

function reverseWord(value){
    let lista = value.split("")
    let novaFrase = ""
    for(i in lista){
        novaFrase = novaFrase.concat(lista[lista.length - 1 - i])
    }
    return novaFrase
}
console.log(reverseWord(FRASE));
