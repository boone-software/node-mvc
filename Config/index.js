/**
 * Created by westopher on 10/6/15.
 */
var config = {

    port: 3100,

    production: false,

    providers: {

        mysql: {
            enabled: false,
            host: 'localhost',
            port: 3306,
            database: 'default',
            username: 'root',
            password: 'boone.io'
        },

        mongodb: {
            enabled: false,
            host: 'localhost',
            port: 27019,
            username: null,
            password: null
        },

        redis: {
            enabled: false,
            host: 'localhost',
            port: 6079,
            username: null,
            password: null
        },

        rabbit_mq: {
            enabled: false,
            host: 'localhost',
            port: 5672,
            username: null,
            password: null
        }
    },

    security: {

        https: {
            enabled: false,
            key: '',
            cert: ''
        },

        salt: '5298ghas9820129ufasj18934109asd09fasdtr01'

    }
};

module.exports = config;