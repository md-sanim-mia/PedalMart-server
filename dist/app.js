"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./app/routers"));
const gobalErrorHandilers_1 = __importDefault(require("./app/middlwares/gobalErrorHandilers"));
const not_found_1 = __importDefault(require("./app/middlwares/not.found"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send({
        message: "padal mart server is run  ",
    });
});
app.use("/api", routers_1.default);
app.use(gobalErrorHandilers_1.default);
app.use(not_found_1.default);
exports.default = app;
