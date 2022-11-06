const { UnauthenticatedError, UnauthorizedError } = require("../errors");
const { isTokenValid } = require("../utils");

const authenticateAdmin = (req, res, next) => {
    try {
        let token;

        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
        }

        if (!token) throw new UnauthenticatedError("Authentication invalid");

        const payload = isTokenValid({ token });

        req.admin = {
            id: payload.adminId,
            name: payload.name,
            email: payload.email,
            password: payload.password,
        };

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = { authenticateAdmin };
