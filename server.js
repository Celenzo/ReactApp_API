'use strict';

const hapi = require('@hapi/hapi');
const config = require('./config')();

const init = async () => {

    try {
        const server = new hapi.Server({
            host: config.api.host,
            port: config.api.port,
            routes: { cors: true }
        });

        require('./src')(config, server);
        await server.start();
        return server;

    } catch (err) {
        throw err;
    }

}

init().then(server => {
    console.log(`Console is running at ${server.info.uri}`);
}).catch(err => {
    console.error(err);
    process.exit(1);
})