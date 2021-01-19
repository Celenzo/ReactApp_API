'use strict';

module.exports = (models) => {

    return {
        
        getMessages() {
            return models.messagesModels
                .getMessages(req.params.convid)
                .catch(err => Boom.badImplementation({ message: 'An internal error has occured', data: err }));
        },

        addMessage() {
            return models.convModels
                .findConv(req.params.convid)
                .then(conv => {
                    if (!conv) {
                        return Boom.notFound();
                    }
                    return models.messagesModels
                        .addMessage({ convid: req.params.convid, msg: req.payload.message })
                })
                .catch(err => Boom.badImplementation({ message: 'An internal error has occured', data: err }));
        }
    }

}