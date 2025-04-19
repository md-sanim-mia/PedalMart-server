"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouters = void 0;
const express_1 = __importDefault(require("express"));
const customer_contllors_1 = require("./customer.contllors");
const route = express_1.default.Router();
route.post("/", customer_contllors_1.customerContllors.createCustomer);
route.get("/", customer_contllors_1.customerContllors.getAllCustomer);
route.get("/:customerId", customer_contllors_1.customerContllors.getSingleCustomer);
route.put("/:customerId", customer_contllors_1.customerContllors.updateSingleCustomer);
route.delete("/:customerId", customer_contllors_1.customerContllors.deleteSingleCustomer);
exports.customerRouters = route;
