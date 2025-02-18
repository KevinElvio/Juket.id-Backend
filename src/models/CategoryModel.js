const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCategory = async (data) => {
    return await prisma.category.create({
        data
    });
}

const readCategory = async () => {
    return await prisma.category.findMany();
}

module.exports = {
    createCategory,
    readCategory
}