const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    mongodbUrl: process.env.URL_MONGODB_DEV,
    jwtSecret: process.env.JWT_SECRET_KEY,
    jwtExpiration: process.env.JWT_EXPIRATION,
    jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
    jwtRefreshTokenExpiration: process.env.JWT_REFRESH_TOKEN_EXPIRATION,
    gmail: process.env.GMAIL,
    password: process.env.PASSWORD,
};
