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

        if (payload.accountType != "admin")
            throw new UnauthorizedError("Unauthorized to access this route");

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

const authenticateUser = (req, res, next) => {
    try {
        let token;

        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
        }

        if (!token) throw new UnauthenticatedError("Authentication invalid");

        const payload = isTokenValid({ token });

        if (payload.accountType != "user")
            throw new UnauthorizedError("Unauthorized to access this route");

        req.user = {
            id: payload.userId,
            firstname: payload.firstname,
            lastname: payload.lastname,
            email: payload.email,
            password: payload.password,
            no_telephone: payload.no_telephone,
            gender: payload.gender,
            date_of_birth: payload.date_of_birth,
            job: payload.job,
            bio: payload.bio,
            profile_picture: payload.profile_picture,
            role: payload.role,
        };

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = { authenticateAdmin, authenticateUser };
