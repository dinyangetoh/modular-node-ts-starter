"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todosController_1 = require("../controllers/todosController");
const router = (0, express_1.Router)();
const todoController = new todosController_1.TodoController();
router.get('/todo/', todoController.listTodos);
router.get('/todo/view', todoController.getTodo);
exports.default = router;
