'use strict';

// console.log('interactions');

let messages = require('./messages');

document.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    let message = document.getElementById('input').value;
    messages.createMsg(message);

  }
});

document.querySelector('body').addEventListener('click', function(){
  if(event.target.className === 'delete'){
    event.target.parentNode.remove();
  }

});

// document.getElementById('destroy').addEventListener('click', function(){
//   document.getElementById('messageArea').childNode.remove();
//   this.setAttribute('disabled', true);
  // console.log(this, 'this');
// });

  
