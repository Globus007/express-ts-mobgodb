"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var config_1 = require("./config/config");
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(morgan_1.default('short'));
app.use(cors_1.default);
app.get('/', function (request, responce) {
    responce.send('Hello world!');
});
app.listen(config_1.config.server.port, function () { return console.log("Runing on port " + config_1.config.server.port); });
