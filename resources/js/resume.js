$(function() {
  "use strict";
  $(function () {
      $(".preloader").fadeOut();
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  //   target: "#sideNav"
  // });

  $(function () {
      var url = window.location;
      var element = $('ul#sidebarnav a').filter(function () {
          return this.href == url;
      }).addClass('active').parent().addClass('active');
      while (true) {
          if (element.is('li')) {
              element = element.parent().addClass('in').parent().addClass('active');
          }
          else {
              break;
          }
      }
  });
});
