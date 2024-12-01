function enterPortal() {
    const audio = new Audio('take it from the starz.mp3');
    audio.volume = 0.1; //If Anyone Want A Black Background

    const typing = document.getElementById('typing');
    const cursor = document.getElementById('cursor');
    const texts = ["gorenet", "/info", "gorestars"];
    let textIndex = 0;
    let charIndex = 0;

    audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        audio.play();
    });
    audio.play();

    document.getElementById('enter-portal').style.display = "none";
    document.querySelector('.container').classList.remove('hidden');

    const bodyDiv = document.getElementById('body-div');
    bodyDiv.classList.remove('hidden');

    const video = document.getElementById('background-video');
    video.volume = 0.07;
    video.classList.remove('hidden');
    video.play();

    function type() {
        if (charIndex < texts[textIndex].length) {
            typing.textContent = texts[textIndex].slice(0, charIndex + 1);
            charIndex++;
        } else {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
        }
    }
    setInterval(type, 115);
}

document.getElementById('typing').addEventListener('click', () => {
    window.location.href = "https://gorestars.lol";
});
