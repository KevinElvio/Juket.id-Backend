const productModel = require('../models/ProductModel');

const create = async (req, res) => {
    const data = req.body;
    try {
        if (req.file) {
            data.image = req.file.path
        }
        const parse = {
            name: data.name,
            description: data.description,
            price: data.price,
            image: data.image,
            sellerId: parseInt(data.sellerId),
            categoryId: parseInt(data.categoryId)
        }
        const product = await productModel.createProduct(parse);
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
            data: products.map(product => {
                id = product.id;
                name = product.name;
                description = product.description;
                price = product.price;
                image = product.image.split(",");
                createdAt = product.createdAt;
                updatedAt = product.updatedAt;
                sellerId = product.sellerId;
                categoryId = product.categoryId;
                return { id, name, description, price, image, createdAt, updatedAt, sellerId, categoryId };
            }) 
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
            data: product.map(product => {
                id = product.id;
                name = product.name;
                description = product.description;
                price = product.price;
                image = product.image.split(",");
                createdAt = product.createdAt;
                updatedAt = product.updatedAt;
                sellerId = product.sellerId;
                categoryId = product.categoryId;
                return { id, name, description, price, image, createdAt, updatedAt, sellerId, categoryId };
            }) 
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Bad request",
            serverMessage: error.message
        });
    }
}

const update = async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    try {
        if (!await productModel.readProductById(id)) {
            res.status(404).json({
                status: 'failed',
                message: 'Product not found'
            });
            return;
        }
        const product = await productModel.updateProduct(id, data);
        res.status(200).json({
            status: 'success',
            message: 'Product updated successfully',
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

const destroy = async (req, res) => {
    const {id} = req.params;
    try {
        if (!await productModel.readProductById(id)) {
            res.status(404).json({
                status: 'failed',
                message: 'Product not found'
            });
            return;
        }
        await productModel.deleteProduct(id);
        res.status(200).json({
            status: 'success',
            message: 'Product deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Bad request",
            serverMessage: error.message
        });
    }
}

const search = async (req, res) => {
    const {search} = req.query;
    try {
        const products = await productModel.searchProduct(search);
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

module.exports = {
    create,
    read,
    readById,
    update,
    destroy,
    search
}