/* Conteúdo de um Parágrafo
Objetivo: Alterar o conteúdo de um parágrafo. Tarefa: Na tag <script>, crie a função alterarTexto() que:
Selecione o parágrafo com o id mensagem.
Altere o conteúdo para: "Texto alterado com sucesso!".  */

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Exercício 1</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 80px;
            background-color: #f5f5f5;
        }

        p {
            font-size: 1.2rem;
            color: #333;
            background-color: #e1f5fe;
            display: inline-block;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1rem;
            background-color: #0288d1;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0277bd;
        }
    </style>
</head>
<body>
    <p id="mensagem">Texto original.</p>
    <br>
    <button onclick="alterarTexto()">Clique aqui</button>

    <script>
      function alterarTexto() {
        let paragrafo = document.getElementById("mensagem");
        paragrafo.textContent = "Texto alterado com sucesso!";
      }
    </script>
</body>
</html>
