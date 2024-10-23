import { playList } from './Playlist.js';

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const album = document.getElementById('album');
const artist = document.getElementById('artist');
const playerSong = document.getElementById('playerSong');
const next = document.getElementById('next');
const former = document.getElementById('former');



let currentSongIndex = 0;

// Cargar la canción inicial
function loadSong(index) {
    audio.src = playList[index].song; // Cambiar 'src' por 'song'
    album.src = playList[index].img;
    artist.textContent = playList[index].artist;
    playerSong.textContent = playList[index].title;
    
    document.body.style.backgroundImage = `url(${playList[index].img})`;
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundPosition = 'center'; 


}

// Cargar la primera canción
loadSong(currentSongIndex);

// Eventos de control de audio
play.addEventListener('click', () => {
    audio.play();
});
pause.addEventListener('click', () => {
    audio.pause();
});
rewind.addEventListener('click', () => {
    audio.currentTime -= 10;
});
forward.addEventListener('click', () => {
    audio.currentTime += 10;
});
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

// Siguiente canción
next.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playList.length;
    loadSong(currentSongIndex);
    audio.play();
});

// Canción anterior
former.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length;
    loadSong(currentSongIndex);
    audio.play();
});
