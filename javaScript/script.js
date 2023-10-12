let score_val = document.querySelector('.score_val');
let score_title = document.querySelector('.score_title');
let frames = 0;
let die = 0;

const knight = document.querySelector('.knight')
const castle = document.querySelector('.castle')
const floor1 = document.querySelector('.floor')
const floor2 = document.querySelector('.floor2')
const sound_die = document.querySelector('.death')
const pointing = document.querySelector('.point')
const jumping = document.querySelector('.jump')

const jump = () => {
    if (die != 1) {
        
        knight.classList.add('jump')
        jumping.play();
        

        setTimeout(() => {

            knight.classList.remove('jump')

        }, 800)
    }
}

document.addEventListener('keydown', jump);

score_title.innerHTML = 'Pontos: ';
score_val.innerHTML = '0';

const loop = setInterval(() => {

    let intervaloDeFrames = 10;
    let passouOIntervalo = frames % intervaloDeFrames === 0;

    const floor1Position = +window.getComputedStyle(floor1).right.replace('px', '');
    const floor2Position = +window.getComputedStyle(floor2).right.replace('px', '');

    const castlePosition = castle.offsetLeft;
    const knightPosition = +window.getComputedStyle(knight).bottom.replace('px', '');

    if (castlePosition <= 220 && castlePosition > 0 && knightPosition < 130) {

        castle.style.animation = 'none';
        castle.style.left = `${castlePosition}px`;

        knight.style.animation = 'none';
        knight.style.bottom = `${knightPosition}px`;

        knight.src = 'images/Death.png';
        knight.style.width = '270px';
        knight.style.marginLeft = '-100px';
        knight.style.marginBottom = '-25px';
        knight.style.bottom = '0';

        floor1.style.animation = 'none';
        floor1.style.right = `${floor1Position}px`;

        floor2.style.animation = 'none';
        floor2.style.right = `${floor2Position}px`;

        sound_die.play();

        die = 1;
        clearInterval(loop);
    }
    if (passouOIntervalo) {
        score_val.innerHTML = + score_val.innerHTML + 1;
    }
    if (+score_val.innerHTML % 100 === 0) {
        pointing.play();
    }
    frames = frames + 1;
}, 10)
