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




let bodyDiv = document.getElementById('body');

document.getElementById('dark').addEventListener('click', function(){

  bodyDiv.classList.toggle('darkside');
  document.getElementById('logo').src = 'images/trooper.png';
});
