const { StatusCodes } = require("http-status-codes");
const CommentService = require("../services/commentService");
const { responseOk, responseCreated } = require("../utils/apiResponse");

const add = async (req, res, next) => {
    try {
        const result = await CommentService.addComment(req);

        responseCreated(res, "success", result);
    } catch (error) {
        next(error);
    }
};

const destroy = async (req, res, next) => {
    try {
        const result = await CommentService.deleteComment(req);

        responseOk(res, "success", result);
    } catch (error) {
        next(error);
    }
};

module.exports = { add, destroy };
