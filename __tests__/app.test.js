'use strict';


const faker = require('faker');

const events = require('../events.js');

const driver = require('../Modules/driver/driver-handlers.js');

const vendor = require('../Modules/vendor/vendor-handlers.js');

let order = {
  store: 'storeName',
  orderID: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: `${faker.address.cityName()}, ${faker.address.countryCode()}`,
};


describe('CAPS', () => {

  test('TEST 1 🧪: Should console log the pickup details, when pickup event is on', () => {
    events.emit('pickup', order);
    events.on('pickup', vendor.pickUp);
    let eventPickup = {
      event : 'pickup',
      time: new Date(),
      payload: order,
    };
  
    const consoleSpy = jest.spyOn(console, 'log');
    vendor.pickUp(order);
    expect(consoleSpy).toHaveBeenCalledWith('EVENT', eventPickup);
  });
  
  test(`TEST 2 🧪: Should console log that the DRIVER: picked up ${order.orderID}, when pickup event is on`, () => {
    events.emit('pickup', order);
    events.on('pickup', driver.pickUp);
    const consoleSpy = jest.spyOn(console, 'log');
    driver.pickUp({order});
    expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: picked up ${order.orderID}`);
  });

  test('TEST 3 🧪: Should console log the in-transit details, when in-transit event is on', () => {
    let eventInTransit = {
      event : 'in-transit',
      time: new Date(),
      payload: order,
    };

    const consoleSpy = jest.spyOn(console, 'log');
    vendor.inTransit(order);
    expect(consoleSpy).toHaveBeenCalledWith('EVENT', eventInTransit);
  });

  test(`TEST 4 🧪: Should console log that the DRIVER: delivered up ${order.orderID}, when delivered event is on`, () => {
    events.emit('delivered', order);
    events.on('delivered', driver.delivered);
    const consoleSpy = jest.spyOn(console, 'log');
    driver.delivered(order);
    expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: delivered up ${order.orderID}`);
  });

  test('TEST 5 🧪: Should been called with the previous console log', () => {
    let event = {
      event : 'delivered',
      time: new Date(),
      payload: order,
    };
    const consoleSpy = jest.spyOn(console, 'log');
    vendor.delivered(event);
    expect(consoleSpy).toHaveBeenCalledTimes(7);
  });
});