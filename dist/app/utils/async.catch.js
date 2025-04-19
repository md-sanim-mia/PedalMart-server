"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncCatch = (fan) => {
    return (req, res, next) => {
        Promise.resolve(fan(req, res, next)).catch((error) => next(error));
    };
};
exports.default = asyncCatch;
