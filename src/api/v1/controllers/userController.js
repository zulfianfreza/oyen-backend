const UserService = require("../services/userService");

const profile = async (req, res, next) => {
    const result = await UserService.getProfile(req);

    res.status(StatusCodes.OK).json({
        status_code: StatusCodes.OK,
        message: "success",
        data: result,
    });
};
