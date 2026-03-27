document.addEventListener('DOMContentLoaded', function() {
    // Salva o perfil ativo no localStorage quando o usuário clica no perfil
    const profileLinks = document.querySelectorAll('.profiles .profile a');

    profileLinks.forEach(link => {
        link.addEventListener('click', function() {
            const profileElement = this.closest('.profile');
            if (!profileElement) return;

            const profileName = profileElement.querySelector('span')?.textContent.trim() || '';
            const profileImg = profileElement.querySelector('img')?.src || '';

            if (profileName) {
                localStorage.setItem('perfilAtivoNome', profileName);
            }
            if (profileImg) {
                localStorage.setItem('perfilAtivoImagem', profileImg);
            }
        });
    });
});