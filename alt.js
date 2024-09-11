const audioFiles = [
    'boom.mp3', 'emotionaldamage.mp3', 'bird.mp3', 'fart.mp3', 'bababooey.mp3',
    'notif.mp3', 'bruh.mp3', 'heheheha.mp3', 'MUSIC MAN.mp3', 'bonk.mp3',
    'fart3.mp3', 'hwg.mp3', 'omg.mp3', 'bup.mp3', 'getout.mp3', 'boing.mp3', 'huh.mp3'
];

const audioMap = new Map();

audioFiles.forEach(src => {
    const audio = new Audio(`./audios/${src}`);
    const id = src.slice(0, -4);
    audio.id = id;
    audioMap.set(id, audio);  // Store audio elements in the map
    console.log(src + ' has loaded successfully');
    
    if (['fart.mp3', 'bababooey.mp3', 'bonk.mp3', 'fart3.mp3', 'omg.mp3', 'bup.mp3', 'getout.mp3', 'boing.mp3', 'huh.mp3'].includes(src)) {
        audio.className = 'audio';
    }
});

const volumeSlider = document.getElementById('volumeslider');

function playAudioById(id) {
    const audioElement = audioMap.get(id);
    if (audioElement) {
        audioElement.currentTime = 0.15;
        audioElement.volume = volumeSlider.value
        audioElement.play();
    } else {
        console.log(`Audio with ID ${id} not found`);
    }
}

// Play the 'fart' sound
// playAudioById('fart');


