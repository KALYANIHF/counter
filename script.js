const start_btn = document.querySelector(".start_btn");
const stop_btn = document.querySelector(".stop_btn");
const reset_btn = document.querySelector(".reset_btn");
const countDown = document.querySelector(".countDown");
var count = 0;
start_btn.addEventListener("click", startCounter);
stop_btn.addEventListener("click", stopCounter);
reset_btn.addEventListener("click", resetCounter);

function startCounter() {
  intervel_pointer = setInterval(() => {
    count++;
    countDown.textContent = count;
  }, 100);
}
function stopCounter() {
  clearInterval(intervel_pointer);
}
function resetCounter() {
  count = 0;
  countDown.textContent = 0;
}
