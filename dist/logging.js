"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
var pino_1 = __importDefault(require("pino"));
var dayjs_1 = __importDefault(require("dayjs"));
exports.log = pino_1.default({
    prettyPrint: true,
    base: {
        pid: false,
    },
    timestamp: function () { return ",\"time\":\"" + dayjs_1.default().format() + "\""; },
});
