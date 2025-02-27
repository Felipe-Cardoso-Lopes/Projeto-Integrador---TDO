/*--------------Tela--Inicial-----------*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.entrar').addEventListener
       (
           'click', function()
           {
               window.location.href = 'login.html';
           }
       )
   });

/*--------------Cadastro-------------*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.calcelCad').addEventListener
       (
           'click', function()
           {
               window.location.href = 'index.html';
           }
       )
   });

/*--------------Login-------------*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.entrarLogin').addEventListener
       (
           'click', function()
           {
               window.location.href = 'telaPrincipal.html';
           }
       )
   });

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.calcelLogin').addEventListener
       (
           'click', function()
           {
               window.location.href = 'index.html';
           }
       )
   });

/*---------Tela--Principal--------*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btMeuCrono').addEventListener
       (
           'click', function()
           {
               window.location.href = 'meuCronograma.html';
           }
       )
   });

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btCronoIntelig').addEventListener
       (
           'click', function()
           {
               window.location.href = 'cronoInteligente.html';
           }
       )
   });

/*---------Meu--Cronograma--------*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btVisuCrono').addEventListener
       (
           'click', function()
           {
               window.location.href = 'visuCronograma.html';
           }
       )
   });

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btFeedback').addEventListener
       (
           'click', function()
           {
               window.location.href = 'feedback.html';
           }
       )
   });

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btVoltarInicio').addEventListener
       (
           'click', function()
           {
               window.location.href = 'telaPrincipal.html';
           }
       )
   });

/*------------FeedBack------------*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btVoltarMeuCrono').addEventListener
       (
           'click', function()
           {
               window.location.href = 'meuCronograma.html';
           }
       )
   });


function enviarFeedback() {
    document.querySelector('.notificacaoFeedBack').value = "";
    document.querySelector('.notificacaoFeedBack').style.display = "block";
    document.querySelector(".conteudo").classList.add("dimmed");
}

function fecharNotificacao() {
    document.querySelector('.notificacaoFeedBack').style.display = "none";
    document.querySelector(".conteudo").classList.remove("dimmed");
}


/*--------------Menu-Lateral------------*/

function abrirMenu() {
    document.querySelector('.infoMenu').style.left = "0px";
}

function fecharMenu() {
    document.querySelector('.infoMenu').style.left = "-250px";
}
   
/*-----------Configuração------------*/
let configuracaoAberta = false;

function toggleConfiguracao() {
    const menuConfiguracao = document.querySelector('.subMenuConfiguracao');
    const opcoesMenu = document.querySelectorAll('.opcaoMenu:not(:nth-child(2))'); // Exclui  Configuração da seleção
    const sairMenu = document.querySelector('.sairMenu'); // Seleciona o botão Sair

    configuracaoAberta = !configuracaoAberta;

    if (configuracaoAberta) {
        menuConfiguracao.style.display = 'block'; // Exibe o submenu de Configuração
        opcoesMenu.forEach(opcao => {
            opcao.style.display = 'none'; // Esconde as opções do menu principal
        });
        sairMenu.style.display = 'none'; // Esconde o botão Sair
    } else {
        menuConfiguracao.style.display = 'none'; // Esconde o submenu de Configuração
        opcoesMenu.forEach(opcao => {
            opcao.style.display = 'flex'; // Mostra as opções do menu principal
        });
        sairMenu.style.display = 'flex'; // Mostra o botão Sair
    }
}

/*-----------Meus-Dados-----------*/
let dadosAberta = false;

function toggleDados() {
    const menuDados = document.querySelector('.subMenuDados');
    const opcoesMenu = document.querySelectorAll('.opcaoMenu:not(:nth-child(4))'); 
    const sairMenu = document.querySelector('.sairMenu'); 


    dadosAberta = !dadosAberta;

    if (dadosAberta) {
        menuDados.style.display = 'block';
    
        opcoesMenu.forEach(opcao => {
            opcao.style.display = 'none'; 
        
        });
        sairMenu.style.display = 'none'; 

    } else {
        menuDados.style.display = 'none'; 

        opcoesMenu.forEach(opcao => {
            opcao.style.display = 'flex'; 

        });
        sairMenu.style.display = 'flex'; 
    }
}

/*-----------Historico------------*/
let historicoAberta = false;

function toggleHistorico() {
    const menuHistorico = document.querySelector('.subMenuHistorico');
    const opcoesMenu = document.querySelectorAll('.opcaoMenu:not(:nth-child(6))'); 

    const sairMenu = document.querySelector('.sairMenu'); 
    historicoAberta = !historicoAberta;

    if (historicoAberta) {
        menuHistorico.style.display = 'block'; 

        opcoesMenu.forEach(opcao => {
            opcao.style.display = 'none'; 

        });
        sairMenu.style.display = 'none'; 

    } else {
        menuHistorico.style.display = 'none'; 

        opcoesMenu.forEach(opcao => {
            opcao.style.display = 'flex'; 

        });
        sairMenu.style.display = 'flex'; 
    }
}

/*--------------Layout----------------*/
let layoutAberto = false;

// Alternar entre mostrar/esconder o submenu Layout
function toggleLayout() {
    const subMenuLayout = document.querySelector('.subMenuLayout');

    layoutAberto = !layoutAberto;
    subMenuLayout.style.display = layoutAberto ? 'block' : 'none';
}

// Alterar entre tema claro e escuro
function alterarTema() {
    const elementos = [
        document.body,
    ];

    const imgMenuLateral1 = document.querySelector('.menuLateral img'); 
    const imgMenuLateral2 = document.querySelector('.telaMenu .imgMenuLateral img');

    if (document.body.classList.contains('tema-claro')) {

        elementos.forEach(elemento => {
            elemento.classList.remove('tema-claro');
            elemento.classList.add('tema-escuro');
        });

        if (imgMenuLateral1) {
            imgMenuLateral1.src = 'img/menu-tela escura.png'; 
        }
        
        if (imgMenuLateral2) {
            imgMenuLateral2.src = 'img/menu-tela escura.png';
        }

        localStorage.setItem('tema', 'escuro');

    } else {

        elementos.forEach(elemento => {
            elemento.classList.remove('tema-escuro');
            elemento.classList.add('tema-claro');
        });

        if (imgMenuLateral1) {
            imgMenuLateral1.src = 'img/menu lateral.png'; 
        }

        if (imgMenuLateral2) {
            imgMenuLateral2.src = 'img/menu lateral.png';
        }

        localStorage.setItem('tema', 'claro'); 
    }
}


// Ajustar o tamanho da fonte
function alterarFonte() {
    const fonteAtual = getComputedStyle(document.body).fontSize;

    const novoTamanho = prompt("Digite o tamanho da fonte (ex.: 14px, 16px, 1rem):", fonteAtual);

    if (novoTamanho) {
        document.body.style.fontSize = novoTamanho;

        const elementosDeTexto = [
            ...document.querySelectorAll('button'),
            ...document.querySelectorAll('h1'),
            ...document.querySelectorAll('h2'),
            ...document.querySelectorAll('p'),
        ];

        elementosDeTexto.forEach(elemento => {
            elemento.style.fontSize = novoTamanho;
        });

        localStorage.setItem('fonte', tamanho);
    }
}
/*
// Verificar se o tema está salvo
window.onload = function() {
    const tema = localStorage.getItem('tema');
    if (tema) {
        if (tema === 'escuro') {
            alterarTema(); // Chama a função para aplicar o tema escuro
        } else {
            document.body.classList.add('tema-claro');
            
        }
    }

    // Verificar se o tamanho da fonte está salvo
    const fonte = localStorage.getItem('fonte');
    if (fonte) {
        alterarFonte(fonte); // Chama a função para aplicar o tamanho da fonte
    }
}
*/
/*--------------Conta----------------*/

let contaAberto = false;

// Alternar entre mostrar/esconder o submenu Layout
function toggleConta() {
    const subMenuLayout = document.querySelector('.subMenuConta');

    contaAberto = !contaAberto;
    subMenuLayout.style.display = contaAberto ? 'block' : 'none';
}

/*--------------Alterar-Dados---------------*/

// Exibir o formulário de Alterar Dados
function exibirFormularioAlterarDados() {
    const formulario = document.querySelector('.formAlterarDados');
    const conteudoPrincipal = document.querySelector('.btOpcoes');

    conteudoPrincipal.style.display = 'none';
    formulario.style.display = 'flex';
}

// Fechar o formulário e voltar ao conteúdo principal
function fecharFormulario() {
    const formulario = document.querySelector('.formAlterarDados');
    const conteudoPrincipal = document.querySelector('.btOpcoes');

    formulario.style.display = 'none';
    conteudoPrincipal.style.display = 'flex';

}

/*--------------Excluir-Historico---------------*/

let excluirAberto = false;

// Alternar entre mostrar/esconder o submenu Layout
function toggleExclHist() {
    const subMenuLayout = document.querySelector('.subMenuExclHist');

    excluirAberto = !excluirAberto;
    subMenuLayout.style.display = excluirAberto ? 'block' : 'none';
}

/*--------------Visualizar-Historico---------------*/

function toggleVisuHist() {
    const historico = document.querySelector('.visualizarHist');
    const conteudoPrincipal = document.querySelector('.btOpcoes');

    conteudoPrincipal.style.display = 'none';
    historico.style.display = 'flex';
}

function fecharHistorico() {
    const historico = document.querySelector('.visualizarHist');
    const conteudoPrincipal = document.querySelector('.btOpcoes');

    historico.style.display = 'none';
    conteudoPrincipal.style.display = 'flex';
}

/*--------------Excluir-Cronograma---------------*/

function excluirCrono() {
    document.querySelector('.confirmExclCrono').value = "";
    document.querySelector('.confirmExclCrono').style.display = "block";
    document.querySelector(".conteudo").classList.add("dimmed");
}

function fecharConfirmExcl() {
    document.querySelector('.confirmExclCrono').style.display = "none";
    document.querySelector(".conteudo").classList.remove("dimmed");
}

/*---------------Cronograma---------------*/
const dias = document.querySelectorAll('.dia');
const cronogramaOverlay = document.querySelector('.visualizarMeuCrono');
const tituloCronograma = document.getElementById('tituloCronograma');
const conteudoCronograma = document.getElementById('conteudoCronograma');

const conteudos = {
    domingo:`<br><strong>Manhã:</strong><br>
            7:00 - 8:00: Despertar e café da manhã.<br>
            8:00 - 9:30: Atividade física (pode ser uma corrida, yoga, caminhada, etc.).<br>
            9:30 - 10:30: Tempo de leitura ou meditação.<br>
            <br><strong>Meio-dia:</strong><br>
            11:00 - 12:30: Preparar e aproveitar o almoço.<br>
            <br><strong>Tarde:</strong><br>
            13:30 - 15:00: Lazer ou atividade recreativa (pode ser assistir a um filme, jogar um jogo de tabuleiro, ou praticar um hobby).<br>
            15:00 - 16:30: Passeio ao ar livre (parque, praia, trilha, etc.).<br>
            <br><strong>Final da Tarde:</strong><br>
            17:00 - 18:30: Tempo de lazer adicional (ler, assistir a um programa de TV, ouvir música).<br>
            <br><strong>Noite:</strong><br>
            19:00 - 20:00: Jantar.<br>
            20:00 - 21:30: Tempo para relaxar e se preparar para a semana `,
    segunda: ``,
    terca: ``,
    quarta: ``,
    quinta: ``,
    sexta: ``,
    sabado: ``
};

// Adiciona evento de clique para todos os botões dos dias
dias.forEach(dia => {
    dia.addEventListener('click', function() {
        let diaSelecionado = dia.dataset.dia;
        tituloCronograma.innerHTML = `Meu Cronograma - ${diaSelecionado.charAt(0).toUpperCase() + diaSelecionado.slice(1)}`;
        conteudoCronograma.innerHTML = conteudos[diaSelecionado] || "Sem cronograma para este dia.";

        cronogramaOverlay.style.display = 'flex';
    });
});

// Fecha ao clicar no fundo escuro
cronogramaOverlay.addEventListener('click', function(event) {
    if (event.target === cronogramaOverlay) {
        cronogramaOverlay.style.display = 'none';
    }
});
