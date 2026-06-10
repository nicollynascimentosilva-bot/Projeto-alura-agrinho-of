// Função para rolagem suave ao clicar no botão do topo
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Manipulação do formulário de contato
document.getElementById('agroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    // Exibe uma mensagem de sucesso simples
    alert(`Obrigado pelo contato, ${nome}! Nossa equipe focada em agricultura sustentável responderá em breve no e-mail: ${email}.`);
    
    // Limpa o formulário
    this.reset();
});
