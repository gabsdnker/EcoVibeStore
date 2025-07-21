document.addEventListener("DOMContentLoaded", () => {
  const campoBusca = document.getElementById("buscaProduto");
  const produtos = document.querySelectorAll(".produto");

  campoBusca.addEventListener("input", () => {
    const termo = campoBusca.value.toLowerCase();

    produtos.forEach(produto => {
      const titulo = produto.querySelector(".card-title").textContent.toLowerCase();
      if (titulo.includes(termo)) {
        produto.style.display = "block";
      } else {
        produto.style.display = "none";
      }
    });
  });
});
