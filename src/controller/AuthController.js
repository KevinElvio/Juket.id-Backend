const UsersModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UsersModel.findUserByEmail(email);
        if (user.length === 0) {
            res.status(404).json({
                status: 'failed',
                message: 'Credentials not found'
            });
            return;
        }

        const isPasswordValid = bcrypt.compare(password, user[0].password);

        if (!isPasswordValid) {
            return res.status(401).json({
                status: 'failed',
                message: 'Unauthorized'
            });
        }

        const payload = {
            data: {
                id : user[0].id, 
                email: user[0].email
            }
        };

        const secret = process.env.JWT_SECRET;

        const expiresIn = { expiresIn: '1h' };

        const token = jwt.sign(payload, secret, expiresIn);

        res.status(200).json({
            status: 'success',
            message: 'Login successfully',
            data: user,
            token: `Bearer ${token}`
        });

    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: "Bad request",
            serverMessage: error.message
        });
    }
}

module.exports = {
    login
}