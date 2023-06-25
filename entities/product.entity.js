const { EntitySchema } = require('typeorm');

const Products = new EntitySchema({
    name: 'Products',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        name: {
            type: 'varchar',
        },
    },
});

module.exports = Products;
