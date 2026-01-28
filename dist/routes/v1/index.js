"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sample_controller_1 = require("../../controller/sample.controller");
const sampleRouter = express_1.default.Router();
sampleRouter.get("/sample", sample_controller_1.sampleRequest);
exports.default = sampleRouter;
