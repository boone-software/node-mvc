/**
 * Redis Provider
 * Declare dependencies
 */
var config = require('../Config');
var redis = require('redis');
var bluebird = require('bluebird');
/**
 * Build function to return a Redis client if enabled via config
 * @returns {*}
 */
function build () {
    if (config.providers.redis.enabled) {
        // Use Bluebird to make the Redis client promise based rather than callback based
        bluebird.promisifyAll(redis.RedisClient.prototype);
        bluebird.promisifyAll(redis.Multi.prototype);
        return redis.createClient();
    }
    return {};
}

module.exports = build;