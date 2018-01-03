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
