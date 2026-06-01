// Banco de dados dinâmico corporativo
const dadosEtapas = [
    {
        title: "Semeadura Controlada",
        text: "Utilizamos sementes certificadas não-transgênicas e monitoramento de solo via IoT. Garantimos a nutrição exata da planta desde o primeiro dia na terra, otimizando o uso de água em até 40% através de gotejamento inteligente."
    },
    {
        title: "Colheita de Precisão & Logística Verde",
        text: "O recolhimento ocorre no ápice nutricional do vegetal. Nossa frota integrada monitora a temperatura do baú em tempo real, reduzindo as perdas pós-colheita para menos de 1,5% até a entrega nos centros de distribuição."
    },
    {
        title: "Experiência no Prato & Rastreabilidade",
        text: "O ciclo se fecha com total transparência. Cada lote possui um QR Code impresso que permite ao consumidor final checar o histórico do produtor, laudos de pureza e a data exata em que o alimento saiu da terra."
    }
];

// Função para chavear as etapas do processo institucional
function mudarEtapa(index) {
    // Remove classe ativa de todos
    const itens = document.querySelectorAll('.timeline-item');
    itens.forEach(item => item.classList.remove('active'));
    
    // Adiciona classe ativa no selecionado
    itens[index].classList.add('active');
    
    // Altera o conteúdo do painel com efeito visual suave
    const painel = document.getElementById('panel-content');
    painel.style.opacity = 0;
    
    setTimeout(() => {
        document.getElementById('panel-title').innerText = dadosEtapas[index].title;
        document.getElementById('panel-text').innerText = dadosEtapas[index].text;
        painel.style.opacity = 1;
    }, 200);
}

// Efeito de Contador de Métricas Corporativas ao rolar a página
const counters = document.querySelectorAll('.counter');
const speed = 50; 

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + (counter.getAttribute('data-target') === '100' ? '%' : '');
            }
        };
        updateCount();
    });
};

// Dispara o contador automaticamente após o carregamento básico
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(startCounters, 600);
});

