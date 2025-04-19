"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRouters = void 0;
const express_1 = __importDefault(require("express"));
const bike_contllors_1 = require("./bike.contllors");
const route = express_1.default.Router();
route.post("/", bike_contllors_1.bikeContllors.createBike);
route.get("/", bike_contllors_1.bikeContllors.getAllBike);
route.get("/:bikeId", bike_contllors_1.bikeContllors.getSingleBike);
route.put("/:bikeId", bike_contllors_1.bikeContllors.updateSingleBike);
route.delete("/:bikeId", bike_contllors_1.bikeContllors.deleteSingleBike);
exports.bikeRouters = route;
