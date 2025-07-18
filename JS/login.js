document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value.trim();

    // Dados válidos fixos
    const emailCorreto = "admin@ecovibe.com";
    const senhaCorreta = "123456";

    if (email === emailCorreto && senha === senhaCorreta) {
      // Salva login no localStorage
      localStorage.setItem("usuarioLogado", "true");
      localStorage.setItem("emailUsuario", email);

      // Redireciona
      window.location.href = "pagamento.html"; 
    } else {
      alert("Email ou senha incorretos!");
    }
  });
});
