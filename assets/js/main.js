
import app from './firebase.js'

import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

const db = getFirestore(app)

function showConfet(id) {
    const element = document.getElementById(id)
    party.confetti(element)
}

function updateScore(id, br, other){
    const element = document.getElementById(id)
    element.innerText = `${br} x ${other}`
}

// permite ouvir o som no navegador

function throwGalvao() {
    const audio = new Audio('assets/audio/gol.mp3')
    audio.playbackRate = 1.5
    audio.play()
}

function showSticker() {
    const sticker = document.getElementById('sticker-gol')
    sticker.classList.add('show')

    setTimeout(() => {
        sticker.classList.remove('show')
    }, 4000)
}

//ver os snapshots=atualizações, do documento do banco de dados, da collection e pegar o objeto
onSnapshot(doc(db, 'matches', 'br-01'), (doc) => {
    const { br, other } = doc.data()

    updateScore('br-01', br, other)

    if (br >= 0) {
        showConfet('br-01')
        throwGalvao()
        showSticker()
    }
    if (other > 0) {
        showConfet

    }
});

// executa uma função varias vezes
//setInterval(() => {
//    showConfet('br-01')
//}, 5000)


