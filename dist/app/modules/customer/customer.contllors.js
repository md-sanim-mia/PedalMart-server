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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerContllors = void 0;
const async_catch_1 = __importDefault(require("../../utils/async.catch"));
const send_response_1 = __importDefault(require("../../utils/send.response"));
const customer_service_1 = require("./customer.service");
const createCustomer = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerService.createCustomerForDb(req.body);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully created customer",
        data: result,
    });
}));
const getAllCustomer = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerService.getAllCustomerForDb();
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully get all customer",
        data: result,
    });
}));
const getSingleCustomer = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const result = yield customer_service_1.customerService.getSingleCustomerForDb(customerId);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully get single customer",
        data: result,
    });
}));
const updateSingleCustomer = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const result = yield customer_service_1.customerService.updatedSingleCustomerForDb(customerId, req.body);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully update single customer",
        data: result,
    });
}));
const deleteSingleCustomer = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const result = yield customer_service_1.customerService.deletedSingleCustomerForDb(customerId);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully delete single customer",
        data: result,
    });
}));
exports.customerContllors = {
    createCustomer,
    getAllCustomer,
    getSingleCustomer,
    updateSingleCustomer,
    deleteSingleCustomer,
};
