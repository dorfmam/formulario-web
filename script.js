// Bloco de código para definir que a página seja carregada após o formulário ser submetido,

const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    setTimeout(() => {
        location.reload();
    }, 2000);
});
