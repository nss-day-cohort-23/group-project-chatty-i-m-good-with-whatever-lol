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
  let msg = {'id': id, 'message':message} ;
  data.push(msg);
  // document.getElementById('destroy').setAttribute('disabled', false);
  writeToDom();
}


function writeToDom(){
let msgDiv = '';
  data.forEach((msg) => {
     msgDiv += `<div class='msgDiv' id=${msg.id}>
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
