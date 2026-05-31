// Exemplo: Informar a situação do aluno a partir das restrições abaixo:

// Se a nota for maior ou igual a 9 e menor ou igual a 10 e a quantidade de faltas for menor que 10: "Aprovado com Louvor"

// Se a nota for maior ou igual a 7 e menor que 9 e quantidade de faltas for menor que 10: "Aprovado"

// Se a nota for maior ou igual a 4 e menor que 7 e a quantidade de faltas menor que 10: "Recuperação"

// Se a nota for maior ou igual a zero e menor que 4 e a quantidade de faltas for menor que 10: "Reprovado"

// Caso contrário: "Nota inválida"

let nota = 10;
let faltas = 9;

if (nota >= 9 && nota <= 10 && faltas < 10) {
    console.log("Aprovado com Louvor");
} else if (nota >= 7 && nota < 9 && faltas < 10) {
    console.log("Aprovado");
} else if (nota >= 4 && nota < 7 && faltas < 10) {
    console.log("Recuperação");
} else if (nota >= 0 && nota < 4 && faltas < 10) {
    console.log("Reprovado");
} else {
    console.log("Nota inválida");
}
