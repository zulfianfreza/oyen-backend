const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCodes: err.statusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || "Something went wrong try again later",
    };

    if (err.name === "ValidationError") {
        customError.message = Object.values(err.errors)
            .map((item) => item.message)
            .join(", ");
        customError.statusCodes = 400;
    }

    if (err.code && err.code == 11000) {
        customError.message = `Duplicate value entered for ${Object.keys(
            err.keyValue
        )} field, please choose another value`;
        customError.statusCodes = 400;
    }

    if (err.name === "CastError") {
        customError.message = `No item found with id: ${err.value}`;
        customError.statusCodes = 400;
    }

    return res
        .status(customError.statusCodes)
        .json({ message: customError.message });
};

module.exports = errorHandlerMiddleware;
