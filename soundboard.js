const boom = new Audio();
boom.src = 'audios/boom.mp3';
boom.className = 'audio'

const emotionaldamage = new Audio();
emotionaldamage.src = "audios/emotionaldamage.mp3"


const bird = new Audio();
bird.src = "audios/bird.mp3";

const fart = new Audio();
fart.src = "audios/fart.mp3";
fart.className = 'audio'

const bababooey = new Audio();
bababooey.src = "audios/bababooey.mp3";
bababooey.className = 'audio'

const notif = new Audio();
notif.src = "audios/notif.mp3";

const bruh = new Audio();
bruh.src = "audios/bruh.mp3";
bruh.className = 'audio'

const heheheha = new Audio();
heheheha.src = "audios/heheheha.mp3";

const mm = new Audio();
mm.src = 'audios/MUSIC MAN.mp3';

const bonk = new Audio();
bonk.src = 'audios/bonk.mp3';
bonk.className = 'audio'

const fart3 = new Audio();
fart3.src = 'audios/fart3.mp3';
fart3.className = 'audio'

const hwg = new Audio();
hwg.src = 'audios/hwg.mp3';

const omg = new Audio();
omg.src = 'audios/oh mah gahd.mp3';
omg.className = 'audio'

const bup = new Audio('audios/bup.mp3');
bup.className = 'audio'

const getout = new Audio('audios/getout.mp3');
getout.className = 'audio'

const boing = new Audio('audios/boing.mp3');
boing.className = 'audio'

let audiobutton = document.getElementsByClassName('audio');

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
    getout.volume = volumeslider.value;
    boing.volume = volumeslider.value;
}
