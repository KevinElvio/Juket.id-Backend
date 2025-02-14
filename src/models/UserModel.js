const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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

module.exports = {
    readUser,
    updateUser
}