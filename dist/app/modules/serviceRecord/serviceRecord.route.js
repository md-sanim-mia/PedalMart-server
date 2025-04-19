"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordRouters = void 0;
const express_1 = __importDefault(require("express"));
const serviceRecord_contllors_1 = require("./serviceRecord.contllors");
const route = express_1.default.Router();
route.post("/", serviceRecord_contllors_1.serviceRecordContllors.createServiceRecord);
route.get("/", serviceRecord_contllors_1.serviceRecordContllors.getAllServiceRecord);
route.get("/status-pending", serviceRecord_contllors_1.serviceRecordContllors.overServiceRecord);
route.get("/:serviceId", serviceRecord_contllors_1.serviceRecordContllors.getSinglesServiceRecord);
route.put("/:serviceId", serviceRecord_contllors_1.serviceRecordContllors.updateSingleServiceRecord);
exports.serviceRecordRouters = route;
