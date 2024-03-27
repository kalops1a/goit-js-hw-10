// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');




let userSelectedDate;

const datetimePicker = flatpickr("#datetime-picker", options);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    userSelectedDate = selectedDates[0];
    if (userSelectedDate >= this.defaultDate) {
      alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


startButton.addEventListener('click', () => {
  
  startButton.disabled = true;
  datetimePicker.disabled = true;

   const ms = userSelectedDate - options.defaultDate;

    timerInterval = setInterval(() => {
     
    updateTimer(convertMs(ms));
  }, 1000);
});

function updateTimer(timeRemaining) {
  daysElement.textContent = addLeadingZero(timeRemaining.days);
  hoursElement.textContent = addLeadingZero(timeRemaining.hours);
  minutesElement.textContent = addLeadingZero(timeRemaining.minutes);
  secondsElement.textContent = addLeadingZero(timeRemaining.seconds);

  if (
    timeRemaining.days === 0 &&
    timeRemaining.hours === 0 &&
    timeRemaining.minutes === 0 &&
    timeRemaining.seconds === 0
  ) {
    clearInterval(timerInterval); 
    startButton.disabled = false; 
    datetimePicker.disabled = false; 
  }
}






























