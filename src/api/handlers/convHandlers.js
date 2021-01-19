'use strict';

const { Boom } = require("@hapi/boom");

module.exports = (models) => {
    return {
        getConversations() {
            return models.convModels
                .getConversations()
                .catch(err => Boom.badImplementation({ message: 'An internal error has occured', data: err }));
        },

        createConv() {
            return models.convModels
                .createConv(req.payload.name)
                .catch(err => Boom.badImplementation({ message: 'An internal error has occured', data: err }));
        },

        closeConv() {
            return models.convModels
                .findConv(req.payload.convid)
                .then(conv => {
                    if (!conv) {
                        return Boom.notFound();
                    }
                    return models.convModels
                        .closeConv(req.payload)
                })
                .catch(err => Boom.badImplementation({ message: 'An internal error has occured', data: err }));
        }
    }
}