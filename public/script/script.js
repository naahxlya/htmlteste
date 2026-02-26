const form = document.getElementById("form");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const capital = parseFloat(document.getElementById("capital").value);
  const taxa = parseFloat(document.getElementById("taxa").value) / 100;
  const tempo = parseInt(document.getElementById("tempo").value);

  if (capital <= 0 || taxa < 0 || tempo <= 0) {
    resultado.innerHTML = "<p>Insira valores válidos.</p>";
    return;
  }

  const montante = capital * Math.pow(1 + taxa, tempo);
  const juros = montante - capital;

  const formatoMoeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  resultado.innerHTML = `
    <p><strong>Montante Final:</strong> ${formatoMoeda.format(montante)}</p>
    <p><strong>Juros Totais:</strong> ${formatoMoeda.format(juros)}</p>
  `;
});


function sair() {
  // Remove o usuário salvo
  localStorage.removeItem("usuario");

  // Redireciona para login
  window.location.href = "login.html";
};
