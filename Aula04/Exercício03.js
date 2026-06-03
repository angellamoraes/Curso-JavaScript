function verificarIdade(nome, idade) {
    nome = nome || "visitante"
    if (idade < 0 || idade > 120) {
    alert(`Idade inválida`);

  } else if (idade < 18) {
    alert(`Olá, ${nome}! Você é menor de idade.`);

  } else {
    alert(`Olá, ${nome}! Você é maior de idade.`);
  }
}

let continuar = true;

while (continuar) {
  let nome = prompt("Informe nome:");
  let idade = prompt("Informe idade:");

   verificarIdade(nome, idade);

   continuar = confirm("Deseja verificar outra idade?");
}

/* Verificador de Idade
Descrição: Crie uma função chamada verificarIdade que receba dois parâmetros: nome (com valor padrão "visitante") e idade. A função não deve retornar nenhum valor, apenas exibir uma mensagem com alert informando:

Olá, [nome]! Você é menor de idade. se a idade for menor que 18.
Olá, [nome]! Você é maior de idade. se a idade for 18 ou mais.
Antes de exibir a mensagem, verifique se a idade é válida:

A idade não pode ser negativa.
A idade não pode ser maior que 120.
Caso a idade seja inválida, exiba: Idade inválida!.

Funcionamento do programa

O programa deve:

Solicitar o nome da pessoa utilizando prompt.
Solicitar a idade utilizando prompt.
Chamar a função verificarIdade.
Após a verificação, perguntar com confirm se o usuário deseja verificar outra idade.
Repetir o processo enquanto a resposta do confirm for positiva.
⚠️ O confirm deve aparecer apenas depois da primeira verificação.

Exemplo de:

Entrada:
prompt("Informe o nome:")
-> Lucas

prompt("Informe a idade:")
-> 17

confirm("Deseja verificar outra idade?")
-> Cancelar
Saída:
Olá, Lucas! Você é menor de idade.  */
