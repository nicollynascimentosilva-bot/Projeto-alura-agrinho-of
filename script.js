function ativarCard(cardSelecionado) {
    // Localiza se já existe algum card aberto na tela
    const cardAtivo = document.querySelector('.card.active');

    // Se houver um card aberto e não for o mesmo que foi clicado, fecha ele
    if (cardAtivo && cardAtivo !== cardSelecionado) {
        cardAtivo.classList.remove('active');
    }

    // Abre ou fecha o card que acabou de ser clicado
    cardSelecionado.classList.toggle('active');
}
