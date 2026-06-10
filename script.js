/* ========================================
   AGROFORT - JAVASCRIPT PRINCIPAL
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ========================================
       HEADER SCROLL EFFECT
       ======================================== */
    
    const header = document.querySelector('.header');
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            navbar.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            navbar.classList.remove('scrolled');
        }
    });
    
    
    /* ========================================
       MOBILE MENU TOGGLE
       ======================================== */
    
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
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
    }
    
    
    /* ========================================
       HERO SLIDER
       ======================================== */
    
    const heroSlides = document.querySelectorAll('.hero-slide');
    const sliderDots = document.querySelectorAll('.hero-slider-nav .dot');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
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
        let next = currentSlide + 1;
        if (next >= heroSlides.length) {
            next = 0;
        }
        showSlide(next);
    }
    
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopSlider() {
        clearInterval(slideInterval);
    }
    
    // Iniciar slider automaticamente
    if (heroSlides.length > 0) {
        startSlider();
        
        // Controle manual pelos dots
        sliderDots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                stopSlider();
                showSlide(index);
                startSlider();
            });
        });
        
        // Pausar ao passar o mouse
        const heroSection = document.querySelector('.hero');
        heroSection.addEventListener('mouseenter', stopSlider);
        heroSection.addEventListener('mouseleave', startSlider);
    }
    
    
    /* ========================================
       ACTIVE NAV LINK ON SCROLL
       ======================================== */
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu li a');
    
    function highlightNavOnScroll() {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    
    /* ========================================
       SCROLL ANIMATIONS
       ======================================== */
    
    const animateElements = document.querySelectorAll('.about-card, .service-card, .product-card');
    
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
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease ' + (index * 0.1) + 's';
        observer.observe(el);
    });
    
    // Adicionar classe animate via JS
    document.addEventListener('scroll', function() {
        animateElements.forEach(function(el) {
            if (el.classList.contains('animate')) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });
    
    
    /* ========================================
       SMOOTH SCROLL
       ======================================== */
    
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    /* ========================================
       CONTACT FORM
       ======================================== */
    
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pegar valores dos campos
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const message = this.querySelector('textarea').value;
            
            // Validar campos
            if (!name || !email || !phone || !message) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            // Simular envio (aqui você pode integrar com backend)
            const submitBtn = this.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(function() {
                alert('Obrigado, ' + name + '! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    
    /* ========================================
       STATS COUNTER ANIMATION
       ======================================== */
    
    const statNumbers = document.querySelectorAll('.stat-num');
    let statsAnimated = false;
    
    function animateStats() {
        if (statsAnimated) return;
        
        statNumbers.forEach(function(stat) {
            const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
            const suffix = stat.textContent.replace(/[0-9]/g, '');
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + suffix;
            }, 30);
        });
        
        statsAnimated = true;
    }
    
    // Animar stats quando o hero estiver visível
    const heroSection = document.getElementById('home');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    if (heroSection) {
        statsObserver.observe(heroSection);
    }
    
    
    /* ========================================
       HEADER TOP HIDE ON SCROLL DOWN
       ======================================== */
    
    let lastScroll = 0;
    const headerTop = document.querySelector('.header-top');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 200) {
            if (headerTop) {
                headerTop.style.transform = 'translateY(-100%)';
                headerTop.style.transition = 'transform 0.3s ease';
            }
        } else {
            if (headerTop) {
                headerTop.style.transform = 'translateY(0)';
            }
        }
        
        lastScroll = currentScroll;
    });
    
    
    /* ========================================
       PREVENT DEFAULT FOR BUTTON TYPES
       ======================================== */
    
    // Corrigir botões que tm href="#"
    document.querySelectorAll('button[href]').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
            }
        });
    });
    
    
    /* ========================================
       LAZY LOAD IMAGES
       ======================================== */
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(function(img) {
        imageObserver.observe(img);
    });
    
    
    /* ========================================
       SCROLL TO TOP BUTTON
       ======================================== */
    
    // Criar botão de scroll to top
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        box-shadow: 0 4px 20px rgba(76, 175, 80, 0.4);
        z-index: 9999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    
    /* ========================================
       SERVICES CARD HOVER EFFECT
       ======================================== */
    
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    
    /* ========================================
       PRODUCTS ADD TO CART (EXAMPLE)
       ======================================== */
    
    const productLinks = document.querySelectorAll('.product-link');
    
    productLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.closest('.product-info').querySelector('h3').textContent;
            
            // Animação de clique
            this.innerHTML = '<i class="fa-solid fa-check"></i> Solicitado!';
            this.style.color = '#4CAF50';
            
            setTimeout(function() {
                link.innerHTML = 'Solicitar Orçamento <i class="fa-solid fa-arrow-right"></i>';
                link.style.color = '';
            }, 2000);
        });
    });
    
    
    /* ========================================
       HEADER SOCIAL LINKS
       ======================================== */
    
    const socialLinks = document.querySelectorAll('.header-social a');
    
    socialLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar links reais
            // Por exemplo: window.open('https://instagram.com/agrofort', '_blank');
            
            console.log('Link social clicado: ' + this.querySelector('i').className);
        });
    });
    
    
    /* ========================================
       VIDEO YOUTUBE API
       ======================================== */
    
    const videoContainer = document.querySelector('.video-container');
    
    if (videoContainer) {
        // Adicionar lazy load no iframe
        const iframe = videoContainer.querySelector('iframe');
        const videoSrc = iframe.src;
        
        iframe.src = '';
        iframe.dataset.src = videoSrc;
        
        // Carregar vídeo apenas quando visível
        const videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    if (iframe.dataset.src) {
                        iframe.src = iframe.dataset.src;
                    }
                    videoObserver.unobserve(iframe);
                }
            });
        }, { threshold: 0.5 });
        
        videoObserver.observe(iframe);
    }
    
    
    /* ========================================
       LOADED CLASS
       ======================================== */
    
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animar elementos iniciais
        setTimeout(function() {
            document.querySelector('.hero-content').style.opacity = '1';
            document.querySelector('.hero-content').style.transform = 'translateY(0)';
        }, 300);
    });
    
    
    /* ========================================
       RESPONSIVE FIXES
       ======================================== */
    
    function checkMobile() {
        const isMobile = window.innerWidth < 768;
        
        // Ajustar tamanho da fonte do título no hero
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            if (isMobile) {
                heroTitle.style.fontSize = '36px';
            } else {
                heroTitle.style.fontSize = '56px';
            }
        }
        
        // Ajustar grid de produtos
        const productsGrid = document.querySelector('.products-grid');
        if (productsGrid) {
            if (isMobile) {
                productsGrid.style.gridTemplateColumns = '1fr';
            } else {
                productsGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
            }
        }
    }
    
    window.addEventListener('resize', checkMobile);
    checkMobile();
    
    
    console.log('AgroFort - Site carregado com sucesso!');
    
});
