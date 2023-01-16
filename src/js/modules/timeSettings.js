export function settings() { 
    let timerTime = 45;
    let minBreak = 5;
    let maxBreak = 15;
    const minutes = document.querySelector('.timer-minutes');
    const seconds = document.querySelector('.timer-seconds');
    const timerTab = document.querySelector('#timerTab');
    const shortBreakTab = document.querySelector('#shortBreakTab');
    const longBreakTab = document.querySelector('#longBreakTab');

    document.querySelector('#timerTab').addEventListener('click', () => displayCurrentTimer(timerTab, timerTime));
    document.querySelector('#shortBreakTab').addEventListener('click', () => displayCurrentTimer(shortBreakTab, minBreak));
    document.querySelector('#longBreakTab').addEventListener('click', () => displayCurrentTimer(longBreakTab, maxBreak));

    function displayCurrentTimer(currentTab, timer) {
        if (currentTab) {
          timer < 10 ? minutes.innerHTML = `0${timer}` : minutes.innerHTML = timer
          seconds.innerHTML = '00'
        }
    }
    displayCurrentTimer(timerTab, timerTime)














    let timer = document.querySelector('#timer');
    let shortBreak = document.querySelector('#shortBreak');
    let longBreak = document.querySelector('#longBreak');
    
    timer.innerHTML = timerTime;
    shortBreak.innerHTML = minBreak;
    longBreak.innerHTML = maxBreak;
   
    document.querySelector('#timer-inc').addEventListener('click', changeTimer.bind(timer, timerTime));
    document.querySelector('#timer-dec').addEventListener('click', changeTimer);
    // console.log(timer === timer)

    function changeTimer (typeTimer, math) {
        if (console.log(typeTimer === timer)) {
          math === timerTime ? timerTime++ : timerTime--
        } else if (typeTimer === shortBreak) {
          math === 'inc' ? shortBreak++ : shortBreak--
        } else {
          math === 'inc' ? longBreak++ : longBreak--
        }
    }
} 