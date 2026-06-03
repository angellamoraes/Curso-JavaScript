/*Descrição: Escreva um programa que simule uma calculadora simples. O programa deve ler dois números inteiros 
e o tipo de operação a ser realizada (soma, subtração, multiplicação ou divisão). A operação será escolhida pelo
usuário, utilizando um número que representará cada operação:
1 para soma
2 para subtração
3 para multiplicação
4 para divisão*/

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

let operacao = Number(prompt(`--- Operações ---
    1 - soma 
    2- subtração
    3 - multiplicação
    4 - divisão
    -----------------
    
    Escolha uma operação:`));

    switch (operacao) {
        case 1:
            alert(`Resultado da soma: ${num1 + num2}`);
            break;
        case 2:
            alert(`Resultado da subtração: ${num1 - num2}`);
            break;
        case 3:
            alert(`Resultado da multiplicação: ${num1 * num2}`)
            break;
        case 4:
            alert(`Resultado da divisão: ${num1 / num2}`);
            break;
        default:
            alert(`Opção inválida. Escolha uma operações de 1 a 4.`);
    }
