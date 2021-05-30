'use strict';


const events = require('../../events.js');

const handlers = require('./driver-handlers.js');

events.on('pickup', handlers.pickUp);

events.on('delivered', handlers.delivered);

