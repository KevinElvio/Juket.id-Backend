const sellerModel = require('../models/SellerModel');

const create = async (req, res) => {
    const data = req.body;
    try {
        const seller = await sellerModel.createSeller(data);
        res.status(201).json({
            status: 'success',
            message: 'Seller create successfully',
            data: seller
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
    create
}