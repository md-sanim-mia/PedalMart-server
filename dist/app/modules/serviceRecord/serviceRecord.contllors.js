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
exports.serviceRecordContllors = void 0;
const async_catch_1 = __importDefault(require("../../utils/async.catch"));
const send_response_1 = __importDefault(require("../../utils/send.response"));
const serviceRecord_service_1 = require("./serviceRecord.service");
const createServiceRecord = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield serviceRecord_service_1.serviceRecord.createServiceRecordForDb(req.body);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully created service record ",
        data: result,
    });
}));
const getAllServiceRecord = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield serviceRecord_service_1.serviceRecord.getAllServiceRecordForDb();
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully get all service record",
        data: result,
    });
}));
const getSinglesServiceRecord = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const result = yield serviceRecord_service_1.serviceRecord.getSingleServiceRecordForDb(serviceId);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully get single customer",
        data: result,
    });
}));
const updateSingleServiceRecord = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const result = yield serviceRecord_service_1.serviceRecord.updatedSingleServiceRecordForDb(serviceId, req.body);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully update single customer",
        data: result,
    });
}));
const overServiceRecord = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hello world");
    const result = yield serviceRecord_service_1.serviceRecord.overdueServiceForDb();
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully get pending or overdue",
        data: result,
    });
}));
// const deleteSingleServiceRecord = asyncCatch(async (req, res) => {
//   const { customerId } = req.params;
//   const result = await serviceRecord.(customerId);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "success fully delete single customer",
//     data: result,
//   });
// });
exports.serviceRecordContllors = {
    createServiceRecord,
    getAllServiceRecord,
    getSinglesServiceRecord,
    updateSingleServiceRecord,
    overServiceRecord,
};
