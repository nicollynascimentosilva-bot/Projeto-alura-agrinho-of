:root {
    --primary: #2e7d32;
    --primary-hover: #1b5e20;
    --dark: #1e293b;
    --light: #f8fafc;
    --border: #cbd5e1;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
    background-color: #0f172a;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Estrutura dividida em duas colunas */
.login-wrapper {
    display: flex;
    width: 100%;
    max-width: 1100px;
    height: 650px;
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    margin: 20px;
}

/* Lado Esquerdo - Fundo com Imagem do Campo */
.welcome-side {
    flex: 1.2;
    background: linear-gradient(rgba(30, 41, 59, 0.75), rgba(46, 125, 50, 0.8)), 
                url('https://unsplash.com') center/cover no-repeat;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
}

.brand {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-icon { font-size: 2rem; }

.brand h1 {
    font-size: 1.8rem;
    font-weight: 800;
}

.brand h1 span { color: #81c784; }

.welcome-text h2 {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 15px;
}

.welcome-text p {
    color: #cbd5e1;
    font-size: 1.05rem;
    line-height: 1.5;
    max-width: 420px;
}

.action-buttons {
    display: flex;
    gap: 15px;
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    backdrop-filter: blur(5px);
    transition: var(--transition);
}

.btn-secondary:hover {
    background: white;
    color: var(--dark);
    transform: translateY(-2px);
}

/* Lado Direito - Painel de Login */
.login-side {
    flex: 1;
    background: #ffffff;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-box {
    width: 100%;
    max-width: 360px;
}

.login-box h3 {
    font-size: 1.7rem;
    color: var(--dark);
    margin-bottom: 5px;
}

.subtitle {
    color: #64748b;
    font-size: 0.95rem;
    margin-bottom: 30px;
}

/* Campos de entrada */
.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 8px;
}

.input-group input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--border);
    border-radius: 8px;
    outline: none;
    font-size: 1rem;
    transition: var(--transition);
}

.input-group input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(46, 125, 50, 0.1);
}

/* Opções adicionais */
.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    margin-bottom: 25px;
}

.remember-me {
    color: #475569;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
}

.forgot-pass {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
}

.forgot-pass:hover { text-decoration: underline; }

/* Botão principal */
.btn-primary {
    width: 100%;
    background: var(--primary);
    color: white;
    border: none;
    padding: 14px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.btn-primary:hover {
    background: var(--primary-hover);
}

.login-footer {
    text-align: center;
    margin-top: 30px;
    font-size: 0.85rem;
    color: #64748b;
}

.login-footer a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
}

/* Ajuste rápido para telas pequenas */
@media (max-width: 900px) {
    .login-wrapper { flex-direction: column; height: auto; }
    .welcome-side { padding: 40px 30px; gap: 30px; }
    .login-side { padding: 40px 30px; }
}
