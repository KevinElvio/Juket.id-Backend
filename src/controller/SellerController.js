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

const read = async (req, res) => {
    try {
        const sellers = await sellerModel.readSeller();
        if (sellers.length === 0) {
            return res.status(404).json({
                status: 'failed',
                message: 'Seller not found'
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Seller retrieved successfully',
            data: sellers
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Bad request",
            serverMessage: error.message
        });
    }
}

const readById = async (req, res) => {
    const { id } = req.params;
    try {
        const seller = await sellerModel.readSellerById(id);
        if (seller === null) {
            return res.status(404).json({
                status: 'failed',
                message: 'Seller not found'
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Seller retrieved successfully',
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

const update = async(req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const seller = await sellerModel.updateSeller(id, data);
        res.status(200).json({
            status: 'success',
            message: 'Seller update successfully',
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

const destroy = async(req, res) => {
    const { id } = req.params;
    try {
        const seller = await sellerModel.deleteSeller(id);
        res.status(200).json({
            status: 'success',
            message: 'Seller delete successfully',
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
    create,
    read,
    readById,
    update,
    destroy
}