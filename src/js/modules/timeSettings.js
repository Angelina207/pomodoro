export function settings() { 
    // Timer config    
    let degree        = 360;
    let progressStart = 0;
    let minRem        = 0;
    let secRem        = 0;
    let speed         = 1000;
    let progress      = null;
    let COLOR         = getColorFromLocalStorage() || '#F87070';
    let timerTime     = getTimerFromLocalStorage() || 45;
    let minBreak      = getShortBreakFromLocalStorage() || 5;
    let maxBreak      = getLongBreakFromLocalStorage() || 15;
    // Timer elements
    let timer          = document.querySelector('#timer');
    let shortBreak     = document.querySelector('#shortBreak');
    let longBreak      = document.querySelector('#longBreak');
    let minutes        = document.querySelector('.timer-minutes');
    let seconds        = document.querySelector('.timer-seconds');
    const progressBar  = document.querySelector('.progress-bar');
    const stopStartBtn = document.querySelector('.timer-start-stop-btn'); // Button Stop / Start Timer
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
    // Start / Stop Timer
    stopStartBtn.addEventListener('click', stopStartTimerBtn);
    // Display time in settings
    timer.innerHTML = timerTime;
    shortBreak.innerHTML = minBreak;
    longBreak.innerHTML = maxBreak;

    function playAudio() {
        let audio = new Audio();
        audio.src = '../files/timeEnd.mp3';
        audio.play();
    }

    function displayCurrentTimer(currentTab, timer) {
        if (currentTab) {
            minutes.innerHTML = timer < 10 ? `0${timer}` : timer;
            seconds.innerHTML = `00`;
        }
    }
    displayCurrentTimer(timerTab, timerTime)

    let progressEnd = timer => {  return timer * 60   }
    let moveDegree  = timer => {  return degree / progressEnd(timer)  }

    function progressTrack (timer) {
        progressStart++;

        minRem = Math.floor((progressEnd(timer) - progressStart) / 60);
        secRem = Math.floor((progressEnd(timer) - progressStart) % 60);
         
        minutes.innerHTML = minRem < 10 ? `0${minRem}` : minRem;
        seconds.innerHTML = secRem < 10 ? `0${secRem}` : secRem;

        progressBar.style.background = `conic-gradient(
            ${COLOR} ${progressStart * moveDegree(timer)}deg, 
            #161932 ${progressStart  * moveDegree(timer)}deg)`;

        if (progressStart == progressEnd(timer)) {
            progressBar.style.background = `conic-gradient(
                ${COLOR} 360deg,
                ${COLOR} 360deg 
            )`;
            clearInterval(progress);
            stopStartBtn.innerHTML = 'RESTART';
            progress = null;
            progressStart = 0;
            playAudio()
        }
    }

    function stopStartProgress () {
        if (!progress) {
            progress = setInterval(() => progressTrack(timerTime), speed)
        } else {
            clearInterval(progress);
            progress = null;
            progressStart = 0;
            progressBar.style.background = `conic-gradient(
                #161932 360deg,
                #161932 360deg
            )`;
        }
    }

    function stopStartTimerBtn () {
        if (stopStartBtn.innerHTML === 'START') {
            stopStartBtn.innerHTML = 'PAUSE';
            stopStartProgress ()
        }
    }

    function startStopProgress(currentTab) {
        if (console.log(!progress && currentTab === timerTab)) { // добавить условие в каждое условие через ? : 
            setInterval(() => progressTrack(timerTime), speed)  // придумать условие по которому таймер либо будет запускатся, либо останавливаться
        } 
        else  if (console.log(!progress && currentTab === shortBreakTab)) {
            setInterval(() => progressTrack(minBreak), speed)
        }
        else {
            setInterval(() => progressTrack(maxBreak), speed)
            // clearInterval(progress);
            // progress = null;
            // progressStart = 0;
            // progressBar.style.background = `conic-gradient(
            //     #161932 360deg,
            //     #161932 360deg
            // )`;
        }
    }
    // function resetTimer(timer) {
    //     if (progress) clearInterval(progress)

    //     progress = null;
    //     progressStart = 0;
    //     getProgressEnd(timer);
    //     getDegTravel(timer);
    //     progressBar.style.background = `conic-gradient(
    //         #161932 360deg,
    //         #161932 360deg
    //     )`;
    // }

    function getTimerFromLocalStorage() { // Get current timer
        return localStorage.getItem('timer')
    }
    function getShortBreakFromLocalStorage() { // Get current short break
        return localStorage.getItem('shortBreak')
    }
    function getLongBreakFromLocalStorage() { // Get current long break
        return localStorage.getItem('longBreak') 
    }
    function getColorFromLocalStorage() {  // Get current color
        return localStorage.getItem('color')
     }

    // Increase timer
    function inreaseTimer (typeTimer, inc) {
        if (typeTimer === timer) {
            inc === timerInc && timerTime < 60 ? timerTime++ : timerTime = 0;
            localStorage.setItem('timer', timerTime);          
        } 
        else if (typeTimer === shortBreak) {
            inc === shortBreakInc && minBreak < 15 ? minBreak++ : minBreak = 0;
            localStorage.setItem('shortBreak', minBreak);
        } 
        else {
            inc === longBreakInc && maxBreak < 25 ? maxBreak++ : maxBreak = 0;
            localStorage.setItem('longBreak', maxBreak);
        }
    }

    timerInc.addEventListener('click', () => {
        inreaseTimer(timer, timerInc)
        timer.innerHTML = timerTime;
    })
    shortBreakInc.addEventListener('click', () => {
        inreaseTimer(shortBreak, shortBreakInc)
        shortBreak.innerHTML = minBreak;
    })
    longBreakInc.addEventListener('click', () => {
        inreaseTimer(longBreak, longBreakInc)
        longBreak.innerHTML = maxBreak;
    })

     // Decrease timer
    function decreaseTimer (typeTimer, dec) {
        if (typeTimer === timer) {
            dec === timerDec && timerTime > 0 ? timerTime-- : timerTime = 60;
            localStorage.setItem('timer', timerTime); 
        } 
        else if (typeTimer === shortBreak) {
            dec === shortBreakDec && minBreak > 0 ? minBreak-- : minBreak = 15;
            localStorage.setItem('shortBreak', minBreak);
        } 
        else {
            dec === longBreakDec && maxBreak > 0 ? maxBreak-- : maxBreak = 25;
            localStorage.setItem('longBreak', maxBreak);
        }
    }

    timerDec.addEventListener('click', () => {
        decreaseTimer(timer, timerDec)
        timer.innerHTML = timerTime;
    })
    shortBreakDec.addEventListener('click', () => {
        decreaseTimer(shortBreak, shortBreakDec)
        shortBreak.innerHTML = minBreak;
    })
    longBreakDec.addEventListener('click', () => {
        decreaseTimer(longBreak, longBreakDec)
        longBreak.innerHTML = maxBreak;
    })
} 