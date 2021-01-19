'use strict';

module.exports = db => {
    return {
        getConversations() {
            return db.conv.find({ status: true });
        },

        findConv(id) {
            return db.conv.findOne({ id })
        },

        createConv(name) {
            return db.conv.insert({ name });
        },

        closeConv(conv) {
            return db.conv.update({ id: conv.id }, { status: conv.status });
        }
    }
}