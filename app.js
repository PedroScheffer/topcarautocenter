document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do menu
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Função para abrir/fechar menu
    menuIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        
        // Alterna ícone entre barras e X
        const icon = menuIcon.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            icon.style.color = '#1a2a6c'; // Cor escura quando o menu tá aberto (fundo branco)
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            icon.style.color = '#fff'; // Cor branca no header
        }
    });

    // Fecha o menu ao clicar em um link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            const icon = menuIcon.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            icon.style.color = '#fff';
        });
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !menuIcon.contains(e.target) && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            const icon = menuIcon.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            icon.style.color = '#fff';
        }
    });
});
