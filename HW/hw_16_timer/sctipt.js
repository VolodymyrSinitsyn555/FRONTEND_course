const inputField = document.querySelector("#timeInput");
const button = document.querySelector("button");
const timer = document.querySelector("#timer");
const message = document.querySelector(`#message`);

button.addEventListener("click", () => {
  let time = +inputField.value;
  if (!time) {
    alert(`Enter the time`);
    return;
  }
  if (time < 0) {
    alert(`Time cannot be negative`);
    return;
  }
  timer.textContent = time;

  const interval = setInterval(() => {
    if (time <= 0) {
      clearInterval(interval);
      message.textContent = `Time's up!`;
      setTimeout(() => {
        timer.textContent = `00:00`;
        message.textContent = ``;
        inputField.value = ``;
      }, 2000);
    } else {
      time--;
      timer.textContent = time;
    }
  }, 1000);
});
