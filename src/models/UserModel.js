const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function readUser() {
    return await prisma.user.findMany();
}

module.exports = {
    readUser
}