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
exports.bikeContllors = void 0;
const async_catch_1 = __importDefault(require("../../utils/async.catch"));
const send_response_1 = __importDefault(require("../../utils/send.response"));
const bike_service_1 = require("./bike.service");
const createBike = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_service_1.bikeServices.createBikeForDb(req.body);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully created bike",
        data: result,
    });
}));
const getAllBike = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_service_1.bikeServices.getAllBikeForDb();
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully get all bikes",
        data: result,
    });
}));
const getSingleBike = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bikeId } = req.params;
    const result = yield bike_service_1.bikeServices.getSingleBikeForDb(bikeId);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully get single bike",
        data: result,
    });
}));
const updateSingleBike = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bikeId } = req.params;
    const result = yield bike_service_1.bikeServices.updatedSingleBikeForDb(bikeId, req.body);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully update single bike",
        data: result,
    });
}));
const deleteSingleBike = (0, async_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bikeId } = req.params;
    const result = yield bike_service_1.bikeServices.deletedSingleBikeForDb(bikeId);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "success fully delete single bike",
    });
}));
exports.bikeContllors = {
    createBike,
    getAllBike,
    getSingleBike,
    updateSingleBike,
    deleteSingleBike,
};
