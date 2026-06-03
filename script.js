/* ============================================
   AGROFORT - Future of Agriculture
   JavaScript Profissional
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // VARIÁVEIS
    // ============================================
    const CORRECT_PASSWORD = '123';
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('error');
    const yearSpan = document.getElementById('year');
    
    // ============================================
    //(LOGIN
    // ============================================
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = passwordInput.value;
            
            if (password === CORRECT_PASSWORD) {
                // Login bem-sucedido
                loginScreen.classList.add('hidden');
                mainContent.classList.remove('hidden');
                
                // Animação de entrada
                mainContent.style.animation = 'fadeIn 0.8s ease';
                
                // Iniciar contadores animados
                startCounters();
            } else {
                // Login falhou
                errorMsg.classList.add('show');
                passwordInput.value = '';
                
                // Remover erro após 3 segundos
                setTimeout(() => {
                    errorMsg.classList.remove('show');
                }, 3000);
            }
        });
    }
    
    // ============================================
    // ANO AUTOMÁTICO
    // ============================================
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // ============================================
    // HEADER SCROLL
    // ============================================
    const header = document.getElementById('header');
    const navbar = document.getElementById('navbar');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // ============================================
    // MENU MOBILE
    // ============================================
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.querySelector('.nav-links');
    const navClose = document.getElementById('nav-close');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.add('active');
        });
    }
    
    if (navClose) {
        navClose.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    }
    
    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Fechar menu mobile ao clicar
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // ============================================
    // SCROLL REVEAL (ANIMAÇÃO AO ROLAR)
    // ============================================
    const revealElements = () => {
        const reveals = document.querySelectorAll('.about-card, .service-item, .product-card');
        
        reveals.forEach((el, index) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (elementTop < windowHeight - revealPoint) {
                el.style.animationDelay = `${index * 0.1}s`;
                el.classList.add('revealed');
            }
        });
    };
    
    // Aplicar estilo inicial
    document.querySelectorAll('.about-card, .service-item, .product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', revealElements);
    revealElements(); // Executar uma vez ao carregar
    
    // ============================================
    // CONTADOR ANIMADO
    // ============================================
    const startCounters = () => {
        const counters = document.querySelectorAll('.number-box .num, .stat-number');
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    };
    
    // ============================================
    // FORMULÁRIO DE CONTATO
    // ============================================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Enviado!';
            btn.style.background = 'var(--primary-dark)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }
    
    // ============================================
    // EFEITO PARALLAX (OPCIONAL)
    // ============================================
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-bg img');
        
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // ============================================
    // DETECTAR LINK ATIVO
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // ============================================
    // ANIMAÇÃO DE ENTRADA
    // ============================================
    const animateEntry = () => {
        const elements = document.querySelectorAll('.hero-badge, .hero-content h1, .hero-content p, .hero-btns, .hero-numbers');
        
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s ease';
            el.style.transitionDelay = `${index * 0.2}s`;
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100);
        });
    };
    
    // Executar após login
    if (!loginScreen.classList.contains('hidden')) {
        animateEntry();
    }
    
    // ============================================
    // INTERAÇÃO COM BOTÕES
    // ============================================
    const productLinks = document.querySelectorAll('.product-link');
    
    productLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.paddingRight = '20px';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.paddingRight = '';
        });
    });
    
    // ============================================
    // TOOLTIP SIMPLES
    // ============================================
    const createTooltips = () => {
        const tooltips = document.querySelectorAll('[data-tooltip]');
        
        tooltips.forEach(el => {
            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip';
            tooltip.textContent = el.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: var(--dark);
                color: white;
                padding: 8px 15px;
                border-radius: 5px;
                font-size: 0.8rem;
                white-space: nowrap;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 1000;
            `;
            
            el.style.position = 'relative';
            el.appendChild(tooltip);
            
            el.addEventListener('mouseenter', () => {
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
            });
            
            el.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
            });
        });
    };
    
    createTooltips();
    
    // ============================================
    // LOGGER DE CONSOLE
    // ============================================
    console.log(`
    ╔════════════════════════════════╗
    ║   AGROFORT - Agriculture   ║
    ║   Future of Agriculture   ║
    ╠════════════════════════════════╣
    ║  Site desenvolvido com     ║
    ║  técnicas profissionais   ║
    ╚════════════════════════════════╝
    `);
    
});
