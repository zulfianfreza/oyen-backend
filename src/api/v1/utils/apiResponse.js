const { StatusCodes } = require("http-status-codes");

const responseOk = async (res, message, data) => {
    res.status(StatusCodes.OK).json({
        status_code: StatusCodes.OK,
        message,
        data,
    });
};

const responseAccepted = async (res, { message, data }) => {
    res.status(StatusCodes.ACCEPTED).json({
        status_code: StatusCodes.ACCEPTED,
        message,
        data,
    });
};
const responseCreated = async (res, message, data) => {
    res.status(StatusCodes.CREATED).json({
        status_code: StatusCodes.CREATED,
        message,
        data,
    });
};

module.exports = { responseOk, responseAccepted, responseCreated };
