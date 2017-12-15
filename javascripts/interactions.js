'use strict';


let messages = require('./messages');
let targeted;

document.addEventListener('keypress', function (e) {
  let message = document.getElementById('input').value;
  if (e.keyCode === 13) {
    if (document.querySelector('.selected') !== null) {
      targeted.childNodes[3].innerHTML = document.getElementById('input').value;
      targeted.classList.remove("selected");

    } else {
     if((document.querySelector('input[name="current_user"]:checked') == null)){
      window.alert('Who are you?');
     }else{
      messages.createMsg(message);
      document.querySelector('input[name="current_user"]:checked').checked = false;
     }
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

document.getElementById('logo').addEventListener('click', function(){
  bodyDiv.classList.toggle('darkside');
  if (document.querySelector('.darkside') !== null) {
  document.getElementById('logo').src = 'images/trooper.png';
  document.getElementById('darkLabel').innerHTML = "Do or do not. There is no try";
  
  }else{
    document.getElementById('logo').src = 'images/rebel.png';
    document.getElementById('darkLabel').innerHTML = "Let your hate consume you!";
    
  }
});

document.getElementById('jabbafy').addEventListener('click', function(){
  document.getElementById('messageArea').classList.toggle('large');
  if(document.querySelector('.large') !== null) {
  window.alert('Spasteelya du oonta Boonta');
  
  }
});