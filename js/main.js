$(window).on('scroll', function() {
  var scrollAmount = window.scrollY
  if (scrollAmount > 50) {
    $(".arrow").animate({ opacity: 0});
  }
})
