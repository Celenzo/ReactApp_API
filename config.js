'use strict';

module.exports = () => {
    return require('common-env')().getOrElseAll({
        api: {
            host: '0.0.0.0',
            port: 8568
        },
        postgres: {
            host: '127.0.0.1',
            port: 5432,
            database: 'reactappdb',
            user: 'postgres',
            password: 'postgres'
        }
    });
}
