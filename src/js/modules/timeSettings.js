export function settings() { 
    let timerTime = getTimerFromLocalStorage() || 45;
    let minBreak =  getShortBreakFromLocalStorage() || 5;
    let maxBreak =  getLongBreakFromLocalStorage() || 15;
    let timer =      document.querySelector('#timer');
    let shortBreak = document.querySelector('#shortBreak');
    let longBreak =  document.querySelector('#longBreak');
    
    const minutes = document.querySelector('.timer-minutes');
    const seconds = document.querySelector('.timer-seconds');
    // Tab buttons
    const timerTab = document.querySelector('#timerTab');
    const shortBreakTab = document.querySelector('#shortBreakTab');
    const longBreakTab = document.querySelector('#longBreakTab');
    // Timer button inc
    const timerInc = document.querySelector('#timerInc');
    const shortBreakInc = document.querySelector('#shortBreakInc');
    const longBreakInc = document.querySelector('#longBreakInc');
    // Timer button dec
    const timerDec = document.querySelector('#timerDec');
    const shortBreakDec = document.querySelector('#shortBreakDec');
    const longBreakDec = document.querySelector('#longBreakDec');

    // Display current timer bar
    timerTab.addEventListener('click', () => displayCurrentTimer(timerTab, timerTime));
    shortBreakTab.addEventListener('click', () => displayCurrentTimer(shortBreakTab, minBreak));
    longBreakTab.addEventListener('click', () => displayCurrentTimer(longBreakTab, maxBreak));

    // Increase or decrease timer
    timerInc.addEventListener('click', () => changeTimer(timer, timerInc));
    timerDec.addEventListener('click', () => changeTimer(timer, timerDec));
    shortBreakInc.addEventListener('click', () => changeTimer(shortBreak, shortBreakInc));
    shortBreakDec.addEventListener('click', () => changeTimer(shortBreak, shortBreakDec));
    longBreakInc.addEventListener('click', () => changeTimer(longBreak, longBreakInc));
    longBreakDec.addEventListener('click', () => changeTimer(longBreak, longBreakDec));

    function displayCurrentTimer(currentTab, timer) {
        if (currentTab) {
          timer < 10 ? minutes.innerHTML = `0${timer}` : minutes.innerHTML = timer;
          seconds.innerHTML = '00';
        }
    }
    displayCurrentTimer(timerTab, timerTime)

    function changeTimer (typeTimer, math) {
        if (typeTimer === timer) {
          math === timerInc ? timerTime++ : timerTime--;
          localStorage.setItem('timer', timerTime);
        } 
        else if (typeTimer === shortBreak) {
          math === shortBreakInc ? minBreak++ : minBreak--;
          localStorage.setItem('shortBreak', minBreak);
        } 
        else {
          math === longBreakInc ? maxBreak++ : maxBreak--;
          localStorage.setItem('longBreak', maxBreak);
        }
    }

    function getTimerFromLocalStorage() {
        return localStorage.getItem('timer')
    }
    function getShortBreakFromLocalStorage() {
        return localStorage.getItem('shortBreak')
    }
    function getLongBreakFromLocalStorage() {
        return localStorage.getItem('longBreak')
    }

    timer.innerHTML = timerTime;
    shortBreak.innerHTML = minBreak;
    longBreak.innerHTML = maxBreak;
} 