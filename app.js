// let titulo = document.querySelector('h1');
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = "Escola um número de 1 a 10";

let limite = 3;
let tentativas = 1;
let listaNumerosAleatorios = [];
let numeroSecreto = gerarNumeroAleatorio();


function gerarNumeroAleatorio() {
    let numero = parseInt(Math.random() * limite + 1);

    if (listaNumerosAleatorios.includes(numero)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosAleatorios.push(numero);
        console.log(listaNumerosAleatorios);
        return numero;
    }
}

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

exibirTextoTela('h1', 'Jogo do número secreto');
exibirTextoTela('p', 'Escolha um número de 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    let quantidadeListaNumeros = listaNumerosAleatorios.length;

    if (quantidadeListaNumeros == limite) {
        listaNumerosAleatorios = [];
    }

    if (chute == numeroSecreto) {
        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        limpar_Campo();
        if (chute > numeroSecreto) {
            exibirTextoTela('h1', 'Errou!');
            exibirTextoTela('p', 'O numero secreto é menor que o chute.');
        } else {
            exibirTextoTela('h1', 'Errou!');
            exibirTextoTela('p', 'O numero secreto é maior que o chute.');
        }
        
        tentativas++;
    }
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limpar_Campo();
    tentativas = 1;
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Escolha um número de 1 a 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limpar_Campo() {
    document.querySelector('input').value='';
}
