document
    .getElementsByClassName(".formulario")
    .addEventListener("submit", async function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const idade = document.getElementById("idade").value;
        const telefone = document.getElementById("telefone").value;

        const dados = { nome, email, idade, telefone };

        try {
            const resposta = await fetch("http://localhost:3000/cadastro", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados),
                mode: "cors",
            });

            const resultado = await resposta.json();
            alert(resultado.message);
        } catch (error) {
            console.error("Erro ao enviar os dados:", error);
            alert("Erro ao cadastrar o funcionário. Tente novamente.");
        }
    });
