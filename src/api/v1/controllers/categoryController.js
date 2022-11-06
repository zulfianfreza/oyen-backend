const { StatusCodes } = require("http-status-codes");
const CategoryService = require("../services/categoryService");
const { responseOk, responseCreated } = require("../utils/apiResponse");

const index = async (req, res, next) => {
    try {
        const result = await CategoryService.getCategory();

        responseOk(res, "success to get category", result);
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const result = await CategoryService.createCategory(req);

        responseCreated(res, "success to create category", result);
    } catch (error) {
        next(error);
    }
};

const find = async (req, res, next) => {
    try {
        const result = await CategoryService.getOneCategory(req);

        responseOk(res, "success to get category by id", result);
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const result = await CategoryService.updateCategory(req);

        responseOk(res, "success to update category", result);
    } catch (error) {
        next(error);
    }
};

const destroy = async (req, res, next) => {
    try {
        const result = await CategoryService.deleteCategory(req);

        responseOk(res, "success to delete category", result);
    } catch (error) {
        next(error);
    }
};

module.exports = { index, create, find, update, destroy };
