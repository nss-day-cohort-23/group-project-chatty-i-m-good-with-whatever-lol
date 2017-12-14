'use strict';

let users = require ('./users');

const messageReq = new XMLHttpRequest();


let data;

let parseData = () => {
   data = JSON.parse(event.target.responseText).messages;
   writeToDom();   
};

messageReq.addEventListener('load', parseData);

messageReq.open("GET","data.json");

messageReq.send();


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
    <p class='msgp'> <b>${msg.user}</b>: ${msg.message}</p>
    <p class='time'> ${msg.date} </p>
    <button type='button' class='edit'> Edit</button>    
    <button type='button' class='delete'> Delete</button>
    </div>`;

  });
  document.getElementById('messageArea').innerHTML = msgDiv;
  document.getElementById('destroy').removeAttribute('disabled');
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
