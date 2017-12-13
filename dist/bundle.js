(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// let messages = require('./messages');
// let getjson = require('./getjson');
let messages = require('./messages');



// module.exports = {parseData};
},{"./messages":2}],2:[function(require,module,exports){
'use strict';

const messageReq = new XMLHttpRequest();

let data;

let parseData = () => {
  data = JSON.parse(event.target.responseText).messages;
    console.log(data, 'thisis data');
  createMsg();
  console.log(data);
};

messageReq.addEventListener('load', parseData);
messageReq.open("GET","data.json");
    // console.log("This is happening");
messageReq.send();


function createMsg(){
  let id = (Date.now()).toString().slice(-4);
  let msg = {'id': id, 'message': 'this is the message I am writing'};
  data.push(msg);
  // console.log(data);
  
  // console.log(msgArray, 'message');

}
console.log(data, 'asdas');



// function writeToDom(msgArray){



// }


// createMsg();

},{}]},{},[1]);
