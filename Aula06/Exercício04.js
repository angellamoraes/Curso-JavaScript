/* Catálogo de Produtos
Descrição: Crie uma função chamada exibirCatalogo que receba um array de objetos representando produtos e exiba no console o nome e o 
preço de cada um usando for...in.  */

function exibirCatalogo(produtos) {
    console.log("Catálogo de Produtos:");

    for (let indice in produtos) {
        console.log(
            produtos[indice].nome + " - R$" + produtos[indice].preco
        );
    }
}

const produtos = [
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 800 },
    { nome: "Webcam", preco: 250 }
];

exibirCatalogo(produtos);
