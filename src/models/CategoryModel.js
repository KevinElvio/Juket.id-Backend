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

const updateCategory = async (id, data) => {
    return await prisma.category.update({
        where: {
            id: parseInt(id)
        },
        data
    });
}

module.exports = {
    createCategory,
    readCategory,
    updateCategory
}