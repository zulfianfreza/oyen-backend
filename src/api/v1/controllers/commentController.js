const CommentService = require("../services/commentService");
const { responseOk, responseCreated } = require("../utils/apiResponse");

const getComment = async (req, res, next) => {
    try {
        const result = await CommentService.getComment(req);

        responseCreated(res, "success", result);
    } catch (error) {
        next(error);
    }
};

const addComment = async (req, res, next) => {
    try {
        const result = await CommentService.addComment(req);

        responseCreated(res, "success", result);
    } catch (error) {
        next(error);
    }
};

const addReply = async (req, res, next) => {
    try {
        const result = await CommentService.addReply(req);

        responseCreated(res, "success", result);
    } catch (error) {
        next(error);
    }
};

const destroyComment = async (req, res, next) => {
    try {
        const result = await CommentService.deleteComment(req);

        responseOk(res, "success", result);
    } catch (error) {
        next(error);
    }
};

const destroyReply = async (req, res, next) => {
    try {
        const result = await CommentService.deleteReply(req);

        responseOk(res, "success", result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addComment,
    addReply,
    destroyComment,
    destroyReply,
    getComment,
};
