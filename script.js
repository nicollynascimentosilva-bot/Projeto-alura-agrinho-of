/* ========================================
   AGROFORT - JavaScript Otimizado
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ========================================
       VARIÁVEIS GLOBAIS
       ======================================== */
    
    const header = document.querySelector('.header');
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    let lastScroll = 0;
    let statsAnimated = false;
    let currentSlide = 0;
    let slideInterval;
    
    
    /* ========================================
       HEADER SCROLL EFFECT
       ======================================== */
    
    const headerScrollEffect = () => {
        if (!header || !navbar) return;
        
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            navbar.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', headerScrollEffect);
    
    
    /* ========================================
       MOBILE MENU TOGGLE
       ======================================== */
    
    const menuToggleFunction = () => {
        if (!menuToggle || !navMenu) return;
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    };
    
    menuToggleFunction();
    
    
    /* ========================================
       HERO SLIDER
       ======================================== */
    
    const heroSlides = document.querySelectorAll('.hero-slide');
    const sliderDots = document.querySelectorAll('.hero-slider-nav .dot');
    
    const showSlide = (index) => {
        heroSlides.forEach(slide => slide.classList.remove('active'));
        sliderDots.forEach(dot => dot.classList.remove('active'));
        
        heroSlides[index]?.classList.add('active');
        sliderDots[index]?.classList.add('active');
        currentSlide = index;
    };
    
    const nextSlide = () => {
        const next = currentSlide + 1;
        showSlide(next >= heroSlides.length ? 0 : next);
    };
    
    const startSlider = () => {
        slideInterval = setInterval(nextSlide, 5000);
    };
    
    const stopSlider = () => {
        clearInterval(slideInterval);
    };
    
    const heroSliderInit = () => {
        if (heroSlides.length === 0) return;
        
        startSlider();
        
        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopSlider();
                showSlide(index);
                startSlider();
            });
        });
        
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopSlider);
            heroSection.addEventListener('mouseleave', startSlider);
        }
    };
    
    heroSliderInit();
    
    
    /* ========================================
       ACTIVE NAV LINK ON SCROLL
       ======================================== */
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu li a');
    
    const highlightNavOnScroll = () => {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    
    /* ========================================
       SCROLL ANIMATIONS (INTERSECTION OBSERVER)
       ======================================== */
    
    const animateElements = document.querySelectorAll('.about-card, .service-card, .product-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    
    /* ========================================
       SMOOTH SCROLL
       ======================================== */
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target && header) {
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
       CONTATO FORM
       ======================================== */
    
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[type="text"]')?.value;
            const email = contactForm.querySelector('input[type="email"]')?.value;
            const phone = contactForm.querySelector('input[type="tel"]')?.value;
            const message = contactForm.querySelector('textarea')?.value;
            
            // Validação simples
            if (!name || !email || !phone || !message) {
                showAlert('Por favor, preencha todos os campos!', 'error');
                return;
            }
            
            if (!validateEmail(email)) {
                showAlert('Por favor, insira um email válido!', 'error');
                return;
            }
            
            // Simular envio
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn?.textContent;
            
            if (submitBtn) {
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
            }
            
            setTimeout(() => {
                showAlert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`, 'success');
                contactForm.reset();
                if (submitBtn) {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            }, 1500);
        });
    }
    
    // Funções auxiliares para o form
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    
    const showAlert = (message, type) => {
        // Remover alerts anteriores
        document.querySelectorAll('.custom-alert').forEach(el => el.remove());
        
        const alert = document.createElement('div');
        alert.className = `custom-alert alert-${type}`;
        alert.textContent = message;
        alert.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        `;
        
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => alert.remove(), 300);
        }, 3000);
    };
    
    
    /* ========================================
       STATS COUNTER ANIMATION
       ======================================== */
    
    const statNumbers = document.querySelectorAll('.stat-num');
    
    const animateStats = () => {
        if (statsAnimated || statNumbers.length === 0) return;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
            const suffix = stat.textContent.replace(/[0-9]/g, '');
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + suffix;
            }, 30);
        });
        
        statsAnimated = true;
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroSection = document.getElementById('home');
    if (heroSection) {
        statsObserver.observe(heroSection);
    }
    
    
    /* ========================================
       HEADER TOP HIDE ON SCROLL
       ======================================== */
    
    const headerTop = document.querySelector('.header-top');
    
    const headerTopScroll = () => {
        const currentScroll = window.pageYOffset;
        
        if (headerTop) {
            if (currentScroll > lastScroll && currentScroll > 200) {
                headerTop.style.transform = 'translateY(-100%)';
            } else {
                headerTop.style.transform = 'translateY(0)';
            }
        }
        
        lastScroll = currentScroll;
    };
    
    window.addEventListener('scroll', headerTopScroll);
    
    
    /* ========================================
       LAZY LOAD IMAGES
       ======================================== */
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    
    
    /* ========================================
       SCROLL TO TOP BUTTON
       ======================================== */
    
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
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    
    /* ========================================
       SERVICES CARD HOVER
       ======================================== */
    
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    
    /* ========================================
       VIDEO LAZY LOAD
       ======================================== */
    
    const videoContainer = document.querySelector('.video-container');
    
    if (videoContainer) {
        const iframe = videoContainer.querySelector('iframe');
        
        if (iframe && iframe.dataset.src) {
            iframe.src = '';
            const videoSrc = iframe.dataset.src;
            
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        iframe.src = videoSrc;
                        videoObserver.unobserve(iframe);
                    }
                });
            }, { threshold: 0.5 });
            
            videoObserver.observe(iframe);
        }
    }
    
    
    /* ========================================
       RESPONSIVE FIXES
       ======================================== */
    
    const checkMobile = () => {
        const isMobile = window.innerWidth < 768;
        
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            heroTitle.style.fontSize = isMobile ? '36px' : '56px';
        }
        
        const productsGrid = document.querySelector('.products-grid');
        if (productsGrid) {
            productsGrid.style.gridTemplateColumns = isMobile ? '1fr' : 'repeat(3, 1fr)';
        }
    };
    
    window.addEventListener('resize', checkMobile);
    checkMobile();
    
    
    /* ========================================
       PRELOADER (OPCIONAL)
       ======================================== */
    
    const preloader = document.querySelector('.preloader');
    
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.classList.add('loaded');
            }, 500);
        });
    }
    
    
    /* ========================================
       KEYBOARD ACCESSIBILITY
       ======================================== */
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (navMenu?.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle?.classList.remove('active');
            }
        }
    });
    
    
    console.log('🚀 AgroFort - Script carregado com sucesso!');
    
});
