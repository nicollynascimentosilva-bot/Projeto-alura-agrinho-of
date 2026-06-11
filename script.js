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
        
        // Mensagem de confirmação na tela
        alert(`Obrigado pelo contato, ${nome}! Nossa equipe focada em agricultura sustentável responderá em breve no e-mail: ${email}.`);
        
        this.reset(); // Limpa os campos do formulário após o envio
    });
}
