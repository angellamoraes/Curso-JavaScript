/* Formulário de Cadastro
Objetivo: Criar uma função que será executada ao enviar um formulário. A função deve capturar os dados preenchidos e exibir uma mensagem 
de boas-vindas na tela, sem recarregar a página.
Tarefa: 1. Capturar o evento de envio do formulário usando addEventListener("submit").
2. Prevenir o comportamento padrão com preventDefault().
3. Ler os dados dos campos: nome, preço, categoria e descrição.
4. Validar os dados:
Nome deve ter no mínimo 3 caracteres.
Preço deve ser um número positivo.
Categoria deve ser obrigatória.
A descrição é opcional.
5. Se houver erros de validação, mostrar uma mensagem de erro visível no formulário (ex: em vermelho acima do botão).
6. Se estiver tudo certo, criar dinamicamente um bloco contendo:
Nome do produto
Preço formatado com toFixed(2)
Categoria
Descrição (ou “Sem descrição”)
Data e hora atual (new Date().toLocaleString("pt-BR"))
7. Após o cadastro, limpar o formulário com form.reset(). */

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <title>Exercício: Cadastro de Produtos</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f1f1f1;
      padding: 40px;
      text-align: center;
    }

    .container {
      max-width: 500px;
      margin: auto;
      background: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    form {
      display: flex;
      flex-direction: column;
    }

    input, select, textarea {
      margin-bottom: 15px;
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    button {
      padding: 10px;
      font-size: 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    #mensagemErro {
      color: red;
      margin-bottom: 10px;
    }

    .produto {
      margin-top: 20px;
      text-align: left;
      background-color: #e3f2fd;
      padding: 15px;
      border-radius: 5px;
    }

    .produto + .produto {
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Cadastro de Produtos</h2>

    <form id="formProduto">
      <input type="text" id="nome" placeholder="Nome do produto" required />
      <input type="number" id="preco" placeholder="Preço (R$)" step="0.01" required />
      <select id="categoria" required>
        <option value="">Selecione a categoria</option>
        <option>Eletrônicos</option>
        <option>Livros</option>
        <option>Roupas</option>
        <option>Outros</option>
      </select>
      <textarea id="descricao" placeholder="Descrição do produto" rows="3"></textarea>
      <div id="mensagemErro"></div>
      <button type="submit">Cadastrar</button>
    </form>

    <div id="listaProdutos"></div>
  </div>

  <script>
    const form = document.getElementById("formProduto");
    const mensagemErro = document.getElementById("mensagemErro");
    const listaProdutos = document.getElementById("listaProdutos");

    form.addEventListener("submit", cadastrarProduto);

    function cadastrarProduto(event){

        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const preco = Number(document.getElementById("preco").value);
        const categoria = document.getElementById("categoria").value;
        const descricao = document.getElementById("descricao").value;

        let erro = "";

        if(nome.length < 3){

            erro = "O nome deve ter ao menos 3 caracteres.";

        } else if(preco <= 0){

            erro = "O preço deve ser maior que zero.";

        } else if(categoria === ""){

            erro = "Selecione uma categoria.";

        } 
        
        if(erro !== ""){

            mensagemErro.textContent = erro;
            return;
        }

        mensagemErro.textContent = "";

        const descricaoFinal = 
        descricao || "Sem descrição";

        const dataCadastro = 
        new Date().toLocaleString("pt-BR");

        const produto = document.createElement("div");
        produto.classList.add("produto");

        produto.innerHTML = ` 
        <h3>${nome}</h3>
        <p>Preço: R$ ${Number(preco).toFixed(2)}</p>
        <p>Categoria: ${categoria}</p>
        <p>Descricao: ${descricaoFinal}</p>
        <p>Cadastrado em: ${dataCadastro}</p>
        `;

        listaProdutos.appendChild(produto);

        form.reset();

    }

  </script>
</body>
</html>
