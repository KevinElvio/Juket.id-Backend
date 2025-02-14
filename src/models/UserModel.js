const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function readUser() {
    return await prisma.job.findMany(
        {
            where: {
                id: 1
            }
        }
    );
}

module.exports = {
    readUser
}