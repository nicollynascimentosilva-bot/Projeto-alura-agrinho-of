/* =========================================
   GreenSource - JavaScript Interativo
========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==============================
       1. EFEITO NA NAVBAR AO SCROLL
    ============================== */
    const navbar = document.getElementById('navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ==============================
       2. MENU MOBILE TOGGLE
    ============================== */
    function toggleMenu() {
        navLinks.classList.toggle('active');
        
        // Alternar ícone do menu
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    /* ==============================
       3. MODAL DE LOGIN
    ============================== */
    const modalOverlay = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');

    // Abrir modal
    function openModal() {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Bloquear scroll
    }

    // Fechar modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Liberar scroll
        
        // Resetar formulário após fechar
        if (loginForm) {
            loginForm.reset();
        }
    }

    // Fechar ao clicar fora do modal
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Fechar com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Expor funções para o HTML
    window.openModal = openModal;
    window.closeModal = closeModal;

    /* ==============================
       4. VALIDAÇÃO DO LOGIN
    ============================== */
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const btnSubmit = loginForm.querySelector('.btn-submit');
            const originalText = btnSubmit.innerHTML;

            // Simular carregamento
            btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
            btnSubmit.disabled = true;

            // Simular verificação (2 segundos)
            setTimeout(() => {
                if (username && password.length >= 4) {
                    // Sucesso
                    showNotification(`Bem-vindo, ${username}!`, 'success');
                    btnSubmit.innerHTML = '<i class="fas fa-check"></i> Logado!';
                    
                    setTimeout(() => {
                        closeModal();
                        btnSubmit.innerHTML = originalText;
                        btnSubmit.disabled = false;
                    }, 1500);
                } else {
                    // Erro
                    showNotification('Usuário ou senha inválidos!', 'error');
                    btnSubmit.innerHTML = originalText;
                    btnSubmit.disabled = false;
                }
            }, 2000);
        });
    }

    /* ==============================
       5. NOTIFICAÇÕES TOAST
    ============================== */
    function showNotification(message, type = 'info') {
        // Remover notificação anterior se existir
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);

        // Estilos da notificação (inline para funcionar isoladamente)
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            background: type === 'success' ? '#27ae60' : '#e74c3c',
            color: 'white',
            padding: '15px 25px',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            zIndex: '3000',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'slideIn 0.3s ease',
            minWidth: '250px'
        });

        // Adicionar keyframes dinamicamente
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(100px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `;
            document.head.appendChild(style);
        }

        // Remover após 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    /* ==============================
       6. SCROLL SUAVE
    ============================== */
    function scrollTo(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Fechar menu mobile se aberto
            navLinks.classList.remove('active');
        }
    }

    window.scrollTo = scrollTo;

    /* ==============================
       7. ANIMAÇÃO DOS CARDS (INTERAÇÃO)
    ============================== */
    const stepCards = document.querySelectorAll('.step-card');
    const productCards = document.querySelectorAll('.product-card');

    // Animar cards ao aparecer na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);

    // Aplicar animação inicial
    [...stepCards, ...productCards].forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });

    /* ==============================
       8. ADICIONAR AO CARRINHO
    ============================== */
    const addCartButtons = document.querySelectorAll('.add-cart');

    addCartButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.product-card');
            const productName = card.querySelector('h4').innerText;
            
            // Efeito visual
            this.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
            this.style.background = '#27ae60';
            
            showNotification(`${productName} adicionado ao carrinho!`, 'success');

            // Resetar botão
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-plus"></i> Adicionar';
                this.style.background = '';
            }, 2000);
        });
    });

    /* ==============================
       9.EFEITO PARALLAX SIMPLES
    ============================== */
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (hero && scrolled < 800) {
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });

    /* ==============================
       10. MÁSCARA DE INPUT ( OPCIONAL )
    ============================== */
    const usernameInput = document.getElementById('username');
    if (usernameInput) {
        usernameInput.addEventListener('input', function() {
            // Remove caracteres especiais
            this.value = this.value.replace(/[^a-zA-Z0-9_]/g, '');
        });
    }

    console.log('🚀 GreenSource JS Carregado com sucesso!');
});
