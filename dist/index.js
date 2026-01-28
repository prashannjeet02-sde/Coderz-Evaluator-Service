"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_config_1 = __importDefault(require("./config/server.config"));
const app = (0, express_1.default)();
const PORT = server_config_1.default.PORT;
// Routes
const routes_1 = __importDefault(require("./routes"));
app.use("/api", routes_1.default);
app.listen(PORT, () => {
    console.log(`Server listening to PORT:${PORT}`);
});
