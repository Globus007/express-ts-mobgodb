"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoHandler = exports.updateTodoHandler = exports.createTodoHandler = exports.getTodoByIdHandler = exports.getTodosHandler = void 0;
var jsonstream_1 = __importDefault(require("jsonstream"));
var todo_service_1 = require("../service/todo.service");
function getTodosHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (req.query.page) {
                return [2 /*return*/, getTodosPaginateHandler(req, res)];
            }
            todo_service_1.getTodosStream().pipe(jsonstream_1.default.stringify()).pipe(res.status(200).type('json'));
            return [2 /*return*/];
        });
    });
}
exports.getTodosHandler = getTodosHandler;
function getTodoByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, todo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, todo_service_1.getTodo(id)];
                case 1:
                    todo = _a.sent();
                    if (todo) {
                        res.status(200).send(todo);
                    }
                    res.sendStatus(404);
                    return [2 /*return*/];
            }
        });
    });
}
exports.getTodoByIdHandler = getTodoByIdHandler;
function createTodoHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var todo;
        return __generator(this, function (_a) {
            todo = req.body;
            todo_service_1.saveTodo(todo);
            res.sendStatus(201);
            return [2 /*return*/];
        });
    });
}
exports.createTodoHandler = createTodoHandler;
function updateTodoHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newTodo, id, todo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newTodo = req.body;
                    id = req.params.id;
                    return [4 /*yield*/, todo_service_1.getTodo(id)];
                case 1:
                    todo = _a.sent();
                    if (!todo) {
                        res.sendStatus(404);
                    }
                    return [4 /*yield*/, todo_service_1.updateTodo(id, newTodo)];
                case 2:
                    _a.sent();
                    res.sendStatus(204);
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateTodoHandler = updateTodoHandler;
function deleteTodoHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, deletedTodo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, todo_service_1.getTodo(id)];
                case 1:
                    deletedTodo = _a.sent();
                    if (!deletedTodo) {
                        res.sendStatus(404);
                    }
                    return [4 /*yield*/, todo_service_1.deleteTodo(id)];
                case 2:
                    _a.sent();
                    res.sendStatus(204);
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteTodoHandler = deleteTodoHandler;
function getTodosPaginateHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, page, _c, limit, todos;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = req.query, _b = _a.page, page = _b === void 0 ? 0 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c;
                    return [4 /*yield*/, todo_service_1.getTodosPage(+page, +limit)];
                case 1:
                    todos = _d.sent();
                    res.status(200).send(todos);
                    return [2 /*return*/];
            }
        });
    });
}
