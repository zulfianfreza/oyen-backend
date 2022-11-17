const Admin = require("../models/adminModel");
const User = require("../models/userModel");
const { BadRequestError, UnauthorizedError } = require("../errors");
const { createJWT, createTokenUser, createTokenAdmin } = require("../utils");

const signinAdmin = async (req) => {
    const { email, password } = req.body;

    if (!email || !password)
        throw new BadRequestError("Please provide email and password");

    const result = await Admin.findOne({ email });

    if (!result) throw new UnauthorizedError("Invalid credentials");

    const isCorrectPassword = await result.comparePassword(password);

    if (!isCorrectPassword) throw new UnauthorizedError("Invalid credentials");

    const token = createJWT({ payload: createTokenAdmin(result) });

    return { token };
};

const signinUser = async (req) => {
    const { email, password } = req.body;

    if (!email || !password)
        throw new BadRequestError("Please provide email and password");

    const result = await User.findOne({ email });

    if (!result) throw new UnauthorizedError("Invalid credentials");

    const isCorrectPassword = await result.comparePassword(password);

    if (!isCorrectPassword) throw new UnauthorizedError("Invalid credential");

    const token = createJWT({ payload: createTokenUser(result) });

    return { token };
};

const signupUser = async (req) => {
    const {
        firstname,
        lastname,
        email,
        password,
        no_telephone,
        gender,
        date_of_birth,
    } = req.body;

    const check = await User.findOne({ email });

    if (check)
        throw new BadRequestError(
            "Email sudah ada, silahkan gunakan email yang lain"
        );

    const result = await User.create({
        firstname,
        lastname,
        email,
        password,
        no_telephone,
        gender,
        date_of_birth,
    });

    return result;
};

module.exports = { signinAdmin, signinUser, signupUser };
