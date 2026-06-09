/* Filtrando Devedores
Descrição: Crie uma função chamada filtrarDevedores que recebe um array de dívidas e o valor máximo da dívida e retorna um novo array contendo apenas as dívidas que ultrapasam esse valor. 
Use filter para selecionar apenas os devedores.  */

const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];  

function filtrarDevedores(dividas, valorMaximo) {
  return dividas.filter(divida => divida > valorMaximo);
}

const devedores = filtrarDevedores(dividas, 80);  

console.log(devedores);
