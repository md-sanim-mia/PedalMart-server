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
exports.customerService = void 0;
const prisma_1 = require("../../utils/prisma");
const createCustomerForDb = (paylood) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistCustomer = yield prisma_1.prisma.customer.findFirst({
        where: { email: paylood.email },
    });
    if (isExistCustomer) {
        throw new Error("customer already exist in database");
    }
    const result = yield prisma_1.prisma.customer.create({ data: paylood });
    return result;
});
const getAllCustomerForDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findMany({});
    return result;
});
const getSingleCustomerForDb = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findUnique({
        where: { customerId: customerId },
    });
    return result;
});
const updatedSingleCustomerForDb = (customerId, paylood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.update({
        where: { customerId: customerId },
        data: paylood,
    });
    return result;
});
const deletedSingleCustomerForDb = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.delete({
        where: { customerId: customerId },
    });
    return result;
});
exports.customerService = {
    createCustomerForDb,
    getAllCustomerForDb,
    getSingleCustomerForDb,
    updatedSingleCustomerForDb,
    deletedSingleCustomerForDb,
};
