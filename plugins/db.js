const fp = require('fastify-plugin');
const pgp = require('pg-promise')();

const configuration = require('../configs/env.config');

module.exports = fp(function (fastify, opts, done) {
    const db = pgp(configuration.databaseUri);
    fastify.decorate('db', db);
    done();
});
