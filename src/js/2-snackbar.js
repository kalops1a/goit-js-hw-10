
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

const delayInput = form.querySelector('input[name="delay"]');
const stateRadios = form.querySelectorAll('input[name="state"]');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();


  const delay = parseInt(delayInput.value);

 
  const shouldFulfill = stateRadios.value === 'fulfilled';


  const notificationPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFulfill) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

 
  notificationPromise
    .then((delay) => {
      iziToast.success({
        title: 'Success',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight'
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight'
      });
    });
});