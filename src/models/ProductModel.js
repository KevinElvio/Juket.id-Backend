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

module.exports = {
    createProduct,
    readProduct
}