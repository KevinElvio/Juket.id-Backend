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

async function deleteProduct(id) {
    return await prisma.product.delete({
        where: {
            id: parseInt(id)
        }
    });
}

async function searchProduct(search) {
    if (!search) {
        return [];
    }
    return await prisma.product.findMany({
        where: search
            ? {
                OR: [
                    { name: { contains: search } },
                    { description: { contains: search } },
                ],
            }
            : {},
    });
}

module.exports = {
    createProduct,
    readProduct,
    readProductById,
    updateProduct,
    deleteProduct,
    searchProduct
}