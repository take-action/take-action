/* Scroll */
$('.arrow').on('click', function() {
  $("html, body").animate({ scrollTop: $('.home-page-title').offset().top - 65 });
})

/* Traffic Count setInterval */
var trafficCountIncrement = 0;
var trafficCountElement = document.querySelector('.traffic-count');

function writeTrafficCount() {
  if (trafficCountIncrement == 1) {
    trafficCountElement.innerText = trafficCountIncrement + ' Person trafficked since visiting this site';
  }
  else {
    trafficCountElement.innerText = trafficCountIncrement + ' People trafficked since visiting this site';
  }
}

if (sessionStorage.getItem('trafficCountIncrement')) {
  trafficCountIncrement = sessionStorage.getItem('trafficCountIncrement');
  writeTrafficCount()
}

setInterval(increaseTrafficCount, 40000);

function increaseTrafficCount() {
  trafficCountIncrement++;
  sessionStorage.setItem('trafficCountIncrement', trafficCountIncrement)
  writeTrafficCount()
}

/* Timer */
var timerIncrement = 40;
var timerElement = document.querySelector('.timer');

setInterval(decreaseTimer, 1000);

function decreaseTimer() {
  timerIncrement--;
  timerElement.innerText = timerIncrement + 's';
  if (timerIncrement == 0) {
    timerIncrement = 40;
  }
}

/* Typing Title */
var typed = new Typed('.title', {
  strings: ["Take Action."],
  typeSpeed: 100
});
