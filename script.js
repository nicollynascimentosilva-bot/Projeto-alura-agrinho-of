/* ======================================== */
/* AGROFORTE - JavaScript Completo */
/* ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    /* === VARIÁVEIS === */
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const scrollTopBtn = document.getElementById('scrollTop');
    const contactForm = document.getElementById('contactForm');
    
    let lastScroll = 0;
    let currentSlide = 0;
    let slideInterval;
    
    
    /* === HEADER SCROLL EFFECT === */
    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Scroll Top button
        if (currentScroll > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
        
        lastScroll = currentScroll;
    });
    
    
    /* === MOBILE MENU === */
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        
        // Fechar com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
    
    
    /* === HERO SLIDER === */
    const heroSlides = document.querySelectorAll('.hero-slide');
    const sliderDots = document.querySelectorAll('.hero-slider-nav .dot');
    
    function showSlide(index) {
        if (index >= heroSlides.length) {
            index = 0;
        }
        if (index < 0) {
            index = heroSlides.length - 1;
        }
        
        heroSlides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        
        sliderDots.forEach(function(dot) {
            dot.classList.remove('active');
        });
        
        heroSlides[index].classList.add('active');
        sliderDots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopSlider() {
        clearInterval(slideInterval);
    }
    
    // Iniciar slider
    if (heroSlides.length > 0) {
        startSlider();
        
        // Controles manuais
        sliderDots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                stopSlider();
                showSlide(index);
                startSlider();
            });
        });
        
        // Pausar ao passar mouse
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopSlider);
            heroSection.addEventListener('mouseleave', startSlider);
        }
    }
    
    
    /* === SMOOTH SCROLL === */
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href === '#home') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    /* === SCROLL TOP === */
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    
    /* === FORMULÁRIO DE CONTATO === */
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pegar valores
            const nome = this.querySelector('input[name="nome"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const telefone = this.querySelector('input[name="telefone"]').value;
            const mensagem = this.querySelector('textarea[name="mensagem"]').value;
            
            // Validar
            if (!nome || !email || !telefone || !mensagem) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            // Validar email
            if (!validateEmail(email)) {
                alert('Por favor, insira um e-mail válido!');
                return;
            }
            
            // Enviar (simulado)
            const btn = this.querySelector('.btn-submit');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            btn.disabled = true;
            
            setTimeout(function() {
                alert('Obrigado, ' + nome + '! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.');
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
    
    // Função validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    
    /* === ANIMAÇÃO NO SCROLL === */
    const animateElements = document.querySelectorAll('.service-card, .about-image, .video-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(function(el, index) {
        if (el.classList.contains('service-card')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease ' + (index * 0.1) + 's';
        }
        observer.observe(el);
    });
    
    
    /* === RESPONSIVIDADE === */
    function checkResponsive() {
        const isMobile = window.innerWidth < 768;
        
        // Ajustar título do hero
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            heroTitle.style.fontSize = isMobile ? '28px' : '56px';
        }
    }
    
    window.addEventListener('resize', checkResponsive);
    checkResponsive();
    
    
    /* === CONSOLE LOG === */
    console.log('✅ AgroForte - Site carregado com sucesso!');
    console.log('🌱 Desenvolvido com foco em sustentabilidade');
    
});
