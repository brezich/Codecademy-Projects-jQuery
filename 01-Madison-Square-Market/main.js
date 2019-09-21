$(document).ready(() => {

  // adding click event handlers
  $('#cart').on('click', () => {
    $('#cartMenu').show();
  });

  $('#account').on('click', () => {
    $('#accountMenu').show();
  });

  $('#help').on('click', () => {
    $('#helpMenu').show();
  });

  // adding mouseleave event handlers
  $('.dropdown-menu').on('mouseleave', () => {
    $('.dropdown-menu').hide();
  });

});
