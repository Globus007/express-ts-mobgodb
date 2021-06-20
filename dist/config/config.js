"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var SERVER_PORT = process.env.SERVER_PORT || 300;
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
var DB_CONNECTION = process.env.DB_CONNECTION || '';
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
};
var DB = {
    connection: DB_CONNECTION,
};
exports.config = { server: SERVER, db: DB };
