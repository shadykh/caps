'use strict';

const events = require('./events.js');

require('./Modules/vendor/vendor.js');

require('./Modules/driver/driver.js');

events.on('EVENT', (payload) => {//on is for listening

  events.emit('pickup', { order: payload });

});

