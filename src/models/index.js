'use strict';

const massive = require("massive");
const messagesModels = require("./messagesModels");

module.exports = (config, server) => {
    return massive(config.postgres).then(db => {
        return {
            convModels: require('./convModels')(db),
            messagesModels: require('./messagesModels')(db)
        }
    });
}