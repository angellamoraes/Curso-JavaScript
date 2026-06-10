/* Explorador de Objetos
Descrição: Crie uma função chamada explorarObjeto que recebe dois parâmetros um objeto e uma operação, que pode ser "chaves", 
"valores" ou "entradas". A função deve retornar, respectivamente:
Para "chaves": um array com as propriedades (usar Object.keys)
Para "valores": um array com os valores (usar Object.values)
Para "entradas": um array com pares [chave, valor] (usar Object.entries)
Se for passada uma operação inválida, a função deve retornar a mensagem: "Operação inválida."  */

function explorarObjeto(objeto, operacao) {
    if (operacao === "chaves") {
        return Object.keys(objeto);
    } else if (operacao === "valores") {
        return Object.values(objeto);
    } else if (operacao === "entradas") {
        return Object.entries(objeto);
    } else {
        return "Operação inválida.";
    }
}

const pessoa = {
    nome: "Ana",
    idade: 28,
    cidade: "Recife"
};

console.log(explorarObjeto(pessoa, "chaves"));
console.log(explorarObjeto(pessoa, "valores"));
console.log(explorarObjeto(pessoa, "entradas"));
console.log(explorarObjeto(pessoa, "teste"));
