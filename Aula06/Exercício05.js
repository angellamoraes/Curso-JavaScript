/* Proteção de Objetos
Descrição: Crie uma função chamada protegerObjeto que recebe dois parâmetros um objeto e um modo de proteção, que pode ser:

"extensivel": aplica Object.preventExtensions
"selado": aplica Object.seal
"congelado": aplica Object.freeze
A função deve aplicar a proteção correspondente ao objeto e retornar um resumo em forma de objeto com as seguintes informações:

extensivel: true ou false (indica se é possível adicionar novas propriedades)
selado: true ou false (indica se o objeto está selado)
congelado: true ou false (indica se o objeto está congelado) */

function protegerObjeto(objeto, modo) {
    if (modo === "extensivel") {
        Object.preventExtensions(objeto);
    } else if (modo === "selado") {
        Object.seal(objeto);
    } else if (modo === "congelado") {
        Object.freeze(objeto);
    }

    return {
        extensivel: Object.isExtensible(objeto),
        selado: Object.isSealed(objeto),
        congelado: Object.isFrozen(objeto)
    };
}

const produto = {
    nome: "Câmera",
    preco: 1200
};

const resultado = protegerObjeto(produto, "congelado");

console.log(resultado);
