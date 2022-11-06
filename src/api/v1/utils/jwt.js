const jwt = require("jsonwebtoken");
const {
    jwtSecret,
    jwtExpiration,
    jwtRefreshTokenSecret,
    jwtRefreshTokenExpiration,
} = require("../../../config/config");

const createJWT = ({ payload }) => {
    const token = jwt.sign(payload, jwtSecret);

    return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, jwtSecret);

module.exports = { createJWT, isTokenValid };
