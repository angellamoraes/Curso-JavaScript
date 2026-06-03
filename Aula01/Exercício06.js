/*Descrição: Crie um programa em JavaScript que solicite ao usuário seu nome, peso (em kg) 
e altura (em metros). Em seguida, calcule o IMC (Índice de Massa Corporal) utilizando a fórmula: 
IMC = peso / (altura * altura)*/

let nome = prompt("Qual o seu nome?");
let peso = Number(prompt("Qual o seu peso?"));
let altura = Number(prompt("Qual a sua altura?"));

let conferir = confirm(`Seus Dados:
    Nome: ${nome}
    Peso: ${peso}
    Altura: ${altura}

    Deseja continuar?`);

    if (conferir) {
        let imc = peso / (altura * altura);
        alert(`${nome}, seu IMC é ${imc}`);
    } else {
        alert(`Operação cancelada`);
    }
