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

async function readUser() {
    return await prisma.user.findMany();
}

async function updateUser(id, data) {
    return await prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data: data
    });
}

async function findUserByEmail(email) {
    return await prisma.user.findMany({
        where: {
            email: email
        }
    });
}


module.exports = {
    readUser,
    updateUser,
    findUserByEmail
}