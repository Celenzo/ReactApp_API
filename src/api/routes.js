'use strict';

module.exports = (server, handlers, validations) => {

    server.route({
        method: 'GET',
        path: '/conversations',
        config: {
            handler: handlers.convHandlers.getConversations,
            notes: 'Get conversations with an opened status',
            description: 'Get conversations',
            tags: ['api']
        }
    });

    server.route({
        method: 'GET',
        path: '/conversations/{convid}',
        config: {
            handler: handlers.messageHandlers.getMessages,
            notes: 'Get all messages for one conversation which ID must be specified in the parameters',
            description: 'Get messages for one conversation',
            tags: ['api']
        }
    });

    server.route({
        method: 'POST',
        path: '/conversations',
        config: {
            handler: handlers.convHandlers.createConv,
            notes: 'Create a new conversation and assigning a name',
            description: 'Create conversation',
            tags: ['api'],
            validate: validations.createConv 
        }
    });

    server.route({
        method: 'POST',
        path: '/conversations/{convid}',
        config: {
            handler: handlers.messageHandlers.addMessage,
            notes: 'Adds a new messsage to the conversation. Convid must be specified as a URI parameter and message mut be in payload',
            description: 'Add new message',
            tags: ['api'],
            validate: validations.addMessage
        }
    });

    server.route({
        method: 'PUT',
        path: '/conversations/close',
        config: {
            handler: handlers.convHandlers.closeConv,
            notes: 'Close a conversation by changing its status to false, which corresponds to closed',
            description: 'Close conversation',
            tags: ['api'],
            validate: validations.updateConv
        }
    });

}