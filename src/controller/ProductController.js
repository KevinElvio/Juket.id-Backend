const productModel = require('../models/ProductModel');

const create = async (req, res) => {
    const data = req.body;
    try {
        const product = await productModel.createProduct(data);
        res.status(201).json({
            status: 'success',
            message: 'Product created successfully',
            data: product
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
        const products = await productModel.readProduct();
        res.status(200).json({
            status: 'success',
            message: 'Products retrieved successfully',
            data: products
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
    const {id} = req.params;
    try {
        const product = await productModel.readProductById(id);
        res.status(200).json({
            status: 'success',
            message: 'Product retrieved successfully',
            data: product
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
    readById
}