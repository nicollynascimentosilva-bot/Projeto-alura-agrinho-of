/**
 * PROJETO AGRO FORTE & AGRICULTURA SUSTENTÁVEL
 * Sistema Dinâmico do Quiz e Navegação Global
 */

// 1. Navegação com Rolagem Suave entre as Seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Inicialização de todas as funcionalidades quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    
    // 2. Gerenciamento do Formulário de Contato
    const agroForm = document.getElementById('agroForm');
    if (agroForm) {
        agroForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede que o GitHub Pages recarregue a página
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (nome && email) {
                alert(`Obrigado pelo contato, ${nome}! Nossa equipe focada em agricultura sustentável responderá em breve no e-mail: ${email}.`);
                agroForm.reset(); // Limpa as caixas de texto de forma limpa
            }
        });
    }

    // 3. Banco de Dados e Lógica Estruturada do Quiz Interativo
    const perguntasQuiz = [
        {
            pergunta: "Qual técnica evita o esgotamento físico e químico dos nutrientes do solo?",
            opcoes: [
                "Monocultura contínua da mesma espécie", 
                "Rotação estratégica de culturas", 
                "Compactação com maquinário pesado"
            ],
            correta: 1,
            explicacao: "A rotação de culturas alterna espécies diferentes na mesma área, ajudando a quebrar ciclos de pragas e melhorando a fertilidade natural do solo."
        },
        {
            pergunta: "Qual é o principal impacto positivo do uso de drones na agricultura de precisão?",
            opcoes: [
                "Substituir completamente a mão de obra humana", 
                "Mapear pragas e aplicar insumos com precisão cirúrgica", 
                "Acelerar artificialmente a fotossíntese foliar"
            ],
            correta: 1,
            explicacao: "Drones ajudam a identificar locais exatos com problemas, reduzindo o desperdício de água, sementes e defensivos."
        },
        {
            pergunta: "O que define o método sustentável de adubação verde?",
            opcoes: [
                "Cultivo de plantas que depois são incorporadas ao solo para enriquecê-lo", 
                "Aplicação de corantes químicos biodegradáveis na água de irrigação", 
                "Pintura mecânica das folhas para aumentar a absorção de luz"
            ],
            correta: 0,
            explicacao: "A adubação verde utiliza plantas (como as leguminosas) para fixar nitrogênio natural no solo, dispensando fertilizantes sintéticos poluentes."
        }
    ];

    let indiceAtual = 0;
    let pontuacaoFinal = 0;
    const quizBox = document.getElementById('quizBox');

    // Função interna para renderizar a pergunta atual com animação e acessibilidade
    function renderizarPergunta() {
        if (!quizBox) return;

        if (indiceAtual < perguntasQuiz.length) {
            const dados = perguntasQuiz[indiceAtual];
            
            quizBox.innerHTML = `
                <div>
                    <div class="quiz-header">
                        <span>Quiz Agro Forte</span>
                        <span>Questão ${indiceAtual + 1} de ${perguntasQuiz.length}</span>
                    </div>
                    <div class="quiz-question">${dados.pergunta}</div>
                    <ul class="quiz-options">
                        ${dados.opcoes.map((opcao, i) => `
                            <li>
                                <label>
                                    <input type="radio" name="respostaQuiz" value="${i}">
                                    <span>${opcao}</span>
                                </label>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <button type="button" class="quiz-btn" id="btnConfirmar">Confirmar Resposta</button>
            `;

            // Vincula o evento ao botão dinamicamente para evitar falhas de escopo
            document.getElementById('btnConfirmar').addEventListener('click', processarResposta);
        } else {
            exibirPainelResultado();
        }
    }

    // Processa a alternativa escolhida e atualiza a pontuação
    function processarResposta() {
        const opcoes = document.getElementsByName('respostaQuiz');
        let selecionado = -1;

        for (let i = 0; i < opcoes.length; i++) {
            if (opcoes[i].checked) {
                selecionado = parseInt(opcoes[i].value, 10);
                break;
            }
        }

        if (selecionado === -1) {
            alert("Por favor, selecione uma alternativa antes de avançar!");
            return;
        }

        // Valida se a resposta bate com o índice correto
        if (selecionado === perguntasQuiz[indiceAtual].correta) {
            pontuacaoFinal++;
        }

        // Avança o índice e recarrega o painel
        indiceAtual++;
        renderizarPergunta();
    }

    // Monta a tela final com medalhas, pontuação e feedback contextualizado
    function exibirPainelResultado() {
        let icone = "fa-trophy";
        let mensagem = "Excelente! Você possui um conhecimento avançado e profissional sobre a força do campo consciente.";

        // Feedback baseado na nota do usuário
        if (pontuacaoFinal < perguntasQuiz.length && pontuacaoFinal >= 2) {
            mensagem = "Muito bom! Você entende os conceitos fundamentais da sustentabilidade agrícola.";
            icone = "fa-thumbs-up";
        } else if (pontuacaoFinal < 2) {
            mensagem = "Bom começo! Que tal ler nossos pilares de sustentabilidade acima e tentar novamente?";
            icone = "fa-rotate-right";
        }

        quizBox.innerHTML = `
            <div class="result-screen">
                <i class="fa-solid ${icone}"></i>
                <div class="score-text">Você acertou ${pontuacaoFinal} de ${perguntasQuiz.length} questões!</div>
                <p style="color: #555; margin-bottom: 25px; line-height: 1.6;">${mensagem}</p>
                <button type="button" class="quiz-btn" id="btnReiniciar">Refazer Desafio</button>
            </div>
        `;

        document.getElementById('btnReiniciar').addEventListener('click', reiniciarSistemaQuiz);
    }

    // Reseta o estado do jogo para permitir novas tentativas
    function reiniciarSistemaQuiz() {
        indiceAtual = 0;
        pontuacaoFinal = 0;
        renderizarPergunta();
    }

    // Executa a primeira carga do jogo assim que o site abre
    renderizarPergunta();
});
