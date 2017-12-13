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
