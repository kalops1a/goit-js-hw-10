// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

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

const startButton = document.getElementById("startButton");

let timerInterval;
let userSelectedDate;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  
  onClose(selectedDates) {
    
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight'
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};
const datetimePicker = flatpickr("#datetime-picker", options);


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


startButton.addEventListener('click', () => {
  
  startButton.disabled = true;
  datetimePicker.disabled = true;

    const selectedDate = datetimePicker.selectedDates[0];
    
  const remainingTime = Math.max(selectedDate - new Date(), 0);

  updateTimer(convertMs(remainingTime));

    
    
    timerInterval = setInterval(() => {
     
    const remainingTime = Math.max(selectedDate - new Date(), 0);
    updateTimer(convertMs(remainingTime));

    if (remainingTime === 0) {
      clearInterval(timerInterval);
      startButton.disabled = false;
      datetimePicker.disabled = false;
    }
  }, 1000);
});

function updateTimer(timeRemaining) {
  daysElement.textContent = addLeadingZero(timeRemaining.days);
  hoursElement.textContent = addLeadingZero(timeRemaining.hours);
  minutesElement.textContent = addLeadingZero(timeRemaining.minutes);
  secondsElement.textContent = addLeadingZero(timeRemaining.seconds);

}






























