const UsersModel = require('../models/UserModel');

const readUser = async (req, res) => {
    try {
        const users = await UsersModel.readUser();
        if (users.length === 0) {
            return res.status(404).json({
                status: 'failed',
                message: 'User not found'
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'User retrieved successfully',
            data: users
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Bad request",
            serverMessage: error.message
        });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        if(data.password == null || data.password == ''){
            return res.status(400).json({
                status: 'failed',
                message: 'Password is required'
            });
        }
        const user = await UsersModel.updateUser(id, data);
        res.status(200).json({
            status: 'success',
            message: 'User update password successfully',
            data: user
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Bad request",
            serverMessage: error.message
        });
    }
}

module.exports = {
    readUser,
    updateUser
}