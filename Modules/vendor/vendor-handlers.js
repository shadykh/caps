'use strict';

function pickUp(payload){
  let event = {
    event : 'pickup',
    time: new Date(),
    payload: payload,
  };
  console.log('EVENT', event);
}

function inTransit(payload){
    let event = {
      event : 'in-transit',
      time: new Date(),
      payload: payload,
    };
    console.log('EVENT', event);
}

function delivered(payload){
    let event = {
      event : 'delivered',
      time: new Date(),
      payload: payload,
    };
    console.log(`VENDOR: Thank you for delivering ${payload.orderID}`); 
    console.log('EVENT', event);
}

module.exports = {
  pickUp : pickUp,
  inTransit: inTransit,
  delivered: delivered,
};

