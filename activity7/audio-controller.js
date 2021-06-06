var currentSong = 0;

// Create the playlist
const playList = [
    "music/astronomia-7secs.mp3",
    "music/fear-of-the-dark-9secs.mp3",
    "music/plug-in-baby-15secs.mp3"
];

setAudioSource();
messageToUser("¡Bienvenido!");

function markPlayedSong(){
    if (document.getElementById("playing")){
        unMarkSong();
    }

    let listItem = document.getElementsByTagName("ol")[0].getElementsByTagName("li");

    listItem[currentSong].id = "playing";

    let i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add("fa-play");
    
    listItem[currentSong].appendChild(i);
}

function unMarkSong(){
    let listItem = document.getElementById("playing");

    listItem.removeChild(listItem.lastChild);
    listItem.removeAttribute("id");
}

// Message to the user
function messageToUser(message) {
    document.getElementById("message-to-user").innerHTML = message;
}

// Listeners to the audio controls
let btnPlay = document.getElementById("btn-play");
btnPlay.addEventListener('click', () => {
    playPauseAudio();
});

let btnNext = document.getElementById("btn-next");
btnNext.addEventListener('click', () => {
    nextAudio();
});

let btnPrev = document.getElementById("btn-prev");
btnPrev.addEventListener('click', () => {
    prevAudio();
});

// If the song ends, start the next
let musicPlayer = document.getElementById("main-audio");
musicPlayer.addEventListener('ended',function() {
    nextAudio();
    playAudio();
});

// Set audio source
function setAudioSource() {
    let audioSource = document.getElementById("audio-source");
    audioSource.setAttribute("src", playList[currentSong]);
    document.getElementById("main-audio").load();
}

// Play or pause audio, depending of the current state
function playPauseAudio() {

    // If the song is paused or is the first reproduction we play it
    if (document.getElementById("main-audio").paused){
        playAudio();

    // If the song is currently playing, we pause it
    } else {
        pauseAudio();
    }
}

// Play audio
function playAudio() {
    document.getElementById("main-audio").play();
    document.getElementById("play-icon").classList.remove('fa-play');
    document.getElementById("play-icon").classList.add('fa-pause');
    messageToUser("Reproduciendo canción.");
    markPlayedSong();
}

// Pause audio
function pauseAudio() {
    document.getElementById("main-audio").pause();
    document.getElementById("play-icon").classList.remove('fa-pause');
    document.getElementById("play-icon").classList.add('fa-play');
    messageToUser("En pausa.");
    unMarkSong();
}

// Play next audio
function nextAudio() {
    currentSong++;

    // If we reach the end of the list, we start again from the first song
    if (currentSong === playList.length){
        currentSong = 0;
    }

    setAudioSource();
    playAudio();
}

// Play previous audio
function prevAudio() {
    currentSong--;

    // We give the posibility to go back to the last song of the list
    if (currentSong < 0) {
        currentSong = playList.length-1;
        setAudioSource();
        playAudio();

    } else {
        setAudioSource();
        playAudio();
    }
}