"use strict";
const http_status_codes_1 = require("http-status-codes");
const notfound = (req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send({
        success: false,
        message: "Api is not found",
        error: {
            path: req.originalUrl,
            message: "your request path is not found",
        },
    });
};
module.exports = notfound;
