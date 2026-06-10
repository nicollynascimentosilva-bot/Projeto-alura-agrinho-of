// 1. Função para rolagem suave ao clicar nos links do menu
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 2. Manipulação do formulário de contato
const agroForm = document.getElementById('agroForm');
if (agroForm) {
    agroForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        
        alert(`Obrigado pelo contato, ${nome}! Nossa equipe focado em agricultura sustentável responderá em breve no e-mail: ${email}.`);
        
        this.reset(); // Limpa as caixas de texto
    });
}

// 3. Interatividade da Galeria de Imagens (Destaque ao clicar)
const imagens = document.querySelectorAll('.gallery-img');

imagens.forEach(imagem => {
    imagem.addEventListener('click', function() {
        // Se a imagem já estiver ativa, remove o destaque ao clicar de novo
        if (this.classList.contains('img-active')) {
            this.classList.remove('img-active');
        } else {
            // Remove o destaque de todas antes de aplicar na nova clicada
            imagens.forEach(img => img.classList.remove('img-active'));
            this.classList.add('img-active');
        }
    });
});
