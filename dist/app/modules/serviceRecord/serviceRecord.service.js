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
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecord = void 0;
const prisma_1 = require("../../utils/prisma");
const createServiceRecordForDb = (paylood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.create({ data: paylood });
    return result;
});
const getAllServiceRecordForDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findMany({});
    return result;
});
const getSingleServiceRecordForDb = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findUnique({
        where: { serviceId: serviceId },
    });
    return result;
});
const updatedSingleServiceRecordForDb = (serviceId, paylood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.update({
        where: { serviceId: serviceId },
        data: { completionDate: paylood.completionDate },
    });
    return result;
});
const overdueServiceForDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_1.prisma.serviceRecord.findMany({
        where: {
            OR: [
                { status: "pending" },
                { status: "in_progress" },
                { serviceDate: { lt: sevenDaysAgo } },
            ],
        },
    });
    return result;
});
exports.serviceRecord = {
    createServiceRecordForDb,
    getAllServiceRecordForDb,
    getSingleServiceRecordForDb,
    updatedSingleServiceRecordForDb,
    overdueServiceForDb,
};
