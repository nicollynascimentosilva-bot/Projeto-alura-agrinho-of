/* ============================================
   AGROFORT - JS
   ============================================ */

// Aguardar o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // LOGIN
    // ============================================
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('error-msg');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = passwordInput.value;
            
            if (password === '123') {
                // Login correto - mostra o site
                loginScreen.classList.add('hidden');
                mainContent.classList.remove('hidden');
                
                // Ativar contadores
                animateNumbers();
            } else {
                // Login incorreto
                errorMsg.style.display = 'block';
                passwordInput.value = '';
                
                // Esconder erro após 3 segundos
                setTimeout(function() {
                    errorMsg.style.display = 'none';
                }, 3000);
            }
        });
    }
    
    // ============================================
    // ANO AUTOMÁTICO
    // ============================================
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // ============================================
    // CONTADOR ANIMADO
    // ============================================
    function animateNumbers() {
        const numbers = document.querySelectorAll('.stat-num');
        
        numbers.forEach(function(num) {
            const target = parseInt(num.textContent);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            function update() {
                current += step;
                if (current < target) {
                    num.textContent = Math.floor(current);
                    requestAnimationFrame(update);
                } else {
                    num.textContent = target;
                }
            }
            
            update();
        });
    }
    
    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // ============================================
    // CONTATO FORM
    // ============================================
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado! Em breve entraremos em contato.');
            contactForm.reset();
        });
    }
    
    // ============================================
    // MENU ATIVO AO ROLAR
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // ============================================
    // LOGGER
    // ============================================
    console.log('%c AgroFort ', 'color: #2ecc71; font-size: 20px; font-weight: bold;');
    console.log('Site carregado com sucesso!');
});
