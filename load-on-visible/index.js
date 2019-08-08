$(document).ready(function() {
  $(window).scroll(function() {
    $("section").each(function(container) {
      var bottom_of_container = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      // if the section is in full view then show the child elements
      if (bottom_of_window > bottom_of_container) {
        $(this)
          .children()
          .each(function(idx) {
            $(this).animate({ opacity: "1" }, 1000 + idx * 1000);
          });
      }
    });
  });
});
