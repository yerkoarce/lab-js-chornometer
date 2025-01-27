const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime(min, sec, mili) {
  printSeconds(sec[0], sec[1])
  printMinutes(min[0], min[1])
  printMilliseconds(mili[0], mili[1])
}

function printMinutes(dec, uni) {
  minDecElement.innerText = dec
  minUniElement.innerText = uni
}

function printSeconds(dec, uni) {
  secDecElement.innerText = dec
  secUniElement.innerText = uni
}

// ==> BONUS
function printMilliseconds(dec, uni) {
  milDecElement.innerText = dec
  milUniElement.innerText = uni
}

function printSplit() {
  const li = document.createElement('li')
  li.textContent = chronometer.split()
  splitsElement.appendChild(li)
}

function clearSplits() {
  splitsElement.innerHTML = ''
  minDecElement.innerHTML = 0
  minUniElement.innerHTML = 0
  secDecElement.innerHTML = 0
  secUniElement.innerHTML = 0
  milDecElement.innerHTML = 0
  milUniElement.innerHTML = 0
}

function setStopBtn() {
  btnLeftElement.classList = 'btn stop'
  btnLeftElement.innerText = 'STOP'
}

function setSplitBtn() {
  btnRightElement.classList = 'btn split'
  btnRightElement.innerText = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList = 'btn start'
  btnLeftElement.innerText = 'START'
}

function setResetBtn() {
  btnRightElement.classList = 'btn reset'
  btnRightElement.innerText = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.value === 'btn start'){
    setStopBtn()
    setSplitBtn()
    chronometer.start(printTime);
  } else {
    setStartBtn()
    setResetBtn()
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.classList.value === 'btn stop') {
    printSplit()
  } else {
    chronometer.reset(clearSplits)
  }
});