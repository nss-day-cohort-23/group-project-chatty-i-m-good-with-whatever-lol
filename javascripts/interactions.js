'use strict';

// console.log('interactions');

let messages = require('./messages');

document.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    let message = document.getElementById('input').value;
    messages.createMsg(message);
    document.getElementById('input').value = '';    

  }
});

document.querySelector('body').addEventListener('click', function(){
  if(event.target.className === 'delete'){
    let deleteId = event.target.parentNode.id;
    event.target.parentNode.remove();
    messages.deleteMessage(deleteId);
  }

});

document.getElementById('destroy').addEventListener('click', function(){
  document.getElementById('messageArea').innerHTML = '';
  this.setAttribute('disabled', true);
  messages.deleteAll();  
});

  
