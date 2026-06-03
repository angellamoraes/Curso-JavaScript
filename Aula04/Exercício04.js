let valor = Number(prompt("Informe o valor do produto:"));
let resultado;


function desconto10(valor) {
  let final = valor * 0.90;
  return `O produto recebeu 10% de desconto e agora custa R$ ${final.toFixed(2)}`;
}

function desconto20(valor) {
  let final = valor * 0.80;
  return `O produto recebeu 20% de desconto e agora custa R$ ${final.toFixed(2)}`;
}

function desconto30(valor) {
  let final = valor * 0.70;
  return `O produto recebeu 30% de desconto e agora custa R$ ${final.toFixed(2)}`;
}

function aplicarDesconto(valor, funcaoDesconto) {
  return funcaoDesconto(valor);
}

if (valor <= 100) {
  resultado = aplicarDesconto(valor, desconto10);

} else if (valor <= 500) {
  resultado = aplicarDesconto(valor, desconto20);

} else {
  resultado = aplicarDesconto(valor, desconto30);
}

alert(resultado);

/* Sistema Inteligente de Descontos
Descrição: Uma loja deseja criar um sistema inteligente para aplicar descontos automaticamente de acordo com o valor da compra.

O programa deve:

Solicitar ao usuário, utilizando prompt, o valor original do produto.
Escolher automaticamente qual função de desconto será utilizada.
Exibir o valor final do produto utilizando alert.
Regras de desconto

Compras até R$ 100 → desconto de 10%
Compras acima de R$ 100 e até R$ 500 → desconto de 20%
Compras acima de R$ 500 → desconto de 30%
Crie funções separadas para cada desconto: desconto10, desconto20, e desconto30. Cada função deve:

receber o valor do produto;
calcular o desconto;
retornar uma mensagem formatada.
Depois, crie uma função chamada aplicarDesconto que receba:

o valor do produto;
uma função de desconto.
A função aplicarDesconto deverá executar a função recebida como parâmetro e retornar o resultado.

Entrada:
Informe o valor do produto: 80
Saída:
O produto recebeu 10% de desconto e agora custa R$ 72. */
