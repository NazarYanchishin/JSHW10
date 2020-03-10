const playSound = (soundUrl) => {
    const audio = new Audio();
    audio.src = soundUrl;
    audio.autoplay = true;
};
document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 49: // (key 1)
            return playSound('./sound/FUCKYOU.mp3');
        case 50: // (key 2)
            return playSound('./sound/Ass we can.mp3');
        case 51: // (key 3)
            return playSound('./Fisting is 300.mp3');
        case 52: // (key 4)
            return playSound('./sound/Boy next door.mp3');
        case 53: // (key 5)
            return playSound('./sound/Fucking slaves get your ass back here.mp3');
    };
});
