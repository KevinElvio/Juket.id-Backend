const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createProduct(data) {
    return await prisma.product.create({
        data
    });
}

async function readProduct() {
    return await prisma.product.findMany();
}

async function readProductById(id) {
    return await prisma.product.findUnique({
        where: {
            id: parseInt(id)
        }
    });
}

async function updateProduct(id, data) {
    return await prisma.product.update({
        where: {
            id: parseInt(id)
        },
        data
    });
}

module.exports = {
    createProduct,
    readProduct,
    readProductById,
    updateProduct
}