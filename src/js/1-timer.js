// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

let userSelectedDate = null;

const onCloseHandler = function (selectedDates) {

    if (selectedDates.length > 0) {
        userSelectedDate = selectedDates[0];
        const currentDate = new Date();
        if (userSelectedDate > currentDate) {
            
            document.getElementById('startButton').disabled = false;
        } else {
            document.getElementById(`startButton`).disabled = true;
        window.alert("Please choose a date in the future");}
    }
}