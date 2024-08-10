const boom = new Audio();
boom.src = 'audios/boom.mp3';

const emotionaldamage = new Audio();
emotionaldamage.src = "audios/emotionaldamage.mp3"

const bird = new Audio();
bird.src = "audios/bird.mp3";

const fart = new Audio();
fart.src = "audios/fart.mp3";

const bababooey = new Audio();
bababooey.src = "audios/bababooey.mp3";

const notif = new Audio();
notif.src = "audios/notif.mp3";

const bruh = new Audio();
bruh.src = "audios/bruh.mp3";

const heheheha = new Audio();
heheheha.src = "audios/heheheha.mp3";

const mm = new Audio();
mm.src = 'audios/MUSIC MAN.mp3';

const bonk = new Audio();
bonk.src = 'audios/bonk.mp3';

const fart3 = new Audio();
fart3.src = 'audios/fart3.mp3';

const hwg = new Audio();
hwg.src = 'audios/hwg.mp3';

const omg = new Audio();
omg.src = 'audios/oh mah gahd.mp3';

const bup = new Audio('audios/bup.mp3');

const getout = new Audio('audios/getout.mp3');

const boing = new Audio('audios/boing.mp3');

let volumeslider = document.getElementById('volumeslider');

function setVolume() {
    boom.volume = volumeslider.value;
    emotionaldamage.volume = volumeslider.value;
    bird.volume = volumeslider.value;
    fart.volume = volumeslider.value;
    bababooey.volume = volumeslider.value;
    notif.volume = volumeslider.value;
    bruh.volume = volumeslider.value;
    bruh.volume = volumeslider.value;
    heheheha.volume = volumeslider.value;
    mm.volume = volumeslider.value;
    bonk.volume = volumeslider.value;
    fart3.volume = volumeslider.value;
    hwg.volume = volumeslider.value;
    omg.volume = volumeslider.value;
    bup.volume = volumeslider.value;
}
