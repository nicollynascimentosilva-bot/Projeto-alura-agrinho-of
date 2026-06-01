function ativarCard(cardSelecionado) {
    // Busca se já existe algum card aberto
    const cardAtivo = document.querySelector('.card.active');

    // Se houver um card ativo e não for o mesmo que foi clicado, fecha ele
    if (cardAtivo && cardAtivo !== cardSelecionado) {
        cardAtivo.classList.remove('active');
    }

    // Alterna a classe active no card que recebeu o clique
    cardSelecionado.classList.toggle('active');
}
