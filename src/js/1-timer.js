// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
       

        
        if (selectedDates[0] > this.defaultDate) {
            userSelectedDate = selectedDate;
            document.getElementById('startButton').disabled = false;
        } else {
            window.alert("Please choose a date in the future");
        document.getElementById('startButton').disabled = true;}
    }
     
};

const datePicker = flatpickr("#datetime-picker", options);




const startButtonHandler = function() {
    
    startCountdown(userSelectedDate);
};
        
