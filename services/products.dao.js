const fp = require('fastify-plugin');
const ProductsEntity = require('../entities/product.entity');

const ProductsDAO = (db) => {
    const createProduct = async (name) => {
        const product = db.getRepository(ProductsEntity).create({ name });
        return await db.getRepository(ProductsEntity).save(product);
    };

    const getAllProducts = async () => {
        const products = await db.getRepository(ProductsEntity).find();
        return products;
    };

    const getProductById = async (id) => {
        const product = await db.getRepository(ProductsEntity).findOneBy({
            id: id,
        });
        return product;
    };

    const updateProduct = async (id, name) => {
        const product = await getProductById(id);
        product.name = name;
        return await db.getRepository(ProductsEntity).save(product);
    };

    const deleteProduct = async (id) => {
        await db.getRepository(ProductsEntity).delete(id);
    };

    return {
        createProduct,
        getAllProducts,
        getProductById,
        updateProduct,
        deleteProduct,
    };
};

module.exports = fp((fastify, options, next) => {
    fastify.decorate('productsDAO', ProductsDAO(fastify.db));
    next();
});
