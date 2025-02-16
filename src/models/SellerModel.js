const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function createSeller(data) {
    return await prisma.seller.create({
        data
    });
}


module.exports = {
    createSeller
}