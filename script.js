/* =========================================
   GreenSource - Login Super Simples
   (Basta clicar para entrar)
========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==============================
       1. NAVBAR AO SCROLL
    ============================== */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
           .navbar.classList.remove('scrolled');
        }
    });

    /* ==============================
       2. MENU MOBILE
    ============================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    /* ==============================
       3. MODAL DE LOGIN
    ============================== */
    const modalOverlay = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');

    function openModal() {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        loginForm.reset();
    }

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    window.openModal = openModal;
    window.closeModal = closeModal;

    /* ==============================
       4. LOGIN SUPERSIMPLES
       (Qualquer clique já entra!)
    ============================== */
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btnSubmit = loginForm.querySelector('.btn-submit');
        
        // Efeito visual de carregamento
        btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
        
        setTimeout(() => {
            // Sucesso total!
            btnSubmit.innerHTML = '<i class="fas fa-check"></i> Bem-vindo!';
            btnSubmit.style.background = '#27ae60';
            
            alert('✅ Login realizado com sucesso!');
            
            setTimeout(() => {
                closeModal();
                btnSubmit.innerHTML = '<span>Entrar</span> <i class="fas fa-arrow-right"></i>';
                btnSubmit.style.background = '';
            }, 1000);
        }, 500);
    });

    /* ==============================
       5. SCROLL SUAVE
    ============================== */
    function scrollTo(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    }

    window.scrollTo = scrollTo;

    /* ==============================
       6. ANIMAÇÃO DOS CARDS
    ============================== */
    const cards = document.querySelectorAll('.step-card, .product-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });

    /* ==============================
       7. ADICIONAR PRODUTO
    ============================== */
    document.querySelectorAll('.add-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('h4').innerText;
            
            this.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
            this.style.background = '#27ae60';
            
            alert(`✅ ${productName} adicionado!`);

            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-plus"></i> Adicionar';
                this.style.background = '';
            }, 1500);
        });
    });

    /* ==============================
       8. EFEITO PARALLAX
    ============================== */
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrolled = window.scrollY;
        if (hero && scrolled < 800) {
            hero.style.backgroundPositionY = scrolled * 0.4 + 'px';
        }
    });

    console.log('🚀 Site GreenSource cargado!');
});
