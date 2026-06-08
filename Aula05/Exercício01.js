/* Gerenciador de Lista de Tarefas
Descrição: Crie uma função chamada gerenciarTarefas que recebe um array de tarefas e uma ação a ser realizada. As ações possíveis são:
"adicionarInicio": adiciona uma nova tarefa no início da lista.
"adicionarFim": adiciona uma nova tarefa no final da lista.
"removerInicio": remove a primeira tarefa da lista.
"removerFim": remove a última tarefa da lista.
A função deve receber dois parâmetros: o array de tarefas e a ação a ser realizada. Se a ação for "adicionarInicio" ou "adicionarFim", a função também deve receber um terceiro parâmetro com a tarefa a ser adicionada. */

const tarefas = ["Estudar", "Treinar", "Ler"];

function gerenciarTarefas(tarefas, acao, novaTarefa) {

  if(acao === "adicionarInicio") {
    tarefas.unshift(novaTarefa);

  } else if (acao === "adicionarFim") {
    tarefas.push(novaTarefa);

  }else if (acao === "removerInicio") {
    tarefas.shift();

  } else if (acao === "removerFim") {
    tarefas.pop();
  }

}

gerenciarTarefas(tarefas, "adicionarFim", "Dormir");

console.log(tarefas);
