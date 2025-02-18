const categoryModel = require('../models/CategoryModel');

const create = async (req, res) => {
    const data = req.body;
    try {
        const category = await categoryModel.createCategory(data);
        res.status(201).json({
            status: 'success',
            message: 'Category create successfully',
            data: category
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Bad request",
            serverMessage: error.message
        });
    }
};

const read = async (req, res) => {
    try {
        const category = await categoryModel.readCategory();
        res.status(201).json({
            status: 'success',
            message: 'Category create successfully',
            data: category
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
    const { id } = req.params;
    const data = req.body;
    try {
        const category = await categoryModel.updateCategory(id, data);
        res.status(200).json({
            status: 'success',
            message: 'Category update successfully',
            data: category
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
    update
};