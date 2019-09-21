$(document).ready(() => {

  // targeting <textarea> element
  $('#text').on('keyup', event => {
    $('.preview').html($(event.currentTarget).val());
  });

  // targeting <select> element for Font Family
  $('#font').on('change', event => {
    $('.preview').css({
      fontFamily: $(event.currentTarget).val()
    });
  });

  // targeting <select> element for Font Weight
  $('#weight').on('change', event => {
    $('.preview').css({
      fontWeight: $(event.currentTarget).val()
    });
  });

  // targeting <input> element for Font Size
  $('#size').on('keyup', event => {
    let fontSize = $(event.currentTarget).val() + 'px';
    $('.preview').css({
      fontSize: fontSize
    });
  });

});
