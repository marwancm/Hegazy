// Start Scroll-line-header
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
//End Scroll-line-header

//Start countDownDate
let countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
//End countDownDate



document.addEventListener("DOMContentLoaded", function() {
  let div = document.querySelector(".our-skills");
  let spans = document.querySelectorAll(".the-progress span");
  let span = document.querySelector(".scroll-to-top");
  // Skills Animate Width
  window.addEventListener("scroll", function() {
    if (window.scrollY >= div.offsetTop - 150) {
      console.log("Reached Section our-skills");
      spans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }
// Start scroll-to-top
    window.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
  });

  span.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
});
  // Stats Increase Number
let nums = document.querySelectorAll(".stats .num");
let section = document.querySelector(".num");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}