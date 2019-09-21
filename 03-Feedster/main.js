$(document).ready(() => {

  // show and hide navigation menu
  $('.menu').on('mouseover', () => {
    $('.nav-menu').show();
  });
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  });

  // adding hover functionality to buttons
  $('.btn').on('mouseenter', event => {
    $(event.currentTarget).addClass('btn-hover');
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('btn-hover');
  });

  // display the remaining number of characters
  $('.postText').on('keyup', event => {
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
    // the message turns red if out of characters
    if (remaining <= 0) {
      $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');
    }
    $('.characters').html(remaining);
    // focusing the text area
  }).focus();

});
