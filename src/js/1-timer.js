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


const startButton = document.getElementById('startButton');
const datetimePicker = document.getElementById('datetime-picker');

let timerInterval;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    
    if (selectedDate <= this.defaultDate) {
      alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};



startButton.addEventListener('click', () => {
  
  startButton.disabled = true;
  datetimePicker.disabled = true;

  const ms = new Date(datetimePicker.value) - options.defaultDate;

  timerInterval = setInterval(() => {
    updateTimer(convertMs(ms));
  }, 1000);
});
























function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}



const enableStartButton = () => {
  const startButton = document.getElementById("startButton");
  startButton.disabled = false;
};

const disableStartButton = () => {
  const startButton = document.getElementById("startButton");
  startButton.disabled = true;
};

const ms = userSelectedDate - options.defaultDate;
const convertMs = (ms) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
    
};


const updateTimer = () => {
  
  const timeDifference = userSelectedDate -options.defaultDate;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    disableStartButton();
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeDifference);
  const timerDisplay = `${days}:${hours}:${minutes}:${seconds}`;
  console.log(timerDisplay); // Update timer interface here
};


const datePicker = flatpickr("#datetime-picker", options);




const startButtonHandler = function() {
    
    startCountdown(userSelectedDate);
};
        
