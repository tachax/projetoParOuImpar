let nickname1 = '';
let nickname2 = '';
let escolhaJogador1 = '';
let escolhaJogador2 = '';
let soma = 0;
let comparacao = "";
let diagnostico = '';
let pontosJogador1 = 0;
let pontosJogador2 = 0;
let rodada = 0;
let apostaJogador1 = 0;
let apostaJogador2 = 0;
let mensagemParabens = "";

function iniciarJogo() {
  //atribui o nickname digitado pelo usuário para a variável
  nickname1 = document.getElementById('jogador1');
  nickname1 = nickname1.value;
  nickname2 = document.getElementById('jogador2');
  nickname2 = nickname2.value;

  //verifica se os jogadores digitaram os nicknames
  if (nickname1 == '' || nickname2 == "") {
    alert("Os dois jogadores devem escolher um nickname")
    return
  }

  //desabilita o input do nickname para impossibilitar a mudança e o botao de iniciar jogo
  document.getElementById('jogador1').disabled = true;
  document.getElementById('jogador2').disabled = true;
  document.getElementById('inicio').disabled = true;
  
  //detalhes da estilização (css)
  document.getElementById("game").style.display = "flex";
  document.getElementById("parabens").style.display = "none";
  document.getElementById('inicio').style.backgroundColor = '#363636';
  document.getElementById('inicio').style.opacity = 0.5;
  document.getElementById('inicio').style.cursor = 'default';
}

function jogar() {
  //coloca as escolhas dos jogadores em uma variável
  escolhaJogador1 = document.getElementById('opcao1').value;
  escolhaJogador2 = document.getElementById('opcao2').value;

  //pega os valores apostados e transforma em número
  apostaJogador1 = document.getElementById("apostaJogador1").value;
  apostaJogador1 = parseInt(apostaJogador1);
  apostaJogador2 = document.getElementById("apostaJogador2").value;
  apostaJogador2 = parseInt(apostaJogador2);

  //faz a soma das apostas
  soma = apostaJogador1 + apostaJogador2;
  let pontosSomados = `A soma dos números jogados foi ${soma}`;

  //verificar se escolheram entre par ou impar e se as escolhas são diferentes
  if (escolhaJogador1 == "escolha" || escolhaJogador2 == "escolha") {
    alert("Os jogadores devem escolher entre as opções de 'PAR' ou 'ÍMPAR'");
    return
  } else if (escolhaJogador1 == escolhaJogador2) {
    alert("As escolhas devem ser diferentes");
    return
  }

  //atualiza as rodadas
  rodada += 1;
  document.getElementById('rodada').innerText = `Rodada ${rodada}`;

  //verificar se a soma é par
  if (soma % 2 == 0) {
    comparacao = 'par'
  } else {
    comparacao = 'impar'
  }

  //comparar as escolhas dos jogadores
  if (escolhaJogador1 == comparacao) {
    diagnostico = `O vencedor da rodada foi ${nickname1}`;
    pontosJogador1 += 1;
  } else if (escolhaJogador2 == comparacao) {
    diagnostico = `O vencedor da rodada foi ${nickname2}`;
    pontosJogador2 += 1;
  }

  //mostra a pontuação atual na tela e o resultado da rodada
  document.getElementById('pontosJogador1').innerText = `Pontos: ${pontosJogador1}`
  document.getElementById('pontosJogador2').innerText = `Pontos: ${pontosJogador2}`
  document.getElementById('somaJogadas').innerText = pontosSomados;
  document.getElementById('resultado').innerText = diagnostico;

  //limpa as escolhas e as apostas para inserir novas na próxima rodada
  document.getElementById('opcao1').value = "escolha";
  document.getElementById('opcao2').value = "escolha";
  document.getElementById("apostaJogador1").value = "";
  document.getElementById("apostaJogador2").value = "";

  //VERIFICAÇÃO DE VENCEDOR
  if (pontosJogador1 == 3) {
    mensagemParabens = `Rodada ${rodada}` + '<br>' + `VENCEDOR DA PARTIDA: ${nickname1}.` + '<br>' + 'Parabens!!!';
    document.getElementById("mensagemVencedor").innerHTML = mensagemParabens;
    document.getElementById("imagemVencedor").src = "https://acegif.com/wp-content/uploads/funny-celebrate-8.gif";
    zerarJogo();
  } else if (pontosJogador2 == 3) {
    mensagemParabens = `Rodada ${rodada}` + '<br>' + `VENCEDOR DA PARTIDA: ${nickname2}.` + '<br>' + 'Parabens!!!';
    document.getElementById("mensagemVencedor").innerHTML = mensagemParabens;
    document.getElementById("imagemVencedor").src = "https://acegif.com/wp-content/uploads/funny-celebrate-8.gif";
    zerarJogo();
  }
}

function zerarJogo() {
  //limpa todos os dados da partida anterior
  pontosJogador1 = 0;
  pontosJogador2 = 0;
  rodada = 0;
  document.getElementById("jogador1").value = "";
  document.getElementById("jogador2").value = "";
  document.getElementById('somaJogadas').innerText = '';
  document.getElementById('resultado').innerText = '';
  document.getElementById('pontosJogador1').innerText = `Pontos: 0`;
  document.getElementById('pontosJogador2').innerText = `Pontos: 0`;
  document.getElementById('rodada').innerText = "";

  //reativa o input do nickname para possibilitar a mudança e o botao de iniciar jogo
  document.getElementById('jogador1').disabled = false;
  document.getElementById('jogador2').disabled = false;
  document.getElementById('inicio').disabled = false;

  //detalhes da estilização (css)
  document.getElementById("parabens").style.display = "flex";
  document.getElementById("game").style.display = "none";
  document.getElementById('inicio').style.backgroundColor = '#d16940';
  document.getElementById('inicio').style.opacity = 1;
  document.getElementById('inicio').style.cursor = 'pointer';
}