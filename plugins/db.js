const { DataSource } = require('typeorm');
const fp = require('fastify-plugin');

const Products = require('../entities/product.entity');

const configuration = require('../configs/env.config');

const myDataSource = new DataSource({
    type: configuration.type,
    host: configuration.host,
    port: configuration.port,
    username: configuration.username,
    password: configuration.password,
    database: configuration.database,
    entities: [Products],
    // logging: true,
    synchronize: true,
});

module.exports = fp(async function (fastify, opts, done) {
    myDataSource
        .initialize()
        .then(() => {
            console.log('Data Source has been initialized!');
        })
        .catch((err) => {
            console.error('Error during Data Source initialization:', err);
        });
    fastify.decorate('db', myDataSource);
    done();
});
