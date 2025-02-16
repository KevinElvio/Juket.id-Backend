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


module.exports = {
    createSeller,
    readSeller
}