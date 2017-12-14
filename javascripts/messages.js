'use strict';


const messageReq = new XMLHttpRequest();


let data;

let parseData = () => {
   data = JSON.parse(event.target.responseText).messages;
   writeToDom();   
};

messageReq.addEventListener('load', parseData);

messageReq.open("GET","data.json");

messageReq.send();

// function buildMsgObj(){
//   data.push(msg)
  
// }
function createMsg(message){
  let id = (Date.now()).toString().slice(-4);

  let msg = { 'date': '', 'id': id, 'message':message} ;
  let date = new Date().toISOString().slice(0,19).split('T');
  let fDate = date[0] + ' ' + date[1];
  msg.date = fDate;
  data.push(msg);
  
  // console.log(fDate);
  // document.getElementById('destroy').setAttribute('disabled', false);
  writeToDom();
}


function writeToDom(){
let msgDiv = '';
// let date = Date.now();
// let date = new Date().toISOString().slice(0,19).split('T');
//   let fDate = date[0] + ' ' + date[1];
//   console.log(fDate);
    // finDate = fDate[1] + ' ' + fDate
  data.forEach((msg) => {
  
     msgDiv += `<div class='msgDiv' id=${msg.id}>
    <p class='time'> ${msg.date} </p>
    <p class='msgp'> ${msg.message}</p>
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
