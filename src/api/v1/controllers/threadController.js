const ThreadService = require("../services/threadService");
const { responseOk, responseCreated } = require("../utils/apiResponse");

const index = async (req, res, next) => {
    try {
        const result = await ThreadService.getThread();

        responseOk(res, "success", result);
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const result = await ThreadService.createThread(req);

        responseCreated(res, "success", result);
    } catch (error) {
        next(error);
    }
};

const findById = async (req, res, next) => {
    try {
        const result = await ThreadService.getThreadById(req);

        responseOk(res, "success", result);
    } catch (error) {
        next(error);
    }
};
const findByCategory = async (req, res, next) => {
    try {
        const result = await ThreadService.getThreadByCategory(req);

        responseOk(res, "success", result);
    } catch (error) {
        next(error);
    }
};
const update = async (req, res, next) => {};
const destroy = async (req, res, next) => {};

module.exports = { index, create, findByCategory, findById, update, destroy };
