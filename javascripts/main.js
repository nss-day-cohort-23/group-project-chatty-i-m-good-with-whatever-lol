'use strict';

const messageReq = new XMLHttpRequest();
const parseData = () => {
    const data = JSON.parse(event.target.responseText).messages;
    console.log(event.target);

};

messageReq.addEventListener('load', parseData);
messageReq.open("GET","data.json");
    console.log("This is happening");
messageReq.send();
