'use strict';
// let messages = require('./messages');
let getjson = require('./getjson');

const messageReq = new XMLHttpRequest();

const parseData = () => {
    const data = JSON.parse(event.target.responseText).messages;
    console.log(event.target);

    getjson.addToArr(data);
    
};
// console.log('data', parseData());

messageReq.addEventListener('load', parseData);
messageReq.open("GET","data.json");
    // console.log("This is happening");
messageReq.send();



// module.exports