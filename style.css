/* ========================================
   AGROFORTE - CSS COMPLETO
   ======================================== */

:root {
    --primary: #4CAF50;
    --primary-dark: #388E3C;
    --primary-light: #C8E6C9;
    --secondary: #2E7D32;
    --accent: #8BC34A;
    --dark: #1B1B1B;
    --dark-light: #2D2D2D;
    --light: #FFFFFF;
    --light-gray: #F5F5F5;
    --gray: #9E9E9E;
    --text: #424242;
    --text-light: #757575;
    --shadow: 0 10px 40px rgba(0,0,0,0.1);
    --shadow-hover: 0 20px 60px rgba(0,0,0,0.15);
    --radius: 12px;
    --radius-sm: 8px;
    --transition: all 0.3s ease;
}

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: var(--text);
    background: var(--light);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
}

::selection {
    background: var(--primary);
    color: var(--light);
}

/* ========================================
   HEADER
   ======================================== */

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    transition: var(--transition);
    box-shadow: 0 2px 20px rgba(0,0,0,0.05);
}

.header.scrolled {
    box-shadow: 0 2px 30px rgba(0,0,0,0.1);
}

.header.scrolled .navbar {
    padding: 12px 0;
}

.header-top {
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    padding: 8px 0;
    font-size: 13px;
    color: var(--light);
}

.header-top .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-info {
    display: flex;
    gap: 20px;
}

.header-info span {
    display: flex;
    align-items: center;
    gap: 6px;
}

.header-info i {
    font-size: 12px;
}

.header-social {
    display: flex;
    gap: 8px;
}

.header-social a {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.15);
    border-radius: 50%;
    font-size: 12px;
    color: var(--light);
    transition: var(--transition);
}

.header-social a:hover {
    background: var(--light);
    color: var(--primary);
    transform: translateY(-2px);
}

.navbar {
    padding: 15px 0;
    transition: var(--transition);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-icon {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border-radius: var(--radius-sm);
    color: var(--light);
    font-size: 20px;
}

.logo-text {
    display: flex;
    flex-direction: column;
}

.logo-text span {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--dark);
    line-height: 1.1;
}

.logo-text span span {
    color: var(--primary);
}

.logo-text small {
    font-size: 10px;
    color: var(--text-light);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 500;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 25px;
}

.nav-menu li a {
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
    position: relative;
    padding: 5px 0;
    transition: var(--transition);
}

.nav-menu li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: var(--transition);
}

.nav-menu li a:hover::after,
.nav-menu li a.active::after {
    width: 100%;
}

.nav-menu li a:hover,
.nav-menu li a.active {
    color: var(--primary);
}

.btn-contact {
    background: var(--primary);
    color: var(--light);
    padding: 10px 22px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 14px;
}

.btn-contact:hover {
    background: var(--primary-dark);
    color: var(--light);
}

.btn-contact::after {
    display: none;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 8px;
    cursor: pointer;
}

.menu-toggle span {
    width: 25px;
    height: 2px;
    background: var(--dark);
    transition: var(--transition);
    border-radius: 2px;
}

/* ========================================
   HERO SECTION
   ======================================== */

.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 80px;
    overflow: hidden;
}

.hero-slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.hero-slide {
    position: absolute;
    top:
