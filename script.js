

document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Responsivo (Mobile)
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Modo Claro / Escuro (Theme Toggle)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Verifica preferência salva
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark';
            }
            // Salva a escolha do usuário no navegador
            localStorage.setItem('theme', theme);
        });
    }

    // 3. Validação do Formulário de Contato
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', function(event) {
            // Evita o envio real da página
            event.preventDefault();

            // Captura os campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação simples
            if (nome === '' || email === '' || mensagem === '') {
                alert('Erro: Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Validação de formato de e-mail usando Expressão Regular
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Erro: Por favor, insira um e-mail válido (ex: usuario@dominio.com).');
                return;
            }

            // Simulação de sucesso
            alert('Mensagem enviada com sucesso! Obrigado pelo contato, ' + nome + '.');
            
            // Limpa o formulário após "envio"
            formContato.reset();
        });
    }
});

