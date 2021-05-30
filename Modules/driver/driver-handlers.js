'use strict';

function pickUp(payload){
  console.log(`DRIVER: picked up ${payload.order.orderID}`);
}

function delivered(payload){
  console.log(`DRIVER: delivered up ${payload.orderID}`); 
}

module.exports = {
  pickUp : pickUp,
  delivered: delivered,
};

