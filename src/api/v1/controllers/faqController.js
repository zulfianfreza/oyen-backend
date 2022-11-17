const { StatusCodes } = require("http-status-codes");
const FaqService = require("../services/faqService");
const { responseOk } = require("../utils/apiResponse");

const index = async (req, res, next) => {
    const result = await FaqService.getFaq();

    res.status(StatusCodes.OK).json({
        status_code: StatusCodes.OK,
        message: "success",
        data: result,
    });
};

const create = async (req, res, next) => {
    const result = await FaqService.createFaq(req);

    res.status(StatusCodes.CREATED).json({
        status_code: StatusCodes.CREATED,
        message: "success",
        data: result,
    });
};

const find = async (req, res, next) => {
    try {
        const result = await FaqService.getOneFaq(req);

        responseOk(res, "success", result);
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    const result = await FaqService.updateFaq(req);

    res.status(StatusCodes.OK).json({
        status_code: StatusCodes.OK,
        message: "success",
        data: result,
    });
};

const destroy = async (req, res, next) => {
    try {
        const result = await FaqService.deleteFaq(req);

        responseOk(res, "success", result);
    } catch (error) {
        next(error);
    }
};

module.exports = { index, create, find, update, destroy };
