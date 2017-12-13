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