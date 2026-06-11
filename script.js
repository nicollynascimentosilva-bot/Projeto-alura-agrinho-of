// 1. Função para rolagem suave ao clicar nos menus
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 2. Manipulação do formulário de contato básico
const agroForm = document.getElementById('agroForm');
if (agroForm) {
    agroForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato.');
        this.reset();
    });
}

// 3. Banco de Dados das Perguntas do Quiz
const perguntasQuiz = [
    {
        pergunta: "Qual técnica evita o esgotamento dos nutrientes básicos do solo?",
        opcoes: ["Monocultura contínua", "Rotação de culturas", "Uso excessivo de maquinário"],
        correta: 1
    },
    {
        pergunta: "Qual é o principal benefício dos drones na agricultura sustentável?",
        opcoes: ["Substituir totalmente os agricultores", "Mapear pragas economizando insumos químicos", "Fornecer iluminação artificial noturna"],
        correta: 1
    },
    {
        pergunta: "O que caracteriza fundamentalmente a adubação verde?",
        opcoes: ["Utilizar plantas específicas para cobrir e enriquecer a terra", "Injetar corantes biodegradáveis na água", "Pintar mecanicamente as folhas velhas"],
        correta: 0
    }
];

let indiceAtual = 0;
let pontuacaofnal = 0;

// 4. Função para desenhar a pergunta atual na tela
function carregarPergunta() {
    const quizBox = document.getElementById('quizBox');
    if (!quizBox) return;
    
    if (indiceAtual < perguntasQuiz.length) {
        const dados = perguntasQuiz[indiceAtual];
        
        quizBox.innerHTML = `
            <div>
                <div class="quiz-header">
                    <span>Agricultura Sustentável</span>
                    <span>Pergunta ${indiceAtual + 1} de ${perguntasQuiz.length}</span>
                </div>
                <div class="quiz-question">${dados.pergunta}</div>
                <ul class="quiz-options">
                    ${dados.opcoes.map((opcao, i) => `
                        <li>
                            <label><input type="radio" name="respostaQuiz" value="${i}"> ${opcao}</label>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <button class="quiz-btn" onclick="proximaPergunta()">Confirmar Resposta</button>
        `;
    } else {
        exibirResultado();
    }
}

// 5. Avança para a próxima pergunta e valida o acerto
function proximaPergunta() {
    const opcoes = document.getElementsByName('respostaQuiz');
    let selecionado = -1;

    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            selecionado = parseInt(opcoes[i].value);
        }
    }

    if (selecionado === -1) {
        alert("Por favor, selecione uma alternativa antes de continuar!");
        return;
    }

    if (selecionado === perguntasQuiz[indiceAtual].correta) {
        pontuacaofnal++;
    }

    indiceAtual++;
    carregarPergunta();
}

// 6. Exibe a pontuação e avaliação final do usuário
function exibirResultado() {
    const quizBox = document.getElementById('quizBox');
    let icone = "fa-trophy";
    let mensagem = "";

    if (pontuacaofnal === perguntasQuiz.length) {
        mensagem = "Excelente! Você é um verdadeiro especialista em agricultura sustentável.";
    } else if (pontuacaofnal >= 1) {
        mensagem = "Bom trabalho! Você possui ótimos conhecimentos sobre a força do campo consciente.";
        icone = "fa-thumbs-up";
    } else {
        mensagem = "Valeu a tentativa! Que tal reler nossos pilares e tentar novamente?";
        icone = "fa-rotate-right";
    }

    quizBox.innerHTML = `
        <div class="result-screen">
            <i class="fa-solid ${icone}"></i>
            <div class="score-text">Você acertou ${pontuacaofnal} de ${perguntasQuiz.length} questões!</div>
            <p class="feedback-text">${mensagem}</p>
            <button class="quiz-btn" onclick="reiniciarQuiz()">Refazer Quiz</button>
        </div>
    `;
}

// 7. Reseta as variáveis para começar tudo de novo
function reiniciarQuiz() {
    indiceAtual = 0;
    pontuacaofnal = 0;
    carregarPergunta();
}

// Inicialização automática do Quiz após carregar a página
document.addEventListener("DOMContentLoaded", carregarPergunta);
