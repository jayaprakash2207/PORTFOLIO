const projectCards = document.querySelectorAll('.project-card');

// sidebar elements
const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

projectCards.forEach((card) => {
    const video = card.querySelector('video');
    const hoverSign = card.querySelector('.hover-sign');
    if (!video || !hoverSign) {
        return;
    }

    const onEnter = () => {
        video.play();
        hoverSign.classList.add('active');
    };
    const onLeave = () => {
        video.pause();
        hoverSign.classList.remove('active');
    };

    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mouseleave', onLeave);
});

// sidebar behavior
if (menu && sidebar) {
    menu.addEventListener('click', () => {
        sidebar.classList.remove('close-sidebar');
        sidebar.classList.add('open-sidebar');
    });
}

if (close && sidebar) {
    close.addEventListener('click', () => {
        sidebar.classList.remove('open-sidebar');
        sidebar.classList.add('close-sidebar');
    });
}
