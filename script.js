document.addEventListener('DOMContentLoaded', () => {

    // const newYear = new Date('Jan 1 2024 00:00:00');


    // const newYear = new Date();
    // console.log(newYear.getHours());
    // console.log(newYear.getDay());
    // console.log(newYear.getMinutes());




    function timeCount(id, endtime) {

        const timer = document.getElementById(id);
        const timerDays = timer.querySelector('.timer__count-days');
        const timerHours = timer.querySelector('.timer__count-hours');
        const timerMinutes = timer.querySelector('.timer__count-minutes');
        const timerSeconds = timer.querySelector('.timer__count-seconds');


        function setTime() {
            let now = new Date();
            let leftUntil = endtime - now;

            let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
            let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
            let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
            let seconds = Math.floor(leftUntil / 1000) % 60;
            timerDays.textContent = days;
            timerHours.textContent = hours;
            timerMinutes.textContent = minutes;
            timerSeconds.textContent = seconds;

            console.log(seconds);
        }


        setInterval(setTime, 1000);
        setTime();
    }


    const newYear = new Date('Jan 1 2024 00:00:00')

    timeCount('timer1', newYear);

})

