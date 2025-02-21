// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

const {PrismaClient } = require ("@prisma/client");
const { PrismaLibSQL } = require ("@prisma/adapter-libsql");
const { createClient } = require ("@libsql/client");

const libsql = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

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