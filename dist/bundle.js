(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./messages":3}],2:[function(require,module,exports){
'use strict';

let interactions = require('./interactions');


// module.exports = {parseData};
},{"./interactions":1}],3:[function(require,module,exports){
'use strict';

let users = require ('./users');

// const messageReq = new XMLHttpRequest();


let data;

function parseData (msgs) {
    data = msgs.messages;
   writeToDom();   
}

$.ajax({
url: "data.json"

}).done(parseData);

function createMsg(message){
  let user = users.setUser();
  let id = (Date.now()).toString().slice(-4);
  let msg = {'date': '', 'id': id, 'message':message, 'user': user} ;
  
  let date = new Date().toISOString().slice(0,19).split('T');
  let fDate = date[0] + ' ' + date[1];
  msg.date = fDate;

  data.push(msg);
  
  writeToDom();
}

function writeToDom(){
let msgDiv = '';

  data.forEach((msg) => {
     msgDiv += `<div class='msgDiv' id=${msg.id}>
     <b class='user'>${msg.user}</b>
    <p class='msgp'> : ${msg.message}</p>
    <p class='time'> posted: ${msg.date} </p>
    <button type='button' class='edit'> Edit</button>    
    <button type='button' class='delete'> Delete</button>
    </div>`;

  });
  $('#messageArea').html(msgDiv);
  $('#destroy').removeAttr('disabled');
}
function deleteMessage(deleteId){
data = data.filter(function(item){
  return item.id !== deleteId;
  });
}

function deleteAll(){
data = [];
}

module.exports ={createMsg, deleteMessage, deleteAll};

},{"./users":4}],4:[function(require,module,exports){
'use strict';

let users = {
  names: ['Luke Skywalker', 'Leia Organa', 'Han Solo', 'Chewbacca', 'Yoda']
};

module.exports.setUser = () => {
  let user;
  let current_user = $('input[name="current_user"]:checked').val();
 switch(current_user){
  case '1':
    user = users.names[0];
    break;
  case '2':
    user = users.names[1];
    break;
    case '3':
      user = users.names[2];
      break;
    case '4':
      user = users.names[3];
      break;
    case '5':
      user = users.names[4];
      break;
  }
  return user;

};

},{}]},{},[2]);
