'use strict';

module.exports = db => {
    return {

        getMessages(convid) {
            return db.messages.find({ convid }, { order: [{ date: 'desc' }]});
        },

        adMessage(msg) {
            return db.messages.insert(msg);
        }

    }
}