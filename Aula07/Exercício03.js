/* Estilo de um Elemento
Objetivo: Modificar o estilo de um parágrafo e também de todos os itens de uma lista usando JavaScript. Tarefa: Na função estilizarParagrafo():
Selecione o parágrafo pelo id destaque.
Altere a cor do texto para "blue".
Aumente o tamanho da fonte para "24px".

- Selecione todos os itens da lista (`li`). 
- Aplique uma cor de fundo diferente (ex: `"lightblue"`). 
- Altere a cor do texto para `"darkblue"`. 
- Deixe o texto em **negrito**. ---  */

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Exercício 3</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 80px;
            background-color: #f0f4f8;
        }

        #destaque {
            font-size: 18px;
            padding: 15px 20px;
            background-color: #ffffff;
            border: 2px dashed #ccc;
            border-radius: 8px;
            display: inline-block;
            transition: all 0.3s ease;
        }

        ul {
            list-style: none;
            padding: 0;
            margin-top: 30px;
        }

        li {
            background-color: #fff;
            border: 1px solid #ddd;
            padding: 10px;
            margin: 5px auto;
            width: 200px;
            border-radius: 6px;
            transition: all 0.3s ease;
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1rem;
            background-color: #1976d2;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #1565c0;
        }
    </style>
</head>
<body>
    <p id="destaque">Texto em destaque.</p>

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <button onclick="estilizarParagrafo()">Estilizar</button>

    <script>
        function estilizarParagrafo() {
            let paragrafo = document.getElementById("destaque");

            paragrafo.style.color = "blue";
            paragrafo.style.fontSize = "24px";

            let itens = document.querySelectorAll("li");

            for (let item of itens) {
                item.style.backgroundColor = "lightblue";
                item.style.color = "darkblue";
                item.style.fontWeight = "bold";
            }

        }
    </script>
</body>
</html>
