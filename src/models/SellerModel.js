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

async function updateSeller(id, data) {
    return await prisma.seller.update({
        where: {
            id: parseInt(id)
        },
        data
    });
}

async function deleteSeller(id) {
    return await prisma.seller.delete({
        where: {
            id: parseInt(id)
        }
    });
}


module.exports = {
    createSeller,
    readSeller,
    readSellerById,
    updateSeller,
    deleteSeller
}