/* ============================================
   AGROFORT - JAVASCRIPT PROFISSIONAL
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // VARIÁVEIS
    // ============================================
    const yearSpan = document.getElementById('year');
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const sliderDots = document.querySelectorAll('.hero-slider-nav .dot');
    const heroSlides = document.querySelectorAll('.hero-slide');
    const contactForm = document.querySelector('.contact-form');
    
    // ============================================
    // ANO AUTOMÁTICO
    // ============================================
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // ============================================
    // SLIDER DO HERO
    // ============================================
    let currentSlide = 0;
    const totalSlides = heroSlides.length;
    
    function changeSlide(index) {
        // Remove.active de todos
        heroSlides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        sliderDots.forEach(function(dot) {
            dot.classList.remove('active');
        });
        
        // Adiciona.active ao atual
        heroSlides[index].classList.add('active');
        sliderDots[index].classList.add('active');
        currentSlide = index;
    }
    
    // Clique nos dots
    sliderDots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            changeSlide(index);
        });
    });
    
    // Auto-slide a cada 5 segundos
    setInterval(function() {
        let nextSlide = (currentSlide + 1) % totalSlides;
        changeSlide(nextSlide);
    }, 5000);
    
    // ============================================
    // ANIMAÇÃO DOS NÚMEROS
    // ============================================
    function animateNumbers() {
        const numbers = document.querySelectorAll('.stat-num');
        
        numbers.forEach(function(num) {
            const target = parseInt(num.getAttribute('data-target'));
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
    
    // Iniciar números quando rolar até o hero
    const heroSection = document.querySelector('.hero');
    const heroStats = document.querySelector('.hero-stats');
    let numbersAnimated = false;
    
    window.addEventListener('scroll', function() {
        if (!numbersAnimated && heroStats) {
            const rect = heroStats.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                animateNumbers();
                numbersAnimated = true;
            }
        }
    });
    
    // ============================================
    // HEADER AO ROLAR
    // ============================================
    window.addEventListener('scroll', function() {
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    // ============================================
    // MENU MOBILE
    // ============================================
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
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
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Fechar menu mobile
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // ============================================
    // LINK ATIVO AO ROLAR
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
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
    // FORMULÁRIO DE CONTATO
    // ============================================
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Mensagem Enviada!';
            btn.style.background = 'var(--primary-dark)';
            
            setTimeout(function() {
                btn.innerHTML = originalText;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }
    
    // ============================================
    // ANIMAÇÃO DE REVEAL
    // ============================================
    function reveal() {
        const cards = document.querySelectorAll('.about-card, .service-card, .product-card');
        
        cards.forEach(function(card) {
            const cardTop = card.getBoundingClientRect().top;
            const cardVisible = 150;
            
            if (cardTop < window.innerHeight - cardVisible) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Estilo inicial para as animações
    document.querySelectorAll('.about-card, .service-card, .product-card').forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', reveal);
    reveal();
    
    // ============================================
    // EFEITO PARALLAX NO HERO
    // ============================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-slider');
        
        if (heroBg) {
            heroBg.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
        }
    });
    
    // ============================================
    // LOGGER
    // ============================================
    console.log('%c AGROFORT ', 'color: #2ecc71; font-size: 24px; font-weight: bold;');
    console.log('Site carregado com sucesso! 🚀');
    console.log('Tema: Agricultura Sustentável');
});
