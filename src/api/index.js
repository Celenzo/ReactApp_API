'use strict';

module.exports = (config, server, models) => {
    const handlers = require('./handlers')(models);
    const validations = require('./validations')();
    return require('./routes')(server, handlers, validations);
}