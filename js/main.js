/* Scroll */
$(window).on('scroll', function() {
  var scrollAmount = window.scrollY
  if (scrollAmount > 50) {
    $(".arrow").animate({ opacity: 0});
  }
})

/* Traffic Count setInterval */
var trafficCountIncrement = 0;
var trafficCountElement = document.getElementById('traffic-count');

setInterval(increaseTrafficCount, 40000);

function increaseTrafficCount() {
  trafficCountIncrement++;
  if (trafficCountIncrement == 1) {
    trafficCountElement.innerText = trafficCountIncrement + ' Person trafficked since you visited this site';
  }
  else {
    trafficCountElement.innerText = trafficCountIncrement + ' People trafficked since you visited this site';
  }
}

/* Timer */
var timerIncrement = 0;
var timerElement = document.getElementById('timer');

setInterval(increaseTimer, 1000);

function increaseTimer() {
  timerIncrement++;
  timerElement.innerText = timerIncrement + 's';
}
