export function settings() {
    const pomodoro = document.querySelector('#pomodoro');
    const shortBreak = document.querySelector('#short-break');
    const longBreak = document.querySelector('#long-break');
    const defaultMinutes = {
        pomodoro: '45',
        shortBreak: '10',
        longBreak: '20',
    }

    function setMinutesByDefault(elem, defaultElemMinute) {
        const minutes = elem.innerHTML = defaultElemMinute;
        return minutes
    }
    setMinutesByDefault(pomodoro, defaultMinutes.pomodoro)
    setMinutesByDefault(shortBreak, defaultMinutes.shortBreak)
    setMinutesByDefault(longBreak, defaultMinutes.longBreak)

    function addMinutes(minutes) {
        minutes = 0;
        const buttons = document.querySelectorAll('.select-btn-more');
        for (let btn of buttons) {
            btn.addEventListener('click', () => minutes+=5)
        }
    }
    addMinutes()

    function delateMinutes(minutes) {
        minutes = 45;
        const buttons = document.querySelectorAll('.select-btn-less');
        for (let btn of buttons) {
            btn.addEventListener('click', () => minutes-=5)
        }
    }
    delateMinutes()
}