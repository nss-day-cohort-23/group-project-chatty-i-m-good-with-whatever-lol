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
  writeToDom();
}

function writeToDom(){
let msgDiv = '';
  data.forEach((msgs) => {
     msgDiv += `<div class='msgDiv' id=${msgs.id}>
    <p class='msgp'> ${msgs.message}</p>
    <button type='button' class='delete'> Delete</button>
    </div>`;

  });
  document.getElementById('messageArea').innerHTML = msgDiv;
  
}


module.exports ={createMsg};
