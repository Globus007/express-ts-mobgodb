"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = require("../config/config");
var logging_1 = require("../logging");
function connect() {
    var dbUrl = config_1.config.db.connection;
    return mongoose_1.default
        .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
        .then(function () {
        logging_1.log.info('Database connected');
    })
        .catch(function (e) {
        logging_1.log.error('Database error', e);
        process.exit(1);
    });
}
exports.connect = connect;
