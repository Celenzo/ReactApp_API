'use strict';

const Boom = require("@hapi/boom");

module.exports = (models) => {

    return {
        
        getMessages(req, res) {
            return models.messagesModels
                .getMessages(req.params.convid)
                .catch(err => {
                    console.log('err');
                    //return Boom.badImplementation({ message: 'An internal error has occured', data: err })
                });
        },

        addMessage(req, res) {
            return models.convModels
                .findConv(req.params.convid)
                .then(conv => {
                    if (!conv) {
                        return Boom.notFound();
                    }
                    return models.messagesModels
                        .addMessage({ convid: req.params.convid, msg: req.payload.msg })
                })
                .catch(err => Boom.badImplementation({ message: 'An internal error has occured', data: err }));
        }
    }

}