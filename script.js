// script.js

document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    const botoes = document.querySelectorAll('.btn-proximo');

    let opacity = 0.1; // Opacidade inicial
    let passoAtual = 'passo-0'; // Passo inicial

    function mostrarPasso(passoId) {
        passos.forEach(passo => passo.classList.remove('ativo'));
        document.getElementById(passoId).classList.add('ativo');
        passoAtual = passoId; // Atualiza o passo atual
    }

    function mudarOpacidade() {
        opacity = Math.min(opacity + 0.05, 0.2); // Aumenta a opacidade, limitando-a a 0.2
        document.body.style.backgroundColor = `rgba(44, 44, 44, ${opacity})`;
    }

    function voltarParaPasso(passoId) {
        passos.forEach(passo => passo.classList.remove('ativo'));
        document.getElementById(passoId).classList.add('ativo');
    }

    botoes.forEach(botao => {
        botao.addEventListener('click', (event) => {
            const proximoPasso = event.target.getAttribute('data-proximo');

            if (proximoPasso === '0') {
                mostrarPasso('passo-0');
                document.querySelector('.tela-vitoria').style.display = 'none';
                document.querySelector('.tela-derrota').style.display = 'none';
            } else if (proximoPasso === '1') {
                mostrarPasso('passo-1');
            } else if (proximoPasso === '2') {
                mostrarPasso('passo-2');
            } else if (proximoPasso === 't') {
                mostrarPasso('passo-t');
            } else if (proximoPasso === 'o') {
                mostrarPasso('passo-o');
            } else if (proximoPasso === 'p') {
                mostrarPasso('passo-p');
                document.querySelector('.tela-vitoria').style.display = 'block';
            } else if (proximoPasso === 'l') {
                mostrarPasso('passo-l');
                document.querySelector('.tela-derrota').style.display = 'block';
            } else if (proximoPasso === '9') {
                mostrarPasso('passo-9');
            }

            mudarOpacidade(); // Mudar a opacidade a cada decisão
        });
    });

    // Adiciona funcionalidade de voltar para os botões de voltar
    document.querySelectorAll('.passo button').forEach(botao => {
        botao.addEventListener('click', (event) => {
            if (event.target.textContent.includes('Voltar') || event.target.textContent.includes('Reiniciar')) {
                mostrarPasso('passo-0'); // Volta para o passo inicial
                document.querySelector('.tela-vitoria').style.display = 'none';
                document.querySelector('.tela-derrota').style.display = 'none';
                opacity = 0.1; // Reinicia a opacidade
                document.body.style.backgroundColor = `rgba(44, 44, 44, ${opacity})`;
            }
        });
    });
});
