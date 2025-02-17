const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCategory = async (data) => {
    return await prisma.category.create({
        data
    });
}

module.exports = {
    createCategory
}