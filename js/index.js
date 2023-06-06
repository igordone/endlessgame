const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover_text= document.querySelector('.game-over-text');
const points = document.querySelector('.points');
let count = 0;
const retry_btn = document.querySelector('.retry');

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        gameOver();
        retry();
        clearInterval(loop);
    }

    score();

} , 10);

const score = () => {
    count++;
    points.innerHTML = `Score  : ${count}`;
}

const jump = (e) => {
    if(e.keyCode === 32 || e.key === 'ArrowUp') { //32 = spacebar
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

function gameOver(){
    mario.src = './img/game-over.png';
    mario.style.width = '0px';
    mario.style.marginLeft = '50px';
    gameover_text.classList.add('show');
    mario.style.animation = 'game-over 1s';
}

function retry(){
    retry_btn.classList.add('show');

    retry_btn.addEventListener('click', () => {
        location.reload();
    });
}

document.addEventListener('keydown', jump);