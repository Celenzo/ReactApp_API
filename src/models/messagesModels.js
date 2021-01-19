'use strict';

module.exports = db => {
    return {

        getMessages(convid) {
            return db.messages.find({ convid }, { order: [{ field: 'date', direction: 'asc' }]});
        },

        addMessage(msg) {
            console.log(msg)
            return db.messages.insert(msg);
        }

    }
}
//