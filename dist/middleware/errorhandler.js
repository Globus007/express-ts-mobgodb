"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.handleError = void 0;
var logging_1 = require("../logging");
function handleError(fn) {
    return function (req, res, next) {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}
exports.handleError = handleError;
function errorHandler(err, req, res, next) {
    logging_1.log.error(err);
    res.status(500).send({ message: 'Something went wrong' });
}
exports.errorHandler = errorHandler;
