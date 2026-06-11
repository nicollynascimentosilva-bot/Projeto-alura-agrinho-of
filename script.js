// 1. Função para rolagem suave ao navegar pelo topo do menu
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 2. Manipulação básica do formulário de contato
const agroForm = document.getElementById('agroForm');
if (agroForm) {
    agroForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
        this.reset();
    });
}
