'use strict';

module.exports = (models) => {
    return {
        convHandlers: require('./convHandlers')(models),
        messageHandlers: require('./messageHandlers')(models)
    };
}