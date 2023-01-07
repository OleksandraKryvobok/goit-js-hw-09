import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    input: document.querySelector('input[type="text"]'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', '');

// const currentTime = Date.now();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0] < Date.now()) {
            Notify.failure("Please choose a date in the future");
        } 
        else {
            refs.startBtn.removeAttribute('disabled');
        }

        let isActive = false;

        refs.startBtn.addEventListener('click', onStartBtnClick);

        function onStartBtnClick() {
            if (isActive) {
                return;
            }

            isActive = true;

            const timerId = setInterval(() => {
                const currentTime = Date.now();
                const deltaTime = selectedDates[0] - currentTime;
                const time = convertMs(deltaTime);

                updateClockface(time);

                if(refs.days.textContent === '00' && refs.hours.textContent === '00' && refs.minutes.textContent === '00' && refs.seconds.textContent === '00') {
                    clearInterval(timerId);
                }
            }, 1000);

            
        }
    },
};

const calendar = flatpickr(refs.input, options);

function pad(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
}
  
function updateClockface({ days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
}