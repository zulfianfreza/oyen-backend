const { StatusCodes } = require("http-status-codes");
const BookmarkService = require("../services/bookmarkService");
const { responseOk, responseCreated } = require("../utils/apiResponse");

const add = async (req, res, next) => {
    try {
        const result = await BookmarkService.addBookmark(req);

        responseCreated(res, "success", result);
    } catch (error) {
        next(error);
    }
};

const destroy = async (req, res, next) => {
    try {
        const result = await BookmarkService.deleteBookmark(req);

        responseOk(res, "success", result);
    } catch (error) {
        next(error);
    }
};

module.exports = { add, destroy };
