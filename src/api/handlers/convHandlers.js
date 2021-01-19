'use strict';

const Boom = require("@hapi/boom");

module.exports = (models) => {
    return {
        getConversations(req, res) {
            return models.convModels
                .getConversations()
                .catch(err => Boom.badImplementation({ message: 'An internal error has occured', data: err }));
        },

        createConv(req, res) {
            return models.convModels
                .createConv(req.payload.name)
                .catch(err => Boom.badImplementation({ message: 'An internal error has occured', data: err }));
        },

        closeConv(req, res) {
            return models.convModels
                .findConv(req.payload.convid)
                .then(conv => {
                    if (!conv) {
                        return Boom.notFound();
                    }
                    conv.status = false;
                    return models.convModels
                        .closeConv(conv)
                })
                .catch(err => {
                    console.log(err);
                    return Boom.badImplementation({ message: 'An internal error has occured', data: err })
                });
        }
    }
}