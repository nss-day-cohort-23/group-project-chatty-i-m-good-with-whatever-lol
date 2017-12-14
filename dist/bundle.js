(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';


let messages = require('./messages');
let targeted;

document.addEventListener('keypress', function (e) {
  let message = document.getElementById('input').value;
  if (e.keyCode === 13) {
    if (document.querySelector('.selected') !== null) {
      targeted.childNodes[1].innerHTML = document.getElementById('input').value;
      targeted.classList.remove("selected");
    } else {
      messages.createMsg(message);
    }
    document.getElementById('input').value = '';
  }
});


document.querySelector('body').addEventListener('click', function(){
  if(event.target.className === 'delete'){
    let deleteId = event.target.parentNode.id;
    event.target.parentNode.remove();
    messages.deleteMessage(deleteId);
  } else if(event.target.className === 'edit'){
    event.target.parentNode.classList.toggle('selected');
     targeted = event.target.parentNode;

    }
});

document.getElementById('destroy').addEventListener('click', function(){
  document.getElementById('messageArea').innerHTML = '';
  this.setAttribute('disabled', true);
  messages.deleteAll();  
});



  

},{"./messages":3}],2:[function(require,module,exports){
'use strict';

let interactions = require('./interactions');


// module.exports = {parseData};
},{"./interactions":1}],3:[function(require,module,exports){
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


function createMsg(message){
  let id = (Date.now()).toString().slice(-4);
  let msg = {'id': id, 'message':message} ;
  data.push(msg);
  writeToDom();
}


function writeToDom(){
let msgDiv = '';
  data.forEach((msg) => {
     msgDiv += `<div class='msgDiv' id=${msg.id}>
    <p class='msgp'> ${msg.message}</p>
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

},{}]},{},[2]);
