var main = function() {

  // targeting the More button with .siblings()
  $('.more-btn').on('click', function(event) {
    $(event.currentTarget).siblings('.more-menu').toggle();
  });

  // targeting the Share button with .next()
  $('.share').on('click', function(event) {
    $(event.currentTarget).next().toggle();
  });

  // targeting the notification bell with .find()
  $('.bell').on('click', function(event) {
    $(event.currentTarget).find('.notification').toggleClass('active');
  });

};

$(document).ready(main);
