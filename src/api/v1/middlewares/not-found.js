const notFoundMiddleware = (req, res) => {
    res.status(404).send({ message: "Route doesn't exist" });
};

module.exports = notFoundMiddleware;
