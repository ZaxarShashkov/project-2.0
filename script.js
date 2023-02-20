let app = document.querySelector("#app");

const container = document.createElement("div");
container.className = "container";
app.appendChild(container);

// Audio 

const menuAudio = document.createElement('audio');
menuAudio.src = './audio/menu_audio.mp3';
menuAudio.preload = 'auto';

// Loading

const load = () => {
  const loading = document.createElement("div");
  loading.className = "loading";
  container.appendChild(loading);

  const loadTitle = document.createElement("p");
  loadTitle.className = "load_title";
  loadTitle.textContent = "doodle jump";
  container.appendChild(loadTitle);

  const copyRight = document.createElement("p");
  copyRight.className = "copy_right";
  copyRight.textContent = "Copyright © 2023";
  container.appendChild(copyRight);

  const goToMenu = () => {
    loading.style.display = "none";

    const p = document.createElement("p");
    p.className = "continue";
    p.textContent = "continue";
    container.appendChild(p);

    p.addEventListener("click", () => {
      let containerChild = container.childNodes;
      let arrChild = [];
      containerChild.forEach((child) => {
        arrChild.push(child);
      });
      arrChild.forEach((child) => {
        child.remove();
      });
      switchToMainPage();
    });
  };
  setTimeout(goToMenu, 2000);
};
load();

// Menu

const createMenu = () => {
  const menuContainer = document.createElement("div");
  menuContainer.className = "menu_container";
  container.appendChild(menuContainer);

  menuAudio.play();

  const doodle = document.createElement("div");
  doodle.className = "doodle_menu";
  doodle.innerHTML = `<svg 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="46px" height="45px">
   <image  x="0px" y="0px" width="46px" height="45px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5wIFDQ0i4p2OMgAADQJJREFUaN61mXuMX8V1xz9n5t77e//27d31o7axwfiBAAXjJDhAVSdFISUJDwla2qpVW1KhSI3yR9oG+khaFaJGpWr/SJVUpU2lVApJWqFI5KGEBsyjciCmxrsGjNc2fnufv9/+HvfemdM/7t314hqM5eVIV/fOzJ2Z7zlz5jxmZMPadbwbiYAqy0G7gLuBDwKbgOKStn3AD4CvAW+c3/Hue5p8+s7m2+rMskB6d7oXGAd+BDwAXHseaIBtwOeBMeARILjYoBf94TJoBPgGcDtAEOBu3FHrbNncF1+xwfu+vqQoEtLtev/aa/P6yl4ru3dPFbznC2Sr8yngrXcaXN4nVbk6l/DqQgH/iV/z/vbbY1Mux0ZRVDsIIcbWEIlAHVG0Hvjo/Df/9c3p737vp0OqOg3cBzx9IVWx/b29FwV+iXQd8DwwuPFK4x7+s5Zs3960YehE1QEJqgqiCAJ4EI9LpxGZiG7cMVr/8Ic+OPvyy8dts9n+feDMlq3xns2b4/cV+Drgp0D/9u228yd/Oh9VKk0xpkwUraNcuo5ScRtB0I/3DZxr4LWLahfVGOem6HT309/fKd9xx61mfHyqe/Jk804xNIZH3PMDA+59AV4Efgxs3L496Hzu850izABKGAwSBEOZlCUEFOdmgBjIJghsP8XiVowtESeHsDYNdu3aFI2Pn26/std/YnbWtE+dDHaPjUWMjUXLquP/CDy4dq2kX/qr2EZRS1QTjEQUClcB0O68imqKSIgxJQLbi2pC6iYRiSgWt6K+S6c7RhSuoVjcTLdbdp/7o5fbR47MllS5LRfOpQHfsiVm85a369rY/ojx8Win9zwThujfPNrUVau8EQRjKljbgw0GMVLA+TnUJzg3iaJY2wfqSNPTpG4aY4oYU8b7FiD01D5OT88nef211tnf+d2/rKnqGWAz0LwkVbn5ljZ33tVkc87A5i0xZ8/aYHw8+r4qQ3ff4/yNO1IrYjKJBoPYYIDADhEGK4jCNVhbw/s21tYQU8D5BqoxSoxqCjhQxWuMMQW8thgYrJUbc7UTY2NvrgES4OlLsuNj+yOeDKtE0TndOXgwesA7tvT1kX7q0+XAGI/3LTwJiicMVmBtX1bnpvHazkEaysVtuGCGVnsPeIuIASwICEqnu592538plz7Ab/7WfT3f/d6Pu6r6IPDIJQHfvz9i//5oaVVRhIcB7vv1sguCVuBcE++7BEGJQrQRa/tJkiOk6TSKQ8RipJxL1iES5JImB54JRbCoJqg6uvHr1Kq769dfP3r6pZeOrwB2Xa7L/4wqw/U6yU03tcIkOcXZsylRuJre+p0k8fp4z569nWbzoHrfAE3xroExBaztp9X+OfPzz+LdHOAQbG51DGKi/BvSdJpWey837hhZwLsI/GrgCbIA6D2RCFeL8BDARz/WCZCT5kc/LPHZB4d4bveH40LhSnY/97w+9MVjxa882koVj5JibB1F8L6NahfnGyCCYEEMQoBIgEiY1UG+Cp5rtm3oLuBdAP4IcBeZx9sH/EXORPECmFfn7XtUGejt9fzKroYYCWk0hj3A3Fwhas7/jGbzYAhQLKlR7WKkjJFiLmHF2B7AYkyVIBzGSAUEjKkSBqNY24tIps3GVLjuuh2rcgxrgxzI7UuAbc2fPwdS4DDngp0N+f+owrZtiT7whzMyMNBLtXIzn7xja3N87DvtDRsPV9qdieoHbrDcfU/Mzo+oUbU4N4tqG2OqKA7nZrC2B2Mqi5YFhSDsJ7ArUFLEnUU1xZpKxlAYHEuStBiQxcjBtmvC1sMPb5SvfvVE+j8vztTCiDSJCVTZkAMGoF6nfcMNEn7k5hl79WYvhWgr1cpNBMEQwyOn6o9+5Yp6nLyFc0q9jrn3vh4Cu0Kcn0OAIFyFYHBulmLhKsSU6XYPkiTHACUMV2FND6oxRor599nF0KBYLCRJkhKIcJsq3HtvM0jd01G9PuAh4O8eCzWwMzo5adN2u9rtqQ+7lasGivW6lpLkJKnzAARBH17nmW3sIe6+jrF1AjtIGIwAQhAMYaSE87MoipBZkTBciTFFkuQEzk0jEhBF66hVdxHYfjrdAyTJ0Sw0cIJ3Dbxv0ttbjxuN+SgQYXu5rOkVGxqRqnLsmBqAntq1abG8L+zpPRFCK7Q2JQwc3pdQXBbhaUK78yqt9s/xbj7bZKaYbUIpEYajeN8hTo4CgmoMoljTi0unaCdHSN3ZjEE7RLGwhUJ0Jc5NkaanSJJTIBZre/HawfsG3W7XALOB9/SvXOk7RqLA+UH/5kGVMJS5Kzf+Qc9c8ykajRf16NF26+zZUkekmqDNcHSlr4yOrio6N0PqJnP9JJdmkrlwPUmSnkCweD+P1y7W1BBTwaVvZvqOI7ADWNtLGK4hCAaYn3+WbvwmqTsFBFjTg/ctnJsiTo4xOztTBQ4GAN1uNNPXd+fIk08enep2XxrctGnD6W9966XuD374fPr66ydWOEcFqCw1LdXqXOO229akd929sRwEY4VETwLgcpsMCukZxBRyJ+NR9eBmUI0RsYhEKD4HNkm32yFJTwM+35wOl07i0km8xiTJcVS1AEwEQPOtt3z95PFbx77x9S8MAhw48MaVBw4s5qzjwIvAxAJm4IZm09/yxBOH+clPwvkvfXmFDo+Yovo2XluAyWJsFNTjNTO/qh1UFREBDVFJcW4GVY9JDiNSzCJHKSJBtlJxcgSRIlE4RBiMEMfaB0zIhrXrnshteGeJ3T4J/BPw71wg685pI/AUsGH9+qD72N//UsH7Tg7S49x0piJ+PpP0ouPKvGPmFT3qU0BRPCIRIoK1A4ThynyMFmG4hihczdTkllP33/+1YeCeAPhj4Cay5LYJ/DXwWM7Iu9EbwH8AXzx0KC2Mj1Vmr732ih7nZukmh0A9gsWaehba2gGsrWFMNbcyTeL4YOY5EVQTrKkiEmFsDdSDesJwNYHtw0iRiYnpVj73RJADuB64n8ztT1wEMMYshrsPAdc7x8cnJtb7nTs/RrvzCqk7jJc2xhQRUwIpYkwBkQKCwdNGdQ5rFCs1EINqkqtJlK2EtlFtkqYJ3s0gkeHo0bS6APyiicR7oMeB3zbWNKyVRhhoYXiUgrU+AJOiosaoEfEGVAQEUaMq3nuTqhqPqEBmhjsdZW5WEcBYAgFRJU1TiefnKXlPBHx22c5VbKFaSzC1JCxxZLZAsuCgrMGrUipXSE1EO3ZEgaWbOnxmIQiMQVGcU0wyT7UoOK90EpdlpGknLJu0JDJLZrFoLgfw1QDTV92OGVrHhhU1vPfMdx1eldX9ZSqFgIOnGohXrhmtUyuG7D06TaOdMtOOaTlPMbTUSyGt2HG8ncUsiGAEQmuIjTDw3D/Qmm/+N/D4cgDvhWyexHleOzGHCAz3FKkVQ9441aAUWY5Nt0md5+jUPIXQ4j1EVjAiiAidxNNfNazuL3B6zhBZw3QrJk49ItCJU1rzTcj24bIcwQ0AVA48hS9UwYT4QplphSkMWqrRRiioUuBc4h2GIbWeXsphQCtOaScO2wppGUtvpc5cOyF0goRl0sQSumRhvhTeQ5b/HuiSDuiGR0cBcF6JAkOz0WRubu5ShjgAXHe5Eu9d+Pi3b/4LUanK6MgIAN456rUylUoVMRYThJnHXOB2wYMuIeccJ44fI00STp46zczMDGfPnOHEiZPsf3Ufz/zsGYCngc6yAf/QzptzIBkY9Q4xJi/rYv0CyQWOyKwxrFq9BlXH2nXrEGMX277z7W8vAF82HQfgxRdeyLP0c1QuV+jr71ssDw0NUShEixbjHOWMSXYMupCuLbS5JObwocXI443lAL6Yk95/329cUscgCBgeHl4EpwpewZrMyiiZOjXm5mg0GqxcOfr2/pcJfDGeCcMI7V2FDKwlrgwRhzU0LOKTGOIWVpRiOo/6lGR+jjiNmUja+NzMGJHsO4+IjRGsEbQ2gNoZjh8/sjBVdTmAT5AFZtUkieHMIThzCAEKgA1CwkqdoNxD04f4sMDA4BDNYoQvDNJNHWlUyxgPDN4WSQgyk+lifLdFaA0160gPCjJ1GGBwOYAD9JHd4ewkC9R2kJ0MPO3SZLWbnexldnIVMCLA1JLLEQuUlgxUyJ/zyXH+1l4e4Cnwi/whB/63ZMfOC1QEpvP3aL5KC3cjvwd8HfivJWNsJLvZ2Ep2yL4X2AP8J/DCcgG/EE2cV+6QWYNtZEnKUtqTv58iuy5coHXAoRz0redPsNzXhYP5u3mBtsmLMDlygfp3TGYuV+JXkyUTq/Pypnf5t/cd6mfy97oLtB0Ahi/U6XKBB8Cvck7SkKnCgqQGgc/k/226tKEXmbqFzAS+bRUvF/g+YIhM4gH/X7dHgC8vKS9tfzzvt8DkTP6+N++zcK6Zkm3UZ5cT+AK90w3wPuCXcwZ+QXbUsZSJW3Lg/0yWoEMWRL2ag/4+mXUaP3/g/wOYKg0f0/pCgAAAAABJRU5ErkJggg==" />
   </svg>`;
  menuContainer.appendChild(doodle);

  let platformYBlue = 35;
  let platformXBlue = 600;
  const menuPlatform = document.createElement("div");
  menuPlatform.className = "menu_platform";
  menuContainer.appendChild(menuPlatform);

  for (let i = 0; i <= 4; i++) {
    const platform = document.createElement("div");
    menuPlatform.appendChild(platform);
    platform.innerHTML = `<svg 
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="57px" height="15px">
       <image  x="0px" y="0px" width="57px" height="15px"  xlink:href="data:img/png;base64,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" />
       </svg>`;
    platform.className = "platform";
    platform.style.transform = `translate(${platformYBlue}px,${platformXBlue}px)`;
    platformYBlue += 15;
  }

  const monster = document.createElement("div");
  monster.className = "monster";
  menuContainer.appendChild(monster);

  const hole = document.createElement("div");
  hole.className = "hole";
  menuContainer.appendChild(hole);

  const ufo = document.createElement("div");
  ufo.className = "ufo";
  menuContainer.appendChild(ufo);

  const p = document.createElement("p");
  p.className = "avoid";
  p.textContent = "Avoid";
  menuContainer.appendChild(p);

  const title = document.createElement("h1");
  title.className = "title";
  title.textContent = "Doodle jump";
  menuContainer.append(title);

  const play = document.createElement("div");
  const tabToPlay = document.createElement("p");
  play.className = "play";
  tabToPlay.textContent = "tap to play";
  play.appendChild(tabToPlay);
  menuContainer.appendChild(play);

  const canvas = document.createElement("canvas");
  menuContainer.appendChild(canvas);
  canvas.className = "canvas";
  canvas.style.width = 200 + "px";
  canvas.style.height = 200 + "px";

  const context = canvas.getContext("2d");

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

  play.addEventListener("click", () => {
    switchToGamePage();
    let childrenMenu = container.childNodes;
    let arrChild = [];
    childrenMenu.forEach((child) => {
      arrChild.push(child);
    });
    arrChild.forEach((child) => {
      child.remove();
    });
  });
};

// Game

const doodle = document.createElement("div");

let count = 0;
const score = document.createElement("div");

let intervalScore;

let isGameOver = false;

// Jumping
let isJumping = true;
let jumpUp;
let jumpDown;

// Platforms
const platGreenCount = 12;
const platBlueCount = 4;
let platforms = [];
const color = "green";

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
  doodle.classList.add("doodle");
  container.appendChild(doodle);
  doodle.style.left = doodlePosLeft + "px";
  doodle.style.bottom = doodlePosBot + "px";
};

// Create and add platforms

const createPlatGreen = () => {
  for (let i = 0; i < platGreenCount; i++) {
    // Расстояние между платформами
    let platformDist = 650 / platGreenCount;
    // Расстояние от начал до первой платформы
    let newPlatformBot = 25 + i * platformDist;
    // instance classa Platform
    let newPlatform = new Platform(newPlatformBot, color, svg);
    platforms.push(newPlatform);
  }
};

// Move platforms

const movePlatforms = () => {
  if (doodlePosBot > 100) {
    platforms.forEach((platform) => {
      platform.bot -= 3.5;
      let visual = platform.visual;
      visual.style.bottom = platform.bot + "px";
      if (platform.bot < 10) {
        let firstPlatform = platforms[0].visual;
        firstPlatform.classList.add("remove");
        platforms.shift();
        let newPlatform = new Platform(600, color, svg);
        platforms.push(newPlatform);
      }
    });
  }
  movePlat = window.requestAnimationFrame(movePlatforms);
};

// JumpUp

const jump = () => {
  isJumping = true;
  window.cancelAnimationFrame(jumpDown);
  doodlePosBot += 3.5;
  doodle.style.bottom = doodlePosBot + "px";
  jumpUp = window.requestAnimationFrame(jump);
  if (doodlePosBot > 200) {
    window.requestAnimationFrame(fall);
  }
};

const fall = () => {
  window.cancelAnimationFrame(jumpUp);
  isJumping = false;
  doodlePosBot -= 3.5;
  doodle.style.bottom = doodlePosBot + "px";
  jumpDown = window.requestAnimationFrame(fall);
  if (doodlePosBot <= 0) {
    gameOver();
  }
  platforms.forEach((platform) => {
    if (
      doodlePosBot >= platform.bot &&
      doodlePosBot <= platform.bot + 15 &&
      doodlePosLeft + 50 >= platform.left &&
      doodlePosLeft <= platform.left + 50 &&
      !isJumping
    ) {
      doodle.classList.remove("doodle");
      doodle.classList.add("doodle_odskok");
      jump();
      setTimeout(() => {
        doodle.classList.remove("doodle_odskok");
        doodle.classList.add("doodle");
      }, 60);
    }
  });
};

// Controller

const controller = (e) => {
  switch (e.key) {
    case "ArrowLeft":
      movingLeft = window.requestAnimationFrame(moveLeft);
      break;
    case "ArrowRight":
      movingRight = window.requestAnimationFrame(moveRight);
      break;
    case "ArrowUp":
      shoot();
      break;
  }
};

const createControllerMobile = () => {
  const leftButton = document.createElement("button");
  leftButton.className = "btn_left";
  const rightButton = document.createElement("button");
  rightButton.className = "btn_right";
  container.appendChild(leftButton);
  container.appendChild(rightButton);
  leftButton.addEventListener("click", moveLeft);
  rightButton.addEventListener("click", moveRight);
};

const moveLeft = () => {
  doodle.classList.remove("doodle_right");
  doodle.classList.add("doodle");
  if (isGoingRight) {
    window.cancelAnimationFrame(movingRight);
    isGoingRight = false;
  }
  isGoingLeft = true;
  if (doodlePosLeft >= 0) {
    doodlePosLeft -= 3;
    doodle.style.left = doodlePosLeft + "px";
    movingLeft = window.requestAnimationFrame(moveLeft);
  }
};

const moveRight = () => {
  doodle.classList.remove("doodle");
  doodle.classList.add("doodle_right");
  if (isGoingLeft) {
    window.cancelAnimationFrame(movingLeft);
    isGoingLeft = false;
  }
  isGoingRight = true;
  if (doodlePosLeft <= 343) {
    doodlePosLeft += 3;
    doodle.style.left = doodlePosLeft + "px";
    movingRight = window.requestAnimationFrame(moveRight);
  }
};

const setScore = () => {
  container.appendChild(score);
  score.classList.add("score");
  count += Math.floor(Math.random() * 10);
  score.innerHTML = count;
};

const createBestScore = () => {
  const bestScore = document.createElement("div");
  bestScore.className = "best_score";
  container.appendChild(bestScore);
  bestScore.innerHTML = `Ваш счет : ${count}`;
};

// Game Over

const gameOver = () => {
  console.log("Game Over...");
  isGameOver = true;
  window.cancelAnimationFrame(jumpUp);
  window.cancelAnimationFrame(jumpDown);
  clearInterval(intervalScore);
  createBestScore();
  doodle.style.bottom = doodlePosBot + 10 + "px";
  restart();
};

// Restart

const restart = () => {
  const restartBtn = document.createElement("button");
  restartBtn.className = "restart";
  container.appendChild(restartBtn);
  restartBtn.addEventListener("click", () => {
    isGameOver = false;
    count = 0;
    window.cancelAnimationFrame(jumpUp);
    window.cancelAnimationFrame(jumpDown);
    window.cancelAnimationFrame(movePlat);
    restartBtn.remove();
    let childrenMenu = container.childNodes;
    let arrChild = [];
    childrenMenu.forEach((child) => {
      arrChild.push(child);
    });
    arrChild.forEach((child) => {
      child.remove();
    });

    platforms = [];
    start();
  });
};

// Game audio

const gameAudio = document.createElement('audio');
gameAudio.src = './audio/game_audio.mp3';
gameAudio.preload = 'auto';

// start

const start = () => {
  if (!isGameOver) {
    addDoodle();
    createControllerMobile();
    intervalScore = setInterval(setScore, 1000);
    createPlatGreen();
    window.requestAnimationFrame(movePlatforms);
    document.addEventListener("keydown", controller);
    jump();
    gameAudio.play();
    menuAudio.pause();
  }
};

//  SPA

("use strict");

window.onhashchange = switchToStateFromURLHash;

var SPAState = {};

function switchToStateFromURLHash() {
  var URLHash = window.location.hash;

  var stateStr = URLHash.substr(1);
  let container = document.querySelector(".container");

  switch (stateStr) {
    case "Main":
      container += createMenu();
      break;
    case "Game":
      container += start();
      break;
    case "Loader":
      break;
  }
}

function switchToState(newState) {
  var stateStr = newState.pagename;
  location.hash = stateStr;
}

function switchToLoadPage() {
  switchToState({
    pagename: "Loader",
  });
}

function switchToMainPage() {
  switchToState({
    pagename: "Main",
  });
}

function switchToGamePage() {
  switchToState({
    pagename: "Game",
  });
}

switchToStateFromURLHash();
