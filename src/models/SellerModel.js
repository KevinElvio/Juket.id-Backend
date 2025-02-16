const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function createSeller(data) {
    return await prisma.seller.create({
        data
    });
}

async function readSeller() {
    return await prisma.seller.findMany();
}

async function readSellerById(id) {
    return await prisma.seller.findUnique({
        where: {
            id: parseInt(id)
        }
    });
}


module.exports = {
    createSeller,
    readSeller,
    readSellerById
}