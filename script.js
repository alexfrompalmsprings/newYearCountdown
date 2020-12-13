// ---------------------- DOM Elements ----------------------
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');


let currentYear = new Date().getFullYear();
console.log(currentYear);

let newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
console.log(newYearTime);

// set the year background
year.innerHTML = currentYear + 1;


function updateCount() {
  let currentTime = new Date();
  let diff = newYearTime - currentTime;

  // days logic ------- > diff / 1000 / seconds/ minutes/ hours/ 24
  let daysCount = Math.floor(diff/1000/ 60/ 60/ 24);
  let hoursCount = (Math.floor(diff/1000/ 60/ 60)) % 24;
  let minutesCount = Math.floor(diff/1000/ 60) % 60;
  let secondsCount = Math.floor(diff/1000) % 60;

  // console.log(daysCount, hoursCount, minutesCount, secondsCount)

  days.innerHTML = daysCount;
  hours.innerHTML = hoursCount < 10 ? '0' + hoursCount: hoursCount;
  minutes.innerHTML = minutesCount < 10 ? '0' + minutesCount: minutesCount;
  seconds.innerHTML = secondsCount < 10 ? '0' + secondsCount: secondsCount;;

}

// show spinner
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

setInterval(updateCount, 1000);


