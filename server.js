// Importação os módulos necessários
const express = require("express");
const cors = require("cors");
const path = require("path");

// Cria uma aplicação Express.js e define a porta como 3.000.
const app = express();
const PORT = 3000;

// Utiliza o Middleware para permitir requisições CORS
app.use(cors());

// Utiliza o Middleware para servir os arquivos "HTML5", "CSS3" e "JavaScript"
app.use(express.static(path.join(__dirname, "public")));

// Utiliza o Middleware para ler arquivos JSON
app.use(express.json());

// Permite receber os dados do formulário
app.use(express.urlencoded({ extended: true }));

// Define uma função para lidar com os dados recebidos da aplicação front-end
app.post("/submit", (req, res) => {
    const { nome, email, idade, telefone } = req.body;
    console.log("Dados recebidos: ", { nome, email, idade, telefone });

    res.json({ mensagem: "Dados recebidos com sucesso!" });
});

// Serve o HTML, obtendo o arquivo "index.html"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Executa a aplicação na porta 3000
app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});
