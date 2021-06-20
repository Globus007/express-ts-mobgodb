"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var config_1 = require("./config/config");
var routes_1 = require("./routes/routes");
var logging_1 = require("./logging");
var connect_1 = require("./db/connect");
var errorhandler_1 = require("./middleware/errorhandler");
var port = config_1.config.server.port;
var host = config_1.config.server.hostname;
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(morgan_1.default('short'));
app.use(cors_1.default());
app.use('/todos/', routes_1.router);
app.use(errorhandler_1.errorHandler);
app.get('*', function (req, res) {
    res.sendStatus(404);
});
app.listen(port, host, function () {
    logging_1.log.info("Runing at http://" + host + ":" + port);
    connect_1.connect();
});
