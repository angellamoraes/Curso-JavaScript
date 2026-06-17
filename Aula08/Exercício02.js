/* Filtro de Produtos
Objetivo: Criar uma função que filtre uma lista de produtos à medida que o usuário digita no campo de busca, utilizando o evento de teclado keyup.
Tarefa: Implemente uma função que será executada sempre que o usuário digitar no campo de busca. Ela deve:
1. Obter o valor digitado e compará-lo com os nomes dos produtos da lista (<li>), sem diferenciar maiúsculas de minúsculas.
2. Para cada produto:
Exibir e destacar (highlight) se o nome contém o termo digitado.
Esconder (hidden) e remover o destaque caso contrário.
3. Exibir a quantidade de resultados encontrados.
4. Se nenhum item for encontrado, mostrar a mensagem de erro.
5. Se o campo de busca estiver vazio, mostrar todos os produtos, remover os destaques e esconder a mensagem e o contador.
6. A busca não deve diferenciar maiúsculas de minúsculas.
Dicas:
Use toLowerCase() para fazer comparações sem considerar letras maiúsculas/minúsculas.
Use includes para determinar se um conjunto de caracteres pode ser encontrado dentro de outra string.  */

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <title>Exercício: Filtro de Produtos Avançado</title>
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
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      input {
        width: 100%;
        padding: 12px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }

      ul {
        list-style: none;
        padding: 0;
        margin-top: 20px;
        text-align: left;
      }

      li {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        transition: all 0.3s ease;
      }

      li.hidden {
        display: none;
      }

      li.highlight {
        background-color: #d2f8da;
        border-left: 5px solid #4caf50;
      }

      #contador {
        margin-top: 10px;
        font-weight: bold;
        color: #333;
      }

      #mensagem-erro {
        display: none;
        margin-top: 20px;
        color: red;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Buscar Produtos</h2>
      <input type="text" id="campoBusca" placeholder="Digite para buscar..." />

      <p id="contador"></p>
      <p id="mensagem-erro">Nenhum produto encontrado.</p>

      <ul id="listaProdutos">
        <li>Notebook</li>
        <li>Smartphone</li>
        <li>Fone de Ouvido</li>
        <li>Carregador</li>
        <li>Mouse</li>
        <li>Teclado</li>
        <li>Monitor</li>
      </ul>
    </div>

    <script>
      const campoBusca = document.getElementById("campoBusca");
      const produtos = document.querySelectorAll("#listaProdutos li");
      const contador = document.getElementById("contador");
      const mensagemErro = document.getElementById("mensagem-erro");

      function filtrarProdutos() {

        let busca = campoBusca.value.toLowerCase();
        
        if (busca === "") {

            produtos.forEach(function(produto) {

                produto.classList.remove("hidden");
                produto.classList.remove("highlight");
            });

            contador.textContent = "";
            mensagemErro.style.display = "none";

            return;
        }
        
        let encontrados = 0;

            produtos.forEach(function(produto) {

                let nomeProduto = produto.textContent.toLowerCase();

                if(nomeProduto.includes(busca)) {

                    produto.classList.remove("hidden");
                    produto.classList.add("highlight");

                    encontrados++;

                } else {

                    produto.classList.add("hidden");
                    produto.classList.remove("highlight");
                }
            });

            contador.textContent = `Resultados encontrados: ${encontrados}`;

            if(encontrados === 0) {
                mensagemErro.style.display = "block";
            } else {
                mensagemErro.style.display = "none";
            }
      }

      campoBusca.addEventListener("keyup", filtrarProdutos);

    </script>
  </body>
</html>
