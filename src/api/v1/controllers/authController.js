const { StatusCodes } = require("http-status-codes");
const Admin = require("../models/adminModel");
const User = require("../models/userModel");
const AuthService = require("../services/authService");
const { responseOk, responseAccepted } = require("../utils/apiResponse");
const signinAdmin = async (req, res, next) => {
    try {
        const result = await AuthService.signinAdmin(req);

        responseOk(res, "success to signin admin", result);
    } catch (error) {
        next(error);
    }
};

const signupUser = async (req, res, next) => {
    try {
        const result = await AuthService.signupUser(req);

        responseAccepted(res, "success to signup user", result);
    } catch (error) {
        next(error);
    }
};

const signinUser = async (req, res, next) => {
    try {
        const result = await AuthService.signinUser(req);

        responseOk(res, "success to signin user", result);
    } catch (error) {
        next(error);
    }
};

module.exports = { signinAdmin, signinUser, signupUser };
