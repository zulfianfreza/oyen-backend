const { StatusCodes } = require("http-status-codes");
const NotificationService = require("../services/notificationService");

const index = async (req, res, next) => {
    const result = await NotificationService.getNotification(req);

    res.status(StatusCodes.OK).json({
        status_code: StatusCodes.OK,
        message: "success",
        data: result,
    });
};

module.exports = { index };
