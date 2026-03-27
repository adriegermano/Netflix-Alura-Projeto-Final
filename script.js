// Script para alternar entre dark e light mode
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('.theme-icon');

    // Carrega o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeIcon.textContent = '☀️';
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        themeIcon.textContent = '🌙';
    }

    // Função para alternar o tema
    function toggleTheme() {
        if (body.classList.contains('dark-mode')) {
            // Muda para light mode
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        } else {
            // Muda para dark mode
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    }

    // Adiciona o event listener ao botão
    themeToggle.addEventListener('click', toggleTheme);

    // Adiciona suporte para teclado (Enter e Space)
    themeToggle.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleTheme();
        }
    });

    // Salva o perfil ativo antes de navegar ao catálogo
    const profileLinks = document.querySelectorAll('.profiles .profile a');
    profileLinks.forEach(link => {
        link.addEventListener('click', function() {
            const profileElement = this.closest('.profile');
            if (!profileElement) return;

            const profileName = profileElement.querySelector('span')?.textContent.trim() || '';
            const profileImg = profileElement.querySelector('img')?.src || '';

            if (profileName) localStorage.setItem('perfilAtivoNome', profileName);
            if (profileImg) localStorage.setItem('perfilAtivoImagem', profileImg);
        });
    });
});