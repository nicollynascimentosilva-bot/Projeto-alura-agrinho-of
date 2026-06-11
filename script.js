
// Função para rolagem suave
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Formulário de contato
const agroForm = document.getElementById('agroForm');
if (agroForm) {
    agroForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
        this.reset();
    });
}

// Lógica de Perguntas e Respostas do Quiz
const perguntasQuiz = [
    {
        pergunta: "Qual técnica evita o esgotamento dos nutrientes do solo?",
        opcoes: ["Monocultura contínua", "Rotação de culturas", "Uso excessivo de tratores"],
        correta: 1
    },
    {
        pergunta: "Qual é o principal benefício dos drones na agricultura sustentável?",
        opcoes: ["Substituir os trabalhadores", "Mapear pragas e economizar insumos", "Acelerar o crescimento com luz artificial"],
        correta: 1
    },
    {
        pergunta: "O que caracteriza a adubação verde?",
        opcoes: ["Pintar as folhas de verde", "Utilizar plantas leguminosas para enriquecer a terra", "Regar a plantação com corantes"],
        correta: 1
    }
];

let indiceAtual = 0;
let pontuacaofnal = 0;

function carregarPergunta() {
    const quizBox = document.getElementById('quizBox');
    if (!quizBox) return;
    
    if (indiceAtual < perguntasQuiz.length) {
        const dados = perguntasQuiz[indiceAtual];
        
        quizBox.innerHTML = `
            <div>
                <div class="quiz-header">
                    <span>Quiz Sustentabilidade</span>
                    <span>Questão ${indiceAtual + 1} de ${perguntasQuiz.length}</span>
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
            <button class="quiz-btn" onclick="proximaPergunta()">Confirmar</button>
        `;
    } else {
        exibirResultado();
    }
}

function proximaPergunta() {
    const opcoes = document.getElementsByName('respostaQuiz');
    let selecionado = -1;

    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            selecionado = parseInt(opcoes[i].value);
        }
    }

    if (selecionado === -1) {
        alert("Selecione uma alternativa antes de avançar!");
        return;
    }

    if (selecionado === perguntasQuiz[indiceAtual].correta) {
        pontuacaofnal++;
    }

    indiceAtual++;
    carregarPergunta();
}

function exibirResultado() {
    const quizBox = document.getElementById('quizBox');
    let icone = "fa-trophy";
    let mensagem = "Excelente! Você conhece muito sobre o campo.";

    if (pontuacaofnal < 2) {
        mensagem = "Bom trabalho! Continue estudando sobre práticas sustentáveis.";
        icone = "fa-thumbs-up";
    }

    quizBox.innerHTML = `
        <div class="result-screen">
            <i class="fa-solid ${icone}"></i>
            <div class="score-text">Você acertou ${pontuacaofnal} de ${perguntasQuiz.length}!</div>
            <p>${mensagem}</p>
            <button class="quiz-btn" style="margin-top:20px;" onclick="reiniciarQuiz()">Refazer Quiz</button>
        </div>
    `;
}

function reiniciarQuiz() {
    indiceAtual = 0;
    pontuacaofnal = 0;
    carregarPergunta();
}

document.addEventListener("DOMContentLoaded", carregarPergunta);
