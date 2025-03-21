// Importação os módulos necessários
const express = require("express");
const cors = require("cors");
const path = require("path");

// Cria uma aplicação Express.js e define a porta como 3000.
const app = express();
const PORT = 3000;

// Utiliza o Middleware para permitir requisições do tipo CORS
app.use(cors());

// Utiliza o Middleware para ler arquivos JSON.
app.use(express.json());

// Analisa através de um Middleware dados codificados em uma URL.
app.use(express.urlencoded({ extended: true }));

// Utiliza o Middleware para servir os arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Serve o HTML, obtendo o arquivo "index.html"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Define a rota POST para receber os cadastros
app.post("/cadastro", (req, res) => {
    const { nome, email, idade, telefone } = req.body;

    // Verifica se todos os campos foram preenchidos pelo cliente
    if (!nome || !email || !idade || !telefone) {
        return res
            .status(400)
            .json({ message: "Todos os campos são obrigatórios" });
    }

    console.log("Novo cadastro enviado: ", req.body);

    res.status(200).json({ message: "Cadastro realizado com sucesso!" });
});

// Executa a aplicação na porta 3000
app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});
