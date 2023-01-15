export function settings() {  
    let timer = document.querySelector('#timer');
    let shortBreak = document.querySelector('#shortBreak');
    let longBreak = document.querySelector('#longBreak');

    let timerTime = 45;
    let minBreak = 5;
    let maxBreak = 15;
    
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