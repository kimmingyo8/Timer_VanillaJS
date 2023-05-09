const $hour = document.querySelector(".hour-txt");
const $min = document.querySelector(".min-txt");
const $sec = document.querySelector(".sec-txt");

const $hms = document.querySelectorAll('[class*="txt"]');

const $startBtn = document.querySelector(".start-disabled-btn");
const $resetBtn = document.querySelector(".reset-disabled-btn");

let toggle = false;

$hms.forEach((item) => {
  item.addEventListener("click", () => {
    item.textContent = "ll";
    $startBtn.src = "./assets/start-default.svg";
    $resetBtn.src = "./assets/reset-default.svg";
    if (toggle === true) {
    }
  });
});

function reset() {
  $hour.textContent = "00";
  $min.textContent = "00";
  $sec.textContent = "00";
}
