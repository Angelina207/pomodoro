export function settings() { 
    let timerTime  = getTimerFromLocalStorage() || 45;
    let minBreak   = getShortBreakFromLocalStorage() || 5;
    let maxBreak   = getLongBreakFromLocalStorage() || 15;
    let timer      = document.querySelector('#timer');
    let shortBreak = document.querySelector('#shortBreak');
    let longBreak  = document.querySelector('#longBreak');

    let minutes = document.querySelector('.timer-minutes');
    let seconds = document.querySelector('.timer-seconds');
    // Tab buttons
    const timerTab      = document.querySelector('#timerTab');
    const shortBreakTab = document.querySelector('#shortBreakTab');
    const longBreakTab  = document.querySelector('#longBreakTab');
    // Timer button inc
    const timerInc      = document.querySelector('#timerInc');
    const shortBreakInc = document.querySelector('#shortBreakInc');
    const longBreakInc  = document.querySelector('#longBreakInc');
    // Timer button dec
    const timerDec      = document.querySelector('#timerDec');
    const shortBreakDec = document.querySelector('#shortBreakDec');
    const longBreakDec  = document.querySelector('#longBreakDec');

    // Display current timer bar
    timerTab.addEventListener('click', () => displayCurrentTimer(timerTab, timerTime));
    shortBreakTab.addEventListener('click', () => displayCurrentTimer(shortBreakTab, minBreak));
    longBreakTab.addEventListener('click', () => displayCurrentTimer(longBreakTab, maxBreak));
    // Display time in settings
    timer.innerHTML = timerTime;
    shortBreak.innerHTML = minBreak;
    longBreak.innerHTML = maxBreak;

    function displayCurrentTimer(currentTab, timer) {
        if (currentTab) {
            timer < 10 ? minutes.innerHTML = `0${timer}` : minutes.innerHTML = timer;
            seconds.innerHTML = '00';
        }
    }
    displayCurrentTimer(timerTab, timerTime)

    function inreaseTimer (typeTimer, inc) {
        if (typeTimer === timer) {
            inc === timerInc && timerTime < 60 ? timerTime++ : timerTime = 0;
            localStorage.setItem('timer', timerTime);          
        } 
        else if (typeTimer === shortBreak) {
            inc === shortBreakInc && minBreak < 60 ? minBreak++ : minBreak = 0;
            localStorage.setItem('shortBreak', minBreak);
        } 
        else {
            inc === longBreakInc && maxBreak < 60 ? maxBreak++ : maxBreak = 0;
            localStorage.setItem('longBreak', maxBreak);
        }
    }

    function decreaseTimer (typeTimer, dec) {
        if (typeTimer === timer) {
            dec === timerDec && timerTime > 0 ? timerTime-- : timerTime = 60;
            localStorage.setItem('timer', timerTime); 
        } 
        else if (typeTimer === shortBreak) {
            dec === shortBreakDec && minBreak > 0 ? minBreak-- : minBreak = 60;
            localStorage.setItem('shortBreak', minBreak);
        } 
        else {
            dec === longBreakDec && maxBreak > 0 ? maxBreak-- : maxBreak = 60;
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

      // Increase or decrease timer
    timerInc.addEventListener('click', () => {
        inreaseTimer(timer, timerInc)
        timer.innerHTML = timerTime;
    })
    timerDec.addEventListener('click', () => {
        decreaseTimer(timer, timerDec)
        timer.innerHTML = timerTime;
    })
    shortBreakInc.addEventListener('click', () => {
        inreaseTimer(shortBreak, shortBreakInc)
        shortBreak.innerHTML = minBreak;
    })
    shortBreakDec.addEventListener('click', () => {
        decreaseTimer(shortBreak, shortBreakDec)
        shortBreak.innerHTML = minBreak;
    })
    longBreakInc.addEventListener('click', () => {
        inreaseTimer(longBreak, longBreakInc)
        longBreak.innerHTML = maxBreak;
    })
    longBreakDec.addEventListener('click', () => {
        decreaseTimer(longBreak, longBreakDec)
        longBreak.innerHTML = maxBreak;
    })
} 