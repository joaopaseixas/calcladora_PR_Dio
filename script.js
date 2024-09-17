
let partidas = [];

function adicionarPontuacao() {

    const pontosGanhos = parseFloat(document.getElementById('pontosGanhos').value) || 0;
    const pontosPerdidos = parseFloat(document.getElementById('pontosPerdidos').value) || 0;


    partidas.push({ pontosGanhos, pontosPerdidos });


    document.getElementById('pontosGanhos').value = '';
    document.getElementById('pontosPerdidos').value = '';
}

function calcularPontuacao() {
    let pontuacaoTotal = 0;


    for (let i = 0; i < partidas.length; i++) {
        const partida = partidas[i];
        const pontuacaoPartida = partida.pontosGanhos - partida.pontosPerdidos;
        pontuacaoTotal += pontuacaoPartida;
    }


    let bonus = 0;
    if (pontuacaoTotal > 100) {
        bonus = 50;
    }


    const pontuacaoFinal = pontuacaoTotal + bonus;


    document.getElementById('resultado').innerText = `Pontuação Total: ${pontuacaoTotal}\nBônus: ${bonus}\nPontuação Final: ${pontuacaoFinal}`;


    partidas = [];
}
