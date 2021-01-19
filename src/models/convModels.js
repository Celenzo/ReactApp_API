'use strict';

module.exports = db => {
    return {
        getConversations() {
            return db.conv.find({ status: true });
        },

        findConv(convid) {
            return db.conv.find({ convid })
        },

        createConv(name) {
            return db.conv.insert({ name });
        },

        closeConv(conv) {
            return db.conv.update(conv);
        }
    }
}