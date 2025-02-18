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

const deleteCategory = async (id) => {
    return await prisma.category.delete({
        where: {
            id: parseInt(id)
        }
    });
}

module.exports = {
    createCategory,
    readCategory,
    updateCategory,
    deleteCategory
}