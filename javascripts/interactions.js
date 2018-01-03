'use strict';


let messages = require('./messages');

$(document).keypress(function (e) {
  if (e.keyCode === 13) {
    let message = $('#input').val();
    if ($('.msgDiv').hasClass('selected')) {
      $("div.selected").find('.msgp').html(message);
      $("div.selected").removeClass("selected");
    } else {
      let cUser = $('input[name="current_user"]:checked');
      if (cUser.length == 0) {
        window.alert('Who are you?');
      } else {
        messages.createMsg(message);
        $(cUser).prop('checked', false);
      }
    }
    $('#input').val('');
  }
});

$(document).ready(function () {
  $('.delete').on('click', function () {
    let deleteId = $(this).parent().id;
    $(this).parent().remove();
    messages.deleteMessage(deleteId);
  });
  $('.edit').on('click', function () {
    $(this).parent().toggleClass('selected');
  });
});

$('#destroy').click(function () {
  $('#messageArea').html('');
  $(this).attr("disabled", true);
  messages.deleteAll();
});



let $bodyDiv = $('#body');

$('#logo').on('click', function () {
  $bodyDiv.toggleClass('darkside');
  $($bodyDiv.hasClass('darkside')? 
  $('#logo').attr('src', 'images/trooper.png') : 
  $('#logo').attr('src', 'images/rebel.png'));
});

$('#jabbafy').click(function () {
 $('#messageArea').toggleClass('large');
  if ($('#messageArea').hasClass('large')) 
    window.alert('Spasteelya du oonta Boonta');

});