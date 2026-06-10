// 1. Função para rolagem suave ao clicar nas opções do menu
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 2. Manipulação e validação do envio do formulário de contato
const agroForm = document.getElementById('agroForm');
if (agroForm) {
    agroForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão da página
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        
        // Mensagem interativa de confirmação
        alert(`Obrigado pelo contato, ${nome}! Nossa equipe focada em agricultura sustentável responderá em breve no e-mail: ${email}.`);
        
        this.reset(); // Limpa os campos do formulário
    });
}

// 3. Interatividade da Galeria de Imagens (Efeito de seleção ao clicar)
const imagens = document.querySelectorAll('.gallery-img');

imagens.forEach(imagem => {
    imagem.addEventListener('click', function() {
        // Se a imagem já estiver ativa, remove o destaque. Caso contrário, destaca ela e desativa as outras.
        if (this.classList.contains('img-active')) {
            this.classList.remove('img-active');
        } else {
            imagens.forEach(img => img.classList.remove('img-active'));
            this.classList.add('img-active');
        }
    });
});
