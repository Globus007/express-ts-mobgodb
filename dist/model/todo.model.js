"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoModel = void 0;
var mongoose_1 = require("mongoose");
var todoSchema = new mongoose_1.Schema({
    message: { type: String, required: true },
    completed: { type: Boolean, default: false },
}, { timestamps: true });
exports.todoModel = mongoose_1.model('Todo', todoSchema);
