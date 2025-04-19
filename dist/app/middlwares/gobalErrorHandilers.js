"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gobalErrorHandiler = (err, req, res, next) => {
    const statusCode = 500;
    const message = (err === null || err === void 0 ? void 0 : err.message) || "somthing waent wrong";
    res.status(statusCode).json({
        success: false,
        message,
        error: err,
    });
};
exports.default = gobalErrorHandiler;
