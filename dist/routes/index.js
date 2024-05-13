"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const mainRouter = (0, express_1.Router)();
mainRouter.get('/', controllers_1.main);
exports.default = mainRouter;
