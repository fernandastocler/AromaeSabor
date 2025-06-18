function login(event) {
  event.preventDefault();
  window.location.href = "menu.html";
}

function cadastrar(event) {
  event.preventDefault();
  alert("Cadastro realizado com sucesso!");
  window.location.href = "index.html";
}

let produtoSelecionado = "";

function comprar(produto) {
  produtoSelecionado = produto;
  alert(`Produto selecionado: ${produto}`);
}

function gerarSenha() {
  const hora = document.getElementById("horaRetirada").value;
  if (!produtoSelecionado || !hora) {
    alert("Por favor, selecione um produto e um horário!");
    return;
  }

  const senha = Math.floor(1000 + Math.random() * 9000); // Gera senha de 4 dígitos
  document.getElementById("senhaDisplay").innerHTML = `
    <div class="confirmacao">
      <h3>Compra confirmada!</h3>
      <p><strong>Produto:</strong> ${produtoSelecionado}</p>
      <p><strong>Horário de retirada:</strong> ${hora}</p>
      <p><strong>Sua senha:</strong> ${senha}</p>
    </div>
  `;
}


botao de retirada--
function gerarSenha() {
  const hora = document.getElementById('horaRetirada').value;
  const horaSelecionada = new Date(`1970-01-01T${hora}:00`);

  const horaMin = new Date('1970-01-01T07:00:00');
  const horaMax = new Date('1970-01-01T22:00:00');

  if (horaSelecionada < horaMin || horaSelecionada > horaMax) {
    alert("Por favor, escolha um horário entre 07:00 e 22:00.");
    return;
  }

  const senha = Math.floor(1000 + Math.random() * 9000);
  document.getElementById('senhaDisplay').innerHTML = `
    <div class="confirmacao">
      Sua senha de retirada: <strong>${senha}</strong><br>
      Horário selecionado: <strong>${hora}</strong>
    </div>
  `;
}
