document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const music = document.getElementById('background-music');

    music.volume = 0.4;

    overlay.addEventListener('click', () => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 3000);
        music.play();
    });
});
