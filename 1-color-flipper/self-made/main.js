window.onload = function () {
  connectFunctions();
}

function connectFunctions() {
  document.querySelector('.flipper__button').addEventListener('click', changeColor);
  [...document.querySelectorAll('.header__menu > div')].map(el => el.addEventListener('click', changeMode));
}

let changeColorMode = 'simple';

function changeColor() {
  if (changeColorMode === 'simple') {
    let colors = ['green', 'blue', 'yellow', 'orange', 'red', 'black', 'gainsboro', 'cyan'];
    document.querySelector('.flipper__body').style.background = colors[Math.floor(Math.random() * colors.length)];
  } else {
    let colorA = Math.floor(Math.random() * 255).toString(16);
    let colorB = Math.floor(Math.random() * 255).toString(16);
    let colorC = Math.floor(Math.random() * 255).toString(16);
    let randomColor = '#' + colorA + colorB + colorC;
    document.querySelector('.flipper__body').style.background = randomColor;
    document.querySelector('.flipper__color').innerText = randomColor;
    let colorLightness =
      parseInt(colorA, 16) +
      parseInt(colorB, 16) +
      parseInt(colorC, 16);
    if (colorLightness > 500) {
      document.querySelector('.flipper__body').style.color = 'black';
    } else {
      document.querySelector('.flipper__body').style.color = 'white';
    }
  }
}

function changeMode() {
  if (!this.classList.contains('active')) {
    console.log('1');
    [...document.querySelectorAll('.header__menu > div')].map(el => el.classList.remove('active'));
    this.classList.add('active');
    if (document.querySelectorAll('.header__menu > div')[0].classList.contains('active')) {
      changeColorMode = 'simple';
    } else {
      changeColorMode = 'hex';
    }
    changeColor(changeColorMode);
  }
}