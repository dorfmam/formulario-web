const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "docs")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "docs", "index.html"));
});

app.post("/cadastro", (req, res) => {
    const { nome, email, idade, telefone } = req.body;

    if (!nome || !email || !idade || !telefone) {
        return res
            .status(400)
            .json({ message: "Todos os campos são obrigatórios" });
    }

    console.log("Novo cadastro enviado: ", req.body);

    res.redirect("/confirmed.html");
});

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});
