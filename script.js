// --- ANO AUTOMÁTICO NO RODAPÉ ---
document.getElementById('year').textContent = new Date().getFullYear();


// --- SMOOTH SCROLL (ROLAGEM SUAVE) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// --- ENVIO DO FORMULÁRIO ---
const form = document.getElementById('form-contact');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        alert("Obrigado! Em breve a AgroFort entrará em contato.");
        form.reset();
    });
}


// --- SCROLL REVEAL (ANIMAÇÃO AO ROLAR) ---
window.addEventListener('scroll', revealCards);

function revealCards() {
    var cards = document.querySelectorAll('.card');
    var windowHeight = window.innerHeight;
    var cardVisible = 150;
    
    for (var i = 0; i < cards.length; i++) {
        var cardTop = cards[i].getBoundingClientRect().top;
        
        if (cardTop < windowHeight - cardVisible) {
            cards[i].style.opacity = "1";
            cards[i].style.transform = "translateY(0)";
        }
    }
}

// Inicializa cards com opacity 0
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-in-out";
});

// Executa ao carregar a página
revealCards();
