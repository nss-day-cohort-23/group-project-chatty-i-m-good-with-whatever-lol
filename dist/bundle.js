(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// console.log('interactions');

let messages = require('./messages');

document.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    let message = document.getElementById('input').value;
    console.log(message);    
    messages.createMsg(message);

  }
});
},{"./messages":3}],2:[function(require,module,exports){
'use strict';

// let messages = require('./messages');
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

},{}]},{},[2]);
