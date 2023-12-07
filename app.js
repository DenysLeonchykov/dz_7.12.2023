
let div = document.querySelector('.block2');
const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');
const topBtn = document.querySelector('.top');
const downBtn = document.querySelector('.down');

let left = 200;
let top1 = 100;
const blokAll = 600;



rightBtn.addEventListener('click', () => {
    left+= 10;
    div.style.left = `${left}px`;
    leftBtn.disabled = false;
    if (blokAll - left < 200) {
        rightBtn.disabled = true;
    }
})

leftBtn.addEventListener('click', () => {
    left-= 10;
    div.style.left = `${left}px`;
    rightBtn.disabled = false;
    if (left === 0) {
        leftBtn.disabled = true;
    }
})

topBtn.addEventListener('click', () => {
    top1-= 10
    downBtn.disabled = false;
    div.style.top = `${top1}px`
    if (top1 === 0) {
        topBtn.disabled = true;
    }
})


downBtn.addEventListener('click', () => {
    top1+= 10;
    div.style.top = `${top1}px`
    topBtn.disabled = false;
    if (top1 == 200) {
        downBtn.disabled = true;
    }
})