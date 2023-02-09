const app = document.querySelector('#app');

const container = document.createElement('div');
container.className = 'container';
app.appendChild(container);

// Loading

const load = () => {
    const loading = document.createElement('div');
    loading.className = 'loading';
    container.appendChild(loading);


    const loadTitle = document.createElement('p');
    loadTitle.className = 'load_title';
    loadTitle.textContent = 'doodle jump';
    container.appendChild(loadTitle);

    const copyRight = document.createElement('p');
    copyRight.className = 'copy_right';
    copyRight.textContent = 'Copyright © 2023';
    container.appendChild(copyRight);

    const goToMenu = () => {
        loading.style.display = 'none';

        const p = document.createElement('p')
        p.className = 'continue';
        p.textContent = 'continue';
        container.appendChild(p);


        p.addEventListener('click', () => {
            let containerChild = container.childNodes;
            let arrChild = [];
            containerChild.forEach(child => {
                arrChild.push(child);
            })
            arrChild.forEach(child => {
                child.remove()
            })
            switchToMainPage();
        })
    }
    setTimeout(goToMenu, 2000);

}



// Menu

const createMenu = () => {

    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu_container';
    container.appendChild(menuContainer);

    const doodle = document.createElement('div');
    doodle.className = 'doodle_menu';
    doodle.innerHTML = `<svg 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="46px" height="45px">
   <image  x="0px" y="0px" width="46px" height="45px"  xlink:href="data:img/png;base64,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" />
   </svg>`;
    menuContainer.appendChild(doodle);


    let platformYBlue = 35;
    let platformXBlue = 600;
    const menuPlatform = document.createElement('div');
    menuPlatform.className = 'menu_platform';
    menuContainer.appendChild(menuPlatform);

    for (let i = 0; i <= 4; i++) {
        const platform = document.createElement('div');
        menuPlatform.appendChild(platform);
        platform.innerHTML = `<svg 
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="57px" height="15px">
       <image  x="0px" y="0px" width="57px" height="15px"  xlink:href="data:img/png;base64,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" />
       </svg>`;
        platform.className = 'platform';
        platform.style.transform = `translate(${platformYBlue}px,${platformXBlue}px)`
        platformYBlue += 15;
    }

    const monster = document.createElement('div');
    monster.className = 'monster';
    menuContainer.appendChild(monster);

    const hole = document.createElement('div');
    hole.className = 'hole';
    menuContainer.appendChild(hole);

    const ufo = document.createElement('div');
    ufo.className = 'ufo';
    menuContainer.appendChild(ufo);

    const p = document.createElement('p');
    p.className = 'avoid';
    p.textContent = 'Avoid';
    menuContainer.appendChild(p);

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = 'Doodle jump'
    menuContainer.append(title);

    const play = document.createElement('div');
    const tabToPlay = document.createElement('p');
    play.className = 'play';
    tabToPlay.textContent = 'tap to play';
    play.appendChild(tabToPlay);
    menuContainer.appendChild(play);


    const canvas = document.createElement('canvas');
    menuContainer.appendChild(canvas);
    canvas.className = 'canvas';
    canvas.style.width = 200 + 'px';
    canvas.style.height = 200 + 'px';

    const context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(200, 50);
    context.lineTo(0, 20);
    context.moveTo(0, 20);
    context.lineTo(50, 20);
    context.moveTo(0, 20);
    context.lineTo(50, 35);

    context.moveTo(200, 50);
    context.lineTo(150, 100);
    context.moveTo(150, 100);
    context.lineTo(190, 90);
    context.moveTo(150, 100);
    context.lineTo(150, 75);

    context.moveTo(200, 50);
    context.lineTo(230, 10);
    context.moveTo(230, 10);
    context.lineTo(200, 20);
    context.moveTo(230, 10);
    context.lineTo(240, 25);
    context.stroke();


    play.addEventListener('click', () => {
        switchToGamePage();
        let childrenMenu = container.childNodes;
        let arrChild = [];
        childrenMenu.forEach(child => {
            arrChild.push(child);

        });
        arrChild.forEach(child => {
            child.remove();
        })
    })
}


// Game

// Create character

const doodle = document.createElement('div');

let isGameOver = false;

// Jumping
let isJumping = true;
let jumpUp;
let jumpDown;

// Platforms
const platGreenCount = 12;
const platBlueCount = 4;
const platforms = [];
const color = 'green';

// Movement
let isGoingLeft = false;
let isGoingRight = false;
let movingLeft;
let movingRight;
let movePlatform;

// Position character 
let doodlePosLeft = 250;
let doodlePosBot = 20;

// Position platforms
let platformPosLeft = 250;
let platformPosBot = 130;
const svg = `<svg 
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="57px" height="15px">
       <image  x="0px" y="0px" width="57px" height="15px"  xlink:href="data:img/png;base64,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" />
       </svg>`;

// Add Character
const addDoodle = () => {
    let svg = `<svg 
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="57px" height="49px">
       <image  x="0px" y="0px" width="57px" height="49px"  xlink:href="data:img/png;base64,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" />
       <image  x="0px" y="0px" width="57px" height="45px"  xlink:href="data:img/png;base64,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" />
       </svg>`
    doodle.innerHTML = svg;
    doodle.classList.add('doodle');
    container.appendChild(doodle);
    doodle.style.left = doodlePosLeft + 'px';
    doodle.style.bottom = doodlePosBot + 'px';
}

// Create and add platforms (green)

const createPlatGreen = () => {
    for (let i = 0; i < platGreenCount; i++) {
        // Расстояние между платформами
        let platformDist = 650 / platGreenCount;
        // Расстояние от начал до первой платформы
        let newPlatformBot = 25 + i * platformDist;
        // instance classa Platform
        let newPlatform = new Platform(newPlatformBot, color, svg)
        platforms.push(newPlatform);
        console.log(platforms);
    }
}


// Move platforms || Ready!!!

const movePlatforms = () => {
    if (doodlePosBot > 75) {
        platforms.forEach(platform => {
            platform.bot -= 3.5;
            let visual = platform.visual;
            visual.style.bottom = platform.bot + 'px';
            if (platform.bot < 10) {
                let firstPlatform = platforms[0].visual;
                firstPlatform.classList.add('remove');
                platforms.shift();
                console.log(platforms);
                let newPlatform = new Platform(600, color, svg);
                platforms.push(newPlatform);
            }
        })
    }
    window.requestAnimationFrame(movePlatforms)
}


// JumpUp || Ready !!!

const jump = () => {
    isJumping = true;
    window.cancelAnimationFrame(jumpDown);
    doodlePosBot += 3.5;
    doodle.style.bottom = doodlePosBot + 'px';
    jumpUp = window.requestAnimationFrame(jump);
    if (doodlePosBot > 200) {
        window.requestAnimationFrame(fall);
    }
};

const fall = () => {
    window.cancelAnimationFrame(jumpUp);
    isJumping = false;
    doodlePosBot -= 3.5;
    doodle.style.bottom = doodlePosBot + 'px';
    jumpDown = window.requestAnimationFrame(fall);
    if (doodlePosBot <= 0) {
        gameOver();
    }
    platforms.forEach(platform => {
        if ((doodlePosBot >= platform.bot) &&
            (doodlePosBot <= platform.bot + 15) &&
            ((doodlePosLeft + 50) >= platform.left) &&
            (doodlePosLeft <= (platform.left + 50)) &&
            !isJumping) {
            jump();
        }
    })
}


// Controller || Ready!!!

const controller = (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            console.log(e.key)
            movingLeft = window.requestAnimationFrame(moveLeft);
            break;
        case 'ArrowRight':
            console.log(e.key)
            movingRight = window.requestAnimationFrame(moveRight);
            break;
        case 'ArrowUp':
            console.log(e.key)
            shoot();
            break;
    }
}

const moveLeft = () => {
    if (isGoingRight) {
        window.cancelAnimationFrame(movingRight);
        isGoingRight = false;
    }
    isGoingLeft = true;
    if (doodlePosLeft >= 0) {
        doodlePosLeft -= 3;
        doodle.style.left = doodlePosLeft + 'px';
        movingLeft = window.requestAnimationFrame(moveLeft)
    }
}

const moveRight = () => {
    if (isGoingLeft) {
        window.cancelAnimationFrame(movingLeft);
        isGoingLeft = false;
    }
    isGoingRight = true;
    if (doodlePosLeft <= 343) {
        doodlePosLeft += 3;
        doodle.style.left = doodlePosLeft + 'px';
        movingRight = window.requestAnimationFrame(moveRight);
    }
}

// Game Over
const gameOver = () => {
    console.log('Game Over...');
    isGameOver = true;
    window.cancelAnimationFrame(jumpUp);
    window.cancelAnimationFrame(jumpDown);
    doodle.style.bottom = doodlePosBot + 10 + 'px';
    const restart = document.createElement('button');
    restart.className = 'restart';
    container.appendChild(restart);
    restart.addEventListener('click', );
}

// start

const start = () => {
    if (!isGameOver) {
        addDoodle();
        createPlatGreen();
        window.requestAnimationFrame(movePlatforms);
        document.addEventListener('keydown', controller);
        jump()
    }
}


//  SPA

"use strict";

window.onhashchange = switchToStateFromURLHash;

var SPAState = {};


function switchToStateFromURLHash() {
    var URLHash = window.location.hash;

    var stateStr = URLHash.substr(1);
    let container = document.querySelector('.container');


    switch (stateStr) {
        case 'Main':
            container += createMenu();
            break;
        case 'Game':
            container += start();
            break;
        case 'Loader':
            container += load();
            break;
    }
}


function switchToState(newState) {
    var stateStr = newState.pagename;
    location.hash = stateStr;
}

function switchToLoadPage() {
    switchToState({
        pagename: 'Loader'
    });
}

function switchToMainPage() {
    switchToState({
        pagename: 'Main'
    });
}

function switchToGamePage() {
    switchToState({
        pagename: 'Game'
    });
}

switchToStateFromURLHash();
