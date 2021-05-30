'use strict';

require('dotenv').config();

// used to create a random fake data
const faker = require('faker');

const events = require('../../events.js');

const handlers = require('./vendor-handlers.js');

const storeName = process.env.STORE

events.on('pickup', handlers.pickUp);

events.on('in-transit', handlers.inTransit);

events.on('delivered', handlers.delivered);

let order ={};

setInterval(() => {
    order = {
        store: storeName,
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: `${faker.address.cityName()}, ${faker.address.countryCode()}`,
    }
    events.emit('EVENT', order);
}, 5000);// 5 seconds

setInterval(() => {
    events.emit('in-transit', order);
}, 6000);// 6 seconds

setInterval(() => {
    events.emit('delivered', order);
}, 9000);// 9 seconds